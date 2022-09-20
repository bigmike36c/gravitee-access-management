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
 * @interface Resource
 */
export interface Resource {
    /**
     * 
     * @type {string}
     * @memberof Resource
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Resource
     */
    resourceScopes?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Resource
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Resource
     */
    iconUri?: string;
    /**
     * 
     * @type {string}
     * @memberof Resource
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Resource
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof Resource
     */
    domain?: string;
    /**
     * 
     * @type {string}
     * @memberof Resource
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof Resource
     */
    clientId?: string;
    /**
     * 
     * @type {Date}
     * @memberof Resource
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Resource
     */
    updatedAt?: Date;
}

export function ResourceFromJSON(json: any): Resource {
    return ResourceFromJSONTyped(json, false);
}

export function ResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Resource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'resourceScopes': !exists(json, 'resourceScopes') ? undefined : json['resourceScopes'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'iconUri': !exists(json, 'iconUri') ? undefined : json['iconUri'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'domain': !exists(json, 'domain') ? undefined : json['domain'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'clientId': !exists(json, 'clientId') ? undefined : json['clientId'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
    };
}

export function ResourceToJSON(value?: Resource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'resourceScopes': value.resourceScopes,
        'description': value.description,
        'iconUri': value.iconUri,
        'name': value.name,
        'type': value.type,
        'domain': value.domain,
        'userId': value.userId,
        'clientId': value.clientId,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}
