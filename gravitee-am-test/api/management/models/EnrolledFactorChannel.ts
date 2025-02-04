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
 * @interface EnrolledFactorChannel
 */
export interface EnrolledFactorChannel {
    /**
     * 
     * @type {string}
     * @memberof EnrolledFactorChannel
     */
    type?: EnrolledFactorChannelTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof EnrolledFactorChannel
     */
    target?: string;
}


/**
 * @export
 */
export const EnrolledFactorChannelTypeEnum = {
    Sms: 'SMS',
    Email: 'EMAIL',
    Http: 'HTTP',
    Call: 'CALL'
} as const;
export type EnrolledFactorChannelTypeEnum = typeof EnrolledFactorChannelTypeEnum[keyof typeof EnrolledFactorChannelTypeEnum];


export function EnrolledFactorChannelFromJSON(json: any): EnrolledFactorChannel {
    return EnrolledFactorChannelFromJSONTyped(json, false);
}

export function EnrolledFactorChannelFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrolledFactorChannel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'target': !exists(json, 'target') ? undefined : json['target'],
    };
}

export function EnrolledFactorChannelToJSON(value?: EnrolledFactorChannel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'target': value.target,
    };
}

