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
 * @interface FormsResource
 */
export interface FormsResource {
    /**
     * 
     * @type {any}
     * @memberof FormsResource
     */
    formResource?: any;
}

export function FormsResourceFromJSON(json: any): FormsResource {
    return FormsResourceFromJSONTyped(json, false);
}

export function FormsResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): FormsResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'formResource': !exists(json, 'formResource') ? undefined : json['formResource'],
    };
}

export function FormsResourceToJSON(value?: FormsResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'formResource': value.formResource,
    };
}
