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
 * @interface UpdateServiceResource
 */
export interface UpdateServiceResource {
    /**
     * 
     * @type {string}
     * @memberof UpdateServiceResource
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateServiceResource
     */
    configuration: string;
}

export function UpdateServiceResourceFromJSON(json: any): UpdateServiceResource {
    return UpdateServiceResourceFromJSONTyped(json, false);
}

export function UpdateServiceResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateServiceResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'configuration': json['configuration'],
    };
}

export function UpdateServiceResourceToJSON(value?: UpdateServiceResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'configuration': value.configuration,
    };
}

