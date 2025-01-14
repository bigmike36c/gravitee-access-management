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
 * @interface PatchApplicationIdentityProvider
 */
export interface PatchApplicationIdentityProvider {
    /**
     * 
     * @type {string}
     * @memberof PatchApplicationIdentityProvider
     */
    identity?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchApplicationIdentityProvider
     */
    selectionRule?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchApplicationIdentityProvider
     */
    priority?: number;
}

export function PatchApplicationIdentityProviderFromJSON(json: any): PatchApplicationIdentityProvider {
    return PatchApplicationIdentityProviderFromJSONTyped(json, false);
}

export function PatchApplicationIdentityProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchApplicationIdentityProvider {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'identity': !exists(json, 'identity') ? undefined : json['identity'],
        'selectionRule': !exists(json, 'selectionRule') ? undefined : json['selectionRule'],
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
    };
}

export function PatchApplicationIdentityProviderToJSON(value?: PatchApplicationIdentityProvider | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'identity': value.identity,
        'selectionRule': value.selectionRule,
        'priority': value.priority,
    };
}

