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
 * @interface NewScope
 */
export interface NewScope {
    /**
     * 
     * @type {string}
     * @memberof NewScope
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof NewScope
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewScope
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof NewScope
     */
    iconUri?: string;
    /**
     * 
     * @type {number}
     * @memberof NewScope
     */
    expiresIn?: number;
    /**
     * 
     * @type {boolean}
     * @memberof NewScope
     */
    discovery?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NewScope
     */
    parameterized?: boolean;
}

export function NewScopeFromJSON(json: any): NewScope {
    return NewScopeFromJSONTyped(json, false);
}

export function NewScopeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewScope {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['key'],
        'name': json['name'],
        'description': json['description'],
        'iconUri': !exists(json, 'iconUri') ? undefined : json['iconUri'],
        'expiresIn': !exists(json, 'expiresIn') ? undefined : json['expiresIn'],
        'discovery': !exists(json, 'discovery') ? undefined : json['discovery'],
        'parameterized': !exists(json, 'parameterized') ? undefined : json['parameterized'],
    };
}

export function NewScopeToJSON(value?: NewScope | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'name': value.name,
        'description': value.description,
        'iconUri': value.iconUri,
        'expiresIn': value.expiresIn,
        'discovery': value.discovery,
        'parameterized': value.parameterized,
    };
}

