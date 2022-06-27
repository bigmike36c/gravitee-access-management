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
 * @interface UsersResource
 */
export interface UsersResource {
    /**
     * 
     * @type {any}
     * @memberof UsersResource
     */
    userResource?: any;
}

export function UsersResourceFromJSON(json: any): UsersResource {
    return UsersResourceFromJSONTyped(json, false);
}

export function UsersResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userResource': !exists(json, 'userResource') ? undefined : json['userResource'],
    };
}

export function UsersResourceToJSON(value?: UsersResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userResource': value.userResource,
    };
}
