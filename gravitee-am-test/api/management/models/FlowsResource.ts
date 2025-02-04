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
 * @interface FlowsResource
 */
export interface FlowsResource {
    /**
     * 
     * @type {any}
     * @memberof FlowsResource
     */
    flowResource?: any;
}

export function FlowsResourceFromJSON(json: any): FlowsResource {
    return FlowsResourceFromJSONTyped(json, false);
}

export function FlowsResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlowsResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'flowResource': !exists(json, 'flowResource') ? undefined : json['flowResource'],
    };
}

export function FlowsResourceToJSON(value?: FlowsResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'flowResource': value.flowResource,
    };
}

