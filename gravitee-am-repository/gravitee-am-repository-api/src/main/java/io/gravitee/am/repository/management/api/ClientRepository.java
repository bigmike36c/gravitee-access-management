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
package io.gravitee.am.repository.management.api;

import io.gravitee.am.model.oidc.Client;
import io.reactivex.Completable;
import io.reactivex.Single;
import java.util.Set;

/**
 * NOTE: only use for the ClientsToApplications Upgrader
 * Use the {@link io.gravitee.am.repository.management.api.ApplicationRepository} for the application management
 * @author David BRASSELY (david.brassely at graviteesource.com)
 * @author Titouan COMPIEGNE (titouan.compiegne at graviteesource.com)
 * @author GraviteeSource Team
 */
public interface ClientRepository {
    Single<Set<Client>> findAll();

    Single<Boolean> collectionExists();

    Completable deleteCollection();
}