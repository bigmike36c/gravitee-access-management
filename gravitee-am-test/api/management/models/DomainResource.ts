/* tslint:disable */
/* eslint-disable */
/**
 * Gravitee.io - Access Management API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    AlertsResource,
    AlertsResourceFromJSON,
    AlertsResourceFromJSONTyped,
    AlertsResourceToJSON,
} from './AlertsResource';
import {
    ApplicationsResource,
    ApplicationsResourceFromJSON,
    ApplicationsResourceFromJSONTyped,
    ApplicationsResourceToJSON,
} from './ApplicationsResource';
import {
    AuditsResource,
    AuditsResourceFromJSON,
    AuditsResourceFromJSONTyped,
    AuditsResourceToJSON,
} from './AuditsResource';
import {
    AuthenticationDeviceNotifiersResource,
    AuthenticationDeviceNotifiersResourceFromJSON,
    AuthenticationDeviceNotifiersResourceFromJSONTyped,
    AuthenticationDeviceNotifiersResourceToJSON,
} from './AuthenticationDeviceNotifiersResource';
import {
    BotDetectionsResource,
    BotDetectionsResourceFromJSON,
    BotDetectionsResourceFromJSONTyped,
    BotDetectionsResourceToJSON,
} from './BotDetectionsResource';
import {
    CertificatesResource,
    CertificatesResourceFromJSON,
    CertificatesResourceFromJSONTyped,
    CertificatesResourceToJSON,
} from './CertificatesResource';
import {
    DeviceIdentifiersResource,
    DeviceIdentifiersResourceFromJSON,
    DeviceIdentifiersResourceFromJSONTyped,
    DeviceIdentifiersResourceToJSON,
} from './DeviceIdentifiersResource';
import {
    EmailsResource,
    EmailsResourceFromJSON,
    EmailsResourceFromJSONTyped,
    EmailsResourceToJSON,
} from './EmailsResource';
import {
    ExtensionGrantsResource,
    ExtensionGrantsResourceFromJSON,
    ExtensionGrantsResourceFromJSONTyped,
    ExtensionGrantsResourceToJSON,
} from './ExtensionGrantsResource';
import {
    FactorsResource,
    FactorsResourceFromJSON,
    FactorsResourceFromJSONTyped,
    FactorsResourceToJSON,
} from './FactorsResource';
import {
    FlowsResource,
    FlowsResourceFromJSON,
    FlowsResourceFromJSONTyped,
    FlowsResourceToJSON,
} from './FlowsResource';
import {
    FormsResource,
    FormsResourceFromJSON,
    FormsResourceFromJSONTyped,
    FormsResourceToJSON,
} from './FormsResource';
import {
    GroupsResource,
    GroupsResourceFromJSON,
    GroupsResourceFromJSONTyped,
    GroupsResourceToJSON,
} from './GroupsResource';
import {
    I18nDictionariesResource,
    I18nDictionariesResourceFromJSON,
    I18nDictionariesResourceFromJSONTyped,
    I18nDictionariesResourceToJSON,
} from './I18nDictionariesResource';
import {
    IdentityProvidersResource,
    IdentityProvidersResourceFromJSON,
    IdentityProvidersResourceFromJSONTyped,
    IdentityProvidersResourceToJSON,
} from './IdentityProvidersResource';
import {
    MembersResource,
    MembersResourceFromJSON,
    MembersResourceFromJSONTyped,
    MembersResourceToJSON,
} from './MembersResource';
import {
    ReportersResource,
    ReportersResourceFromJSON,
    ReportersResourceFromJSONTyped,
    ReportersResourceToJSON,
} from './ReportersResource';
import {
    RolesResource,
    RolesResourceFromJSON,
    RolesResourceFromJSONTyped,
    RolesResourceToJSON,
} from './RolesResource';
import {
    ScopesResource,
    ScopesResourceFromJSON,
    ScopesResourceFromJSONTyped,
    ScopesResourceToJSON,
} from './ScopesResource';
import {
    ServiceResourcesResource,
    ServiceResourcesResourceFromJSON,
    ServiceResourcesResourceFromJSONTyped,
    ServiceResourcesResourceToJSON,
} from './ServiceResourcesResource';
import {
    ThemesResource,
    ThemesResourceFromJSON,
    ThemesResourceFromJSONTyped,
    ThemesResourceToJSON,
} from './ThemesResource';
import {
    UsersResource,
    UsersResourceFromJSON,
    UsersResourceFromJSONTyped,
    UsersResourceToJSON,
} from './UsersResource';

/**
 * 
 * @export
 * @interface DomainResource
 */
export interface DomainResource {
    /**
     * 
     * @type {MembersResource}
     * @memberof DomainResource
     */
    membersResource?: MembersResource;
    /**
     * 
     * @type {AuditsResource}
     * @memberof DomainResource
     */
    auditsResource?: AuditsResource;
    /**
     * 
     * @type {RolesResource}
     * @memberof DomainResource
     */
    rolesResource?: RolesResource;
    /**
     * 
     * @type {GroupsResource}
     * @memberof DomainResource
     */
    groupsResource?: GroupsResource;
    /**
     * 
     * @type {IdentityProvidersResource}
     * @memberof DomainResource
     */
    identityProvidersResource?: IdentityProvidersResource;
    /**
     * 
     * @type {UsersResource}
     * @memberof DomainResource
     */
    usersResource?: UsersResource;
    /**
     * 
     * @type {ApplicationsResource}
     * @memberof DomainResource
     */
    applicationsResource?: ApplicationsResource;
    /**
     * 
     * @type {CertificatesResource}
     * @memberof DomainResource
     */
    certificatesResource?: CertificatesResource;
    /**
     * 
     * @type {ExtensionGrantsResource}
     * @memberof DomainResource
     */
    tokenGrantersResource?: ExtensionGrantsResource;
    /**
     * 
     * @type {ScopesResource}
     * @memberof DomainResource
     */
    scopesResource?: ScopesResource;
    /**
     * 
     * @type {FormsResource}
     * @memberof DomainResource
     */
    pagesResource?: FormsResource;
    /**
     * 
     * @type {I18nDictionariesResource}
     * @memberof DomainResource
     */
    dictionariesResource?: I18nDictionariesResource;
    /**
     * 
     * @type {EmailsResource}
     * @memberof DomainResource
     */
    emailsResource?: EmailsResource;
    /**
     * 
     * @type {ReportersResource}
     * @memberof DomainResource
     */
    reportersResource?: ReportersResource;
    /**
     * 
     * @type {any}
     * @memberof DomainResource
     */
    analyticsResource?: any;
    /**
     * 
     * @type {FactorsResource}
     * @memberof DomainResource
     */
    factorsResource?: FactorsResource;
    /**
     * 
     * @type {ServiceResourcesResource}
     * @memberof DomainResource
     */
    serviceResourcesResource?: ServiceResourcesResource;
    /**
     * 
     * @type {FlowsResource}
     * @memberof DomainResource
     */
    flowsResource?: FlowsResource;
    /**
     * 
     * @type {AlertsResource}
     * @memberof DomainResource
     */
    alertsResource?: AlertsResource;
    /**
     * 
     * @type {BotDetectionsResource}
     * @memberof DomainResource
     */
    botDetectionsResource?: BotDetectionsResource;
    /**
     * 
     * @type {DeviceIdentifiersResource}
     * @memberof DomainResource
     */
    deviceIdentifiersResource?: DeviceIdentifiersResource;
    /**
     * 
     * @type {AuthenticationDeviceNotifiersResource}
     * @memberof DomainResource
     */
    deviceNotifiersResource?: AuthenticationDeviceNotifiersResource;
    /**
     * 
     * @type {ThemesResource}
     * @memberof DomainResource
     */
    themesResources?: ThemesResource;
}

export function DomainResourceFromJSON(json: any): DomainResource {
    return DomainResourceFromJSONTyped(json, false);
}

