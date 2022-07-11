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
 * @interface IdentityProvidersResource
 */
export interface IdentityProvidersResource {
    /**
     * 
     * @type {any}
     * @memberof IdentityProvidersResource
     */
    identityProviderResource?: any;
}

export function IdentityProvidersResourceFromJSON(json: any): IdentityProvidersResource {
    return IdentityProvidersResourceFromJSONTyped(json, false);
}

export function IdentityProvidersResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityProvidersResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'identityProviderResource': !exists(json, 'identityProviderResource') ? undefined : json['identityProviderResource'],
    };
}

export function IdentityProvidersResourceToJSON(value?: IdentityProvidersResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'identityProviderResource': value.identityProviderResource,
    };
}
