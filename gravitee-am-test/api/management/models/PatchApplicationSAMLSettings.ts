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
 * @interface PatchApplicationSAMLSettings
 */
export interface PatchApplicationSAMLSettings {
    /**
     * 
     * @type {string}
     * @memberof PatchApplicationSAMLSettings
     */
    entityId?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchApplicationSAMLSettings
     */
    attributeConsumeServiceUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchApplicationSAMLSettings
     */
    singleLogoutServiceUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchApplicationSAMLSettings
     */
    certificate?: string;
}

export function PatchApplicationSAMLSettingsFromJSON(json: any): PatchApplicationSAMLSettings {
    return PatchApplicationSAMLSettingsFromJSONTyped(json, false);
}

export function PatchApplicationSAMLSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchApplicationSAMLSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entityId': !exists(json, 'entityId') ? undefined : json['entityId'],
        'attributeConsumeServiceUrl': !exists(json, 'attributeConsumeServiceUrl') ? undefined : json['attributeConsumeServiceUrl'],
        'singleLogoutServiceUrl': !exists(json, 'singleLogoutServiceUrl') ? undefined : json['singleLogoutServiceUrl'],
        'certificate': !exists(json, 'certificate') ? undefined : json['certificate'],
    };
}

export function PatchApplicationSAMLSettingsToJSON(value?: PatchApplicationSAMLSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entityId': value.entityId,
        'attributeConsumeServiceUrl': value.attributeConsumeServiceUrl,
        'singleLogoutServiceUrl': value.singleLogoutServiceUrl,
        'certificate': value.certificate,
    };
}
