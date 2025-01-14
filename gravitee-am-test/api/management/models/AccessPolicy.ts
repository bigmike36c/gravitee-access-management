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
 * @interface AccessPolicy
 */
export interface AccessPolicy {
    /**
     * 
     * @type {string}
     * @memberof AccessPolicy
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof AccessPolicy
     */
    type?: AccessPolicyTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof AccessPolicy
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AccessPolicy
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AccessPolicy
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof AccessPolicy
     */
    order?: number;
    /**
     * 
     * @type {string}
     * @memberof AccessPolicy
     */
    condition?: string;
    /**
     * 
     * @type {string}
     * @memberof AccessPolicy
     */
    domain?: string;
    /**
     * 
     * @type {string}
     * @memberof AccessPolicy
     */
    resource?: string;
    /**
     * 
     * @type {number}
     * @memberof AccessPolicy
     */
    createdAt?: number;
    /**
     * 
     * @type {number}
     * @memberof AccessPolicy
     */
    updatedAt?: number;
}


/**
 * @export
 */
export const AccessPolicyTypeEnum = {
    Groovy: 'GROOVY'
} as const;
export type AccessPolicyTypeEnum = typeof AccessPolicyTypeEnum[keyof typeof AccessPolicyTypeEnum];


export function AccessPolicyFromJSON(json: any): AccessPolicy {
    return AccessPolicyFromJSONTyped(json, false);
}

export function AccessPolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccessPolicy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'condition': !exists(json, 'condition') ? undefined : json['condition'],
        'domain': !exists(json, 'domain') ? undefined : json['domain'],
        'resource': !exists(json, 'resource') ? undefined : json['resource'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
    };
}

export function AccessPolicyToJSON(value?: AccessPolicy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': value.type,
        'enabled': value.enabled,
        'name': value.name,
        'description': value.description,
        'order': value.order,
        'condition': value.condition,
        'domain': value.domain,
        'resource': value.resource,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
    };
}