export function DomainResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'membersResource': !exists(json, 'membersResource') ? undefined : MembersResourceFromJSON(json['membersResource']),
        'auditsResource': !exists(json, 'auditsResource') ? undefined : AuditsResourceFromJSON(json['auditsResource']),
        'rolesResource': !exists(json, 'rolesResource') ? undefined : RolesResourceFromJSON(json['rolesResource']),
        'groupsResource': !exists(json, 'groupsResource') ? undefined : GroupsResourceFromJSON(json['groupsResource']),
        'identityProvidersResource': !exists(json, 'identityProvidersResource') ? undefined : IdentityProvidersResourceFromJSON(json['identityProvidersResource']),
        'usersResource': !exists(json, 'usersResource') ? undefined : UsersResourceFromJSON(json['usersResource']),
        'applicationsResource': !exists(json, 'applicationsResource') ? undefined : ApplicationsResourceFromJSON(json['applicationsResource']),
        'certificatesResource': !exists(json, 'certificatesResource') ? undefined : CertificatesResourceFromJSON(json['certificatesResource']),
        'tokenGrantersResource': !exists(json, 'tokenGrantersResource') ? undefined : ExtensionGrantsResourceFromJSON(json['tokenGrantersResource']),
        'scopesResource': !exists(json, 'scopesResource') ? undefined : ScopesResourceFromJSON(json['scopesResource']),
        'pagesResource': !exists(json, 'pagesResource') ? undefined : FormsResourceFromJSON(json['pagesResource']),
        'dictionariesResource': !exists(json, 'dictionariesResource') ? undefined : I18nDictionariesResourceFromJSON(json['dictionariesResource']),
        'emailsResource': !exists(json, 'emailsResource') ? undefined : EmailsResourceFromJSON(json['emailsResource']),
        'reportersResource': !exists(json, 'reportersResource') ? undefined : ReportersResourceFromJSON(json['reportersResource']),
        'analyticsResource': !exists(json, 'analyticsResource') ? undefined : json['analyticsResource'],
        'factorsResource': !exists(json, 'factorsResource') ? undefined : FactorsResourceFromJSON(json['factorsResource']),
        'serviceResourcesResource': !exists(json, 'serviceResourcesResource') ? undefined : ServiceResourcesResourceFromJSON(json['serviceResourcesResource']),
        'flowsResource': !exists(json, 'flowsResource') ? undefined : FlowsResourceFromJSON(json['flowsResource']),
        'alertsResource': !exists(json, 'alertsResource') ? undefined : AlertsResourceFromJSON(json['alertsResource']),
        'botDetectionsResource': !exists(json, 'botDetectionsResource') ? undefined : BotDetectionsResourceFromJSON(json['botDetectionsResource']),
        'deviceIdentifiersResource': !exists(json, 'deviceIdentifiersResource') ? undefined : DeviceIdentifiersResourceFromJSON(json['deviceIdentifiersResource']),
        'deviceNotifiersResource': !exists(json, 'deviceNotifiersResource') ? undefined : AuthenticationDeviceNotifiersResourceFromJSON(json['deviceNotifiersResource']),
        'themesResources': !exists(json, 'themesResources') ? undefined : ThemesResourceFromJSON(json['themesResources']),
    };
}

export function DomainResourceToJSON(value?: DomainResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'membersResource': MembersResourceToJSON(value.membersResource),
        'auditsResource': AuditsResourceToJSON(value.auditsResource),
        'rolesResource': RolesResourceToJSON(value.rolesResource),
        'groupsResource': GroupsResourceToJSON(value.groupsResource),
        'identityProvidersResource': IdentityProvidersResourceToJSON(value.identityProvidersResource),
        'usersResource': UsersResourceToJSON(value.usersResource),
        'applicationsResource': ApplicationsResourceToJSON(value.applicationsResource),
        'certificatesResource': CertificatesResourceToJSON(value.certificatesResource),
        'tokenGrantersResource': ExtensionGrantsResourceToJSON(value.tokenGrantersResource),
        'scopesResource': ScopesResourceToJSON(value.scopesResource),
        'pagesResource': FormsResourceToJSON(value.pagesResource),
        'dictionariesResource': I18nDictionariesResourceToJSON(value.dictionariesResource),
        'emailsResource': EmailsResourceToJSON(value.emailsResource),
        'reportersResource': ReportersResourceToJSON(value.reportersResource),
        'analyticsResource': value.analyticsResource,
        'factorsResource': FactorsResourceToJSON(value.factorsResource),
        'serviceResourcesResource': ServiceResourcesResourceToJSON(value.serviceResourcesResource),
        'flowsResource': FlowsResourceToJSON(value.flowsResource),
        'alertsResource': AlertsResourceToJSON(value.alertsResource),
        'botDetectionsResource': BotDetectionsResourceToJSON(value.botDetectionsResource),
        'deviceIdentifiersResource': DeviceIdentifiersResourceToJSON(value.deviceIdentifiersResource),
        'deviceNotifiersResource': AuthenticationDeviceNotifiersResourceToJSON(value.deviceNotifiersResource),
        'themesResources': ThemesResourceToJSON(value.themesResources),
    };
}

