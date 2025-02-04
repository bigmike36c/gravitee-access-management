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
 * @interface UpdateScope
 */
export interface UpdateScope {
    /**
     * 
     * @type {string}
     * @memberof UpdateScope
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateScope
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof UpdateScope
     */
    expiresIn?: number;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateScope
     */
    discovery?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateScope
     */
    parameterized?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpdateScope
     */
    iconUri?: string;
}

export function UpdateScopeFromJSON(json: any): UpdateScope {
    return UpdateScopeFromJSONTyped(json, false);
}

export function UpdateScopeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateScope {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
        'expiresIn': !exists(json, 'expiresIn') ? undefined : json['expiresIn'],
        'discovery': !exists(json, 'discovery') ? undefined : json['discovery'],
        'parameterized': !exists(json, 'parameterized') ? undefined : json['parameterized'],
        'iconUri': !exists(json, 'iconUri') ? undefined : json['iconUri'],
    };
}

export function UpdateScopeToJSON(value?: UpdateScope | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'expiresIn': value.expiresIn,
        'discovery': value.discovery,
        'parameterized': value.parameterized,
        'iconUri': value.iconUri,
    };
}

