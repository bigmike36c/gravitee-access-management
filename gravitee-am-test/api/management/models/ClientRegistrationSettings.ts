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
/**
 * 
 * @export
 * @interface ClientRegistrationSettings
 */
export interface ClientRegistrationSettings {
    /**
     * 
     * @type {boolean}
     * @memberof ClientRegistrationSettings
     */
    allowLocalhostRedirectUri?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClientRegistrationSettings
     */
    allowHttpSchemeRedirectUri?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClientRegistrationSettings
     */
    allowWildCardRedirectUri?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ClientRegistrationSettings
     */
    defaultScopes?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ClientRegistrationSettings
     */
    allowedScopes?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof ClientRegistrationSettings
     */
    allowedScopesEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClientRegistrationSettings
     */
    clientTemplateEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClientRegistrationSettings
     */
    dynamicClientRegistrationEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClientRegistrationSettings
     */
    openDynamicClientRegistrationEnabled?: boolean;
}

export function ClientRegistrationSettingsFromJSON(json: any): ClientRegistrationSettings {
    return ClientRegistrationSettingsFromJSONTyped(json, false);
}

export function ClientRegistrationSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientRegistrationSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowLocalhostRedirectUri': !exists(json, 'allowLocalhostRedirectUri') ? undefined : json['allowLocalhostRedirectUri'],
        'allowHttpSchemeRedirectUri': !exists(json, 'allowHttpSchemeRedirectUri') ? undefined : json['allowHttpSchemeRedirectUri'],
        'allowWildCardRedirectUri': !exists(json, 'allowWildCardRedirectUri') ? undefined : json['allowWildCardRedirectUri'],
        'defaultScopes': !exists(json, 'defaultScopes') ? undefined : json['defaultScopes'],
        'allowedScopes': !exists(json, 'allowedScopes') ? undefined : json['allowedScopes'],
        'allowedScopesEnabled': !exists(json, 'allowedScopesEnabled') ? undefined : json['allowedScopesEnabled'],
        'clientTemplateEnabled': !exists(json, 'clientTemplateEnabled') ? undefined : json['clientTemplateEnabled'],
        'dynamicClientRegistrationEnabled': !exists(json, 'dynamicClientRegistrationEnabled') ? undefined : json['dynamicClientRegistrationEnabled'],
        'openDynamicClientRegistrationEnabled': !exists(json, 'openDynamicClientRegistrationEnabled') ? undefined : json['openDynamicClientRegistrationEnabled'],
    };
}

export function ClientRegistrationSettingsToJSON(value?: ClientRegistrationSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowLocalhostRedirectUri': value.allowLocalhostRedirectUri,
        'allowHttpSchemeRedirectUri': value.allowHttpSchemeRedirectUri,
        'allowWildCardRedirectUri': value.allowWildCardRedirectUri,
        'defaultScopes': value.defaultScopes,
        'allowedScopes': value.allowedScopes,
        'allowedScopesEnabled': value.allowedScopesEnabled,
        'clientTemplateEnabled': value.clientTemplateEnabled,
        'dynamicClientRegistrationEnabled': value.dynamicClientRegistrationEnabled,
        'openDynamicClientRegistrationEnabled': value.openDynamicClientRegistrationEnabled,
    };
}
