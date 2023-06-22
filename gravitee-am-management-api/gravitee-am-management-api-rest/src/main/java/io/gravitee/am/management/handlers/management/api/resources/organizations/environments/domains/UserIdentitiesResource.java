/**
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.gravitee.am.management.handlers.management.api.resources.organizations.environments.domains;

import io.gravitee.am.management.handlers.management.api.model.UserIdentityEntity;
import io.gravitee.am.management.handlers.management.api.resources.AbstractResource;
import io.gravitee.am.management.service.IdentityProviderServiceProxy;
import io.gravitee.am.management.service.UserService;
import io.gravitee.am.model.Acl;
import io.gravitee.am.model.UserIdentity;
import io.gravitee.am.model.permissions.Permission;
import io.gravitee.am.service.DomainService;
import io.gravitee.am.service.exception.DomainNotFoundException;
import io.gravitee.am.service.exception.UserNotFoundException;
import io.gravitee.common.http.MediaType;
import io.reactivex.rxjava3.core.Maybe;
import io.reactivex.rxjava3.core.Observable;
import io.reactivex.rxjava3.core.Single;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.container.AsyncResponse;
import javax.ws.rs.container.ResourceContext;
import javax.ws.rs.container.Suspended;
import javax.ws.rs.core.Context;
import java.util.Collections;

/**
 * @author Titouan COMPIEGNE (titouan.compiegne at graviteesource.com)
 * @author GraviteeSource Team
 */
public class UserIdentitiesResource extends AbstractResource {

    @Context
    private ResourceContext resourceContext;

    @Autowired
    private DomainService domainService;

    @Autowired
    private UserService userService;

    @Autowired
    private IdentityProviderServiceProxy identityProviderService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Get a user linked identities",
            notes = "User must have the DOMAIN_USER[READ] permission on the specified domain " +
                    "or DOMAIN_USER[READ] permission on the specified environment " +
                    "or DOMAIN_USER[READ] permission on the specified organization")
    @ApiResponses({
            @ApiResponse(code = 200, message = "User linked identities successfully fetched", response = UserIdentityEntity.class, responseContainer = "List"),
            @ApiResponse(code = 500, message = "Internal server error")})
    public void list(
            @PathParam("organizationId") String organizationId,
            @PathParam("environmentId") String environmentId,
            @PathParam("domain") String domain,
            @PathParam("user") String user,
            @Suspended final AsyncResponse response) {

        checkAnyPermission(organizationId, environmentId, domain, Permission.DOMAIN_USER, Acl.READ)
                .andThen(domainService.findById(domain)
                        .switchIfEmpty(Maybe.error(new DomainNotFoundException(domain)))
                        .flatMap(__ -> userService.findById(user))
                        .switchIfEmpty(Maybe.error(new UserNotFoundException(user)))
                        .flatMapSingle(user1 -> {
                            if (user1.getIdentities() == null) {
                                return Single.just(Collections.emptyList());
                            }
                            return Observable.fromIterable(user1.getIdentities())
                                    .flatMapMaybe(userIdentity ->
                                            identityProviderService.findById(userIdentity.getProviderId())
                                                    .map(identityProvider -> {
                                                        UserIdentityEntity userIdentityEntity = new UserIdentityEntity(userIdentity);
                                                        userIdentityEntity.setProviderName(identityProvider.getName());
                                                        return userIdentityEntity;
                                                    })
                                                    .defaultIfEmpty(unknown(userIdentity))
                                                    .toMaybe()
                                    )
                                    .toList();
                        }))
                .subscribe(response::resume, response::resume);
    }

    @Path("{identity}")
    public UserIdentityResource getUserIdentityResource() {
        return resourceContext.getResource(UserIdentityResource.class);
    }

    private UserIdentityEntity unknown(UserIdentity userIdentity) {
        UserIdentityEntity userIdentityEntity = new UserIdentityEntity(userIdentity);
        userIdentityEntity.setProviderName("Deleted identity provider");
        return userIdentityEntity;
    }
}
