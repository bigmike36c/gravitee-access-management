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
 * @interface NewEntrypoint
 */
export interface NewEntrypoint {
    /**
     * 
     * @type {string}
     * @memberof NewEntrypoint
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewEntrypoint
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof NewEntrypoint
     */
    url: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof NewEntrypoint
     */
    tags: Array<string>;
}

export function NewEntrypointFromJSON(json: any): NewEntrypoint {
    return NewEntrypointFromJSONTyped(json, false);
}

export function NewEntrypointFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewEntrypoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'url': json['url'],
        'tags': json['tags'],
    };
}

export function NewEntrypointToJSON(value?: NewEntrypoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'url': value.url,
        'tags': value.tags,
    };
}

