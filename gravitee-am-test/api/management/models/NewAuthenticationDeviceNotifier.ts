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
 * @interface NewAuthenticationDeviceNotifier
 */
export interface NewAuthenticationDeviceNotifier {
    /**
     * 
     * @type {string}
     * @memberof NewAuthenticationDeviceNotifier
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof NewAuthenticationDeviceNotifier
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof NewAuthenticationDeviceNotifier
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewAuthenticationDeviceNotifier
     */
    configuration: string;
}

export function NewAuthenticationDeviceNotifierFromJSON(json: any): NewAuthenticationDeviceNotifier {
    return NewAuthenticationDeviceNotifierFromJSONTyped(json, false);
}

export function NewAuthenticationDeviceNotifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewAuthenticationDeviceNotifier {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': json['type'],
        'name': json['name'],
        'configuration': json['configuration'],
    };
}

export function NewAuthenticationDeviceNotifierToJSON(value?: NewAuthenticationDeviceNotifier | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': value.type,
        'name': value.name,
        'configuration': value.configuration,
    };
}

