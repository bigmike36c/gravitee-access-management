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
 * @interface UserRolesResource
 */
export interface UserRolesResource {
    /**
     * 
     * @type {any}
     * @memberof UserRolesResource
     */
    userRoleResource?: any;
}

export function UserRolesResourceFromJSON(json: any): UserRolesResource {
    return UserRolesResourceFromJSONTyped(json, false);
}

export function UserRolesResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserRolesResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userRoleResource': !exists(json, 'userRoleResource') ? undefined : json['userRoleResource'],
    };
}

export function UserRolesResourceToJSON(value?: UserRolesResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userRoleResource': value.userRoleResource,
    };
}
