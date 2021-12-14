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

package io.gravitee.am.management.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.gravitee.am.identityprovider.api.User;
import io.gravitee.am.management.service.AbstractSensitiveProxy;
import io.gravitee.am.management.service.AlertNotifierServiceProxy;
import io.gravitee.am.management.service.impl.plugins.NotifierPluginService;
import io.gravitee.am.model.ReferenceType;
import io.gravitee.am.model.alert.AlertNotifier;
import io.gravitee.am.repository.management.api.search.AlertNotifierCriteria;
import io.gravitee.am.service.AlertNotifierService;
import io.gravitee.am.service.model.NewAlertNotifier;
import io.gravitee.am.service.model.PatchAlertNotifier;
import io.reactivex.Completable;
import io.reactivex.Flowable;
import io.reactivex.Single;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

/**
 * @author Rémi SULTAN (remi.sultan at graviteesource.com)
 * @author GraviteeSource Team
 */
@Component
public class AlertNotifierServiceProxyImpl extends AbstractSensitiveProxy implements AlertNotifierServiceProxy {

    @Autowired
    private AlertNotifierService alertNotifierService;

    @Autowired
    private NotifierPluginService notifierPluginService;

    @Autowired
    private ObjectMapper objectMapper;

    @Override
    public Single<AlertNotifier> getById(ReferenceType referenceType, String referenceId, String notifierId) {
        return alertNotifierService.getById(referenceType, referenceId, notifierId).flatMap(this::filterSensitiveData);
    }

    @Override
    public Flowable<AlertNotifier> findByDomainAndCriteria(String domainId, AlertNotifierCriteria criteria) {
        return alertNotifierService.findByDomainAndCriteria(domainId, criteria).flatMapSingle(this::filterSensitiveData);
    }

    @Override
    public Flowable<AlertNotifier> findByReferenceAndCriteria(ReferenceType referenceType, String referenceId, AlertNotifierCriteria criteria) {
        return alertNotifierService.findByReferenceAndCriteria(referenceType, referenceId, criteria).flatMapSingle(this::filterSensitiveData);
    }

    @Override
    public Single<AlertNotifier> create(ReferenceType referenceType, String referenceId, NewAlertNotifier newAlertNotifier, User byUser) {
        return alertNotifierService.create(referenceType, referenceId, newAlertNotifier, byUser).flatMap(this::filterSensitiveData);
    }

    @Override
    public Single<AlertNotifier> update(ReferenceType referenceType, String referenceId, String alertNotifierId, PatchAlertNotifier patchAlertNotifier, User byUser) {
        return alertNotifierService.getById(referenceType, referenceId, alertNotifierId)
                .flatMap(oldAlertNotifier -> updateSensitiveData(patchAlertNotifier, oldAlertNotifier))
                .flatMap(alertNotifierToPatch -> alertNotifierService.update(referenceType, referenceId, alertNotifierId, alertNotifierToPatch, byUser))
                .flatMap(this::filterSensitiveData);
    }

    @Override
    public Completable delete(ReferenceType referenceType, String referenceId, String notifierId, User byUser) {
        return alertNotifierService.delete(referenceType, referenceId, notifierId, byUser);
    }

    private Single<AlertNotifier> filterSensitiveData(AlertNotifier alertNotifier) {
        return notifierPluginService.getSchema(alertNotifier.getType())
                .map(schema -> {
                    var schemaNode = objectMapper.readTree(schema);
                    var configurationNode = objectMapper.readTree(alertNotifier.getConfiguration());
                    super.filterSensitiveData(schemaNode, configurationNode, alertNotifier::setConfiguration);
                    return alertNotifier;
                });
    }

    private Single<PatchAlertNotifier> updateSensitiveData(PatchAlertNotifier patchAlertNotifier, AlertNotifier alertNotifier) {
        return notifierPluginService.getSchema(alertNotifier.getType())
                .map(schema -> {
                    var updateConfig = objectMapper.readTree(patchAlertNotifier.getConfiguration().orElse("{}"));
                    var oldConfig = objectMapper.readTree(alertNotifier.getConfiguration());
                    var schemaConfig = objectMapper.readTree(schema);
                    super.updateSensitiveData(updateConfig, oldConfig, schemaConfig, str ->
                            patchAlertNotifier.setConfiguration(Optional.ofNullable(str))
                    );
                    return patchAlertNotifier;
                });
    }
}