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
 * @interface Role
 */
export interface Role {
    /**
     * 
     * @type {string}
     * @memberof Role
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Role
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Role
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Role
     */
    referenceType?: RoleReferenceTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Role
     */
    referenceId?: string;
    /**
     * 
     * @type {string}
     * @memberof Role
     */
    assignableType?: RoleAssignableTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof Role
     */
    system?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Role
     */
    defaultRole?: boolean;
    /**
     * 
     * @type {{ [key: string]: Set<string>; }}
     * @memberof Role
     */
    permissionAcls?: { [key: string]: Set<string>; };
    /**
     * 
     * @type {Array<string>}
     * @memberof Role
     */
    oauthScopes?: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof Role
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Role
     */
    updatedAt?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof Role
     */
    internalOnly?: boolean;
}


/**
 * @export
 */
export const RoleReferenceTypeEnum = {
    Platform: 'PLATFORM',
    Domain: 'DOMAIN',
    Application: 'APPLICATION',
    Organization: 'ORGANIZATION',
    Environment: 'ENVIRONMENT'
} as const;
export type RoleReferenceTypeEnum = typeof RoleReferenceTypeEnum[keyof typeof RoleReferenceTypeEnum];

/**
 * @export
 */
export const RoleAssignableTypeEnum = {
    Platform: 'PLATFORM',
    Domain: 'DOMAIN',
    Application: 'APPLICATION',
    Organization: 'ORGANIZATION',
    Environment: 'ENVIRONMENT'
} as const;
export type RoleAssignableTypeEnum = typeof RoleAssignableTypeEnum[keyof typeof RoleAssignableTypeEnum];

/**
 * @export
 */
export const RolePermissionAclsEnum = {
    Create: 'CREATE',
    Read: 'READ',
    List: 'LIST',
    Update: 'UPDATE',
    Delete: 'DELETE'
} as const;
export type RolePermissionAclsEnum = typeof RolePermissionAclsEnum[keyof typeof RolePermissionAclsEnum];


export function RoleFromJSON(json: any): Role {
    return RoleFromJSONTyped(json, false);
}

export function RoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Role {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'referenceType': !exists(json, 'referenceType') ? undefined : json['referenceType'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'assignableType': !exists(json, 'assignableType') ? undefined : json['assignableType'],
        'system': !exists(json, 'system') ? undefined : json['system'],
        'defaultRole': !exists(json, 'defaultRole') ? undefined : json['defaultRole'],
        'permissionAcls': !exists(json, 'permissionAcls') ? undefined : json['permissionAcls'],
        'oauthScopes': !exists(json, 'oauthScopes') ? undefined : json['oauthScopes'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'internalOnly': !exists(json, 'internalOnly') ? undefined : json['internalOnly'],
    };
}

export function RoleToJSON(value?: Role | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'description': value.description,
        'referenceType': value.referenceType,
        'referenceId': value.referenceId,
        'assignableType': value.assignableType,
        'system': value.system,
        'defaultRole': value.defaultRole,
        'permissionAcls': value.permissionAcls,
        'oauthScopes': value.oauthScopes,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'internalOnly': value.internalOnly,
    };
}
