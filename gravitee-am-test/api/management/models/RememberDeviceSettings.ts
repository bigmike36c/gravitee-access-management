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
 * @interface RememberDeviceSettings
 */
export interface RememberDeviceSettings {
    /**
     * 
     * @type {boolean}
     * @memberof RememberDeviceSettings
     */
    active?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RememberDeviceSettings
     */
    expirationTimeSeconds?: number;
    /**
     * 
     * @type {string}
     * @memberof RememberDeviceSettings
     */
    deviceIdentifierId?: string;
}

export function RememberDeviceSettingsFromJSON(json: any): RememberDeviceSettings {
    return RememberDeviceSettingsFromJSONTyped(json, false);
}

export function RememberDeviceSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RememberDeviceSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': !exists(json, 'active') ? undefined : json['active'],
        'expirationTimeSeconds': !exists(json, 'expirationTimeSeconds') ? undefined : json['expirationTimeSeconds'],
        'deviceIdentifierId': !exists(json, 'deviceIdentifierId') ? undefined : json['deviceIdentifierId'],
    };
}

export function RememberDeviceSettingsToJSON(value?: RememberDeviceSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
        'expirationTimeSeconds': value.expirationTimeSeconds,
        'deviceIdentifierId': value.deviceIdentifierId,
    };
}

