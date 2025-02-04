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
 * @interface Scope
 */
export interface Scope {
    /**
     * 
     * @type {string}
     * @memberof Scope
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Scope
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof Scope
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Scope
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Scope
     */
    iconUri?: string;
    /**
     * 
     * @type {string}
     * @memberof Scope
     */
    domain?: string;
    /**
     * 
     * @type {number}
     * @memberof Scope
     */
    createdAt?: number;
    /**
     * 
     * @type {number}
     * @memberof Scope
     */
    updatedAt?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Scope
     */
    system?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof Scope
     */
    claims?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof Scope
     */
    expiresIn?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Scope
     */
    discovery?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Scope
     */
    parameterized?: boolean;
}

export function ScopeFromJSON(json: any): Scope {
    return ScopeFromJSONTyped(json, false);
}

export function ScopeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Scope {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'key': !exists(json, 'key') ? undefined : json['key'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'iconUri': !exists(json, 'iconUri') ? undefined : json['iconUri'],
        'domain': !exists(json, 'domain') ? undefined : json['domain'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'system': !exists(json, 'system') ? undefined : json['system'],
        'claims': !exists(json, 'claims') ? undefined : json['claims'],
        'expiresIn': !exists(json, 'expiresIn') ? undefined : json['expiresIn'],
        'discovery': !exists(json, 'discovery') ? undefined : json['discovery'],
        'parameterized': !exists(json, 'parameterized') ? undefined : json['parameterized'],
    };
}

export function ScopeToJSON(value?: Scope | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'key': value.key,
        'name': value.name,
        'description': value.description,
        'iconUri': value.iconUri,
        'domain': value.domain,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'system': value.system,
        'claims': value.claims,
        'expiresIn': value.expiresIn,
        'discovery': value.discovery,
        'parameterized': value.parameterized,
    };
}

