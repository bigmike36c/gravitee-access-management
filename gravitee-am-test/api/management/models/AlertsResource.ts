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
import {
    AlertNotifiersResource,
    AlertNotifiersResourceFromJSON,
    AlertNotifiersResourceFromJSONTyped,
    AlertNotifiersResourceToJSON,
} from './AlertNotifiersResource';

/**
 * 
 * @export
 * @interface AlertsResource
 */
export interface AlertsResource {
    /**
     * 
     * @type {any}
     * @memberof AlertsResource
     */
    alertTriggersResource?: any;
    /**
     * 
     * @type {AlertNotifiersResource}
     * @memberof AlertsResource
     */
    alertNotifiersResource?: AlertNotifiersResource;
}

export function AlertsResourceFromJSON(json: any): AlertsResource {
    return AlertsResourceFromJSONTyped(json, false);
}

export function AlertsResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlertsResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alertTriggersResource': !exists(json, 'alertTriggersResource') ? undefined : json['alertTriggersResource'],
        'alertNotifiersResource': !exists(json, 'alertNotifiersResource') ? undefined : AlertNotifiersResourceFromJSON(json['alertNotifiersResource']),
    };
}

export function AlertsResourceToJSON(value?: AlertsResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alertTriggersResource': value.alertTriggersResource,
        'alertNotifiersResource': AlertNotifiersResourceToJSON(value.alertNotifiersResource),
    };
}
