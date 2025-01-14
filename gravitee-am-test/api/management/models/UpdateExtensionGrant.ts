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
 * @interface UpdateExtensionGrant
 */
export interface UpdateExtensionGrant {
    /**
     * 
     * @type {string}
     * @memberof UpdateExtensionGrant
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateExtensionGrant
     */
    configuration: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateExtensionGrant
     */
    grantType?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateExtensionGrant
     */
    identityProvider?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateExtensionGrant
     */
    createUser?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateExtensionGrant
     */
    userExists?: boolean;
}

export function UpdateExtensionGrantFromJSON(json: any): UpdateExtensionGrant {
    return UpdateExtensionGrantFromJSONTyped(json, false);
}

export function UpdateExtensionGrantFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateExtensionGrant {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'configuration': json['configuration'],
        'grantType': !exists(json, 'grantType') ? undefined : json['grantType'],
        'identityProvider': !exists(json, 'identityProvider') ? undefined : json['identityProvider'],
        'createUser': !exists(json, 'createUser') ? undefined : json['createUser'],
        'userExists': !exists(json, 'userExists') ? undefined : json['userExists'],
    };
}

export function UpdateExtensionGrantToJSON(value?: UpdateExtensionGrant | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'configuration': value.configuration,
        'grantType': value.grantType,
        'identityProvider': value.identityProvider,
        'createUser': value.createUser,
        'userExists': value.userExists,
    };
}

