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
 * @interface NewAlertNotifier
 */
export interface NewAlertNotifier {
    /**
     * 
     * @type {string}
     * @memberof NewAlertNotifier
     */
    type?: string;
    /**
     * 
     * @type {boolean}
     * @memberof NewAlertNotifier
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof NewAlertNotifier
     */
    configuration: string;
}

export function NewAlertNotifierFromJSON(json: any): NewAlertNotifier {
    return NewAlertNotifierFromJSONTyped(json, false);
}

export function NewAlertNotifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewAlertNotifier {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'configuration': json['configuration'],
    };
}

export function NewAlertNotifierToJSON(value?: NewAlertNotifier | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'enabled': value.enabled,
        'configuration': value.configuration,
    };
}
