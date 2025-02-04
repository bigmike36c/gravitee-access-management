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
 * @interface NewTag
 */
export interface NewTag {
    /**
     * 
     * @type {string}
     * @memberof NewTag
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewTag
     */
    description?: string;
}

export function NewTagFromJSON(json: any): NewTag {
    return NewTagFromJSONTyped(json, false);
}

export function NewTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewTag {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function NewTagToJSON(value?: NewTag | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
    };
}

