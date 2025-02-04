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
 * @interface ResetPasswordSettings
 */
export interface ResetPasswordSettings {
    /**
     * 
     * @type {boolean}
     * @memberof ResetPasswordSettings
     */
    oldPasswordRequired?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ResetPasswordSettings
     */
    tokenAge?: number;
}

export function ResetPasswordSettingsFromJSON(json: any): ResetPasswordSettings {
    return ResetPasswordSettingsFromJSONTyped(json, false);
}

export function ResetPasswordSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResetPasswordSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'oldPasswordRequired': !exists(json, 'oldPasswordRequired') ? undefined : json['oldPasswordRequired'],
        'tokenAge': !exists(json, 'tokenAge') ? undefined : json['tokenAge'],
    };
}

export function ResetPasswordSettingsToJSON(value?: ResetPasswordSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'oldPasswordRequired': value.oldPasswordRequired,
        'tokenAge': value.tokenAge,
    };
}

