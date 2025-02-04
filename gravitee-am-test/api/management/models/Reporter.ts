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
 * @interface Reporter
 */
export interface Reporter {
    /**
     * 
     * @type {string}
     * @memberof Reporter
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Reporter
     */
    domain?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Reporter
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Reporter
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof Reporter
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Reporter
     */
    system?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Reporter
     */
    dataType?: string;
    /**
     * 
     * @type {string}
     * @memberof Reporter
     */
    configuration?: string;
    /**
     * 
     * @type {number}
     * @memberof Reporter
     */
    createdAt?: number;
    /**
     * 
     * @type {number}
     * @memberof Reporter
     */
    updatedAt?: number;
}

export function ReporterFromJSON(json: any): Reporter {
    return ReporterFromJSONTyped(json, false);
}

export function ReporterFromJSONTyped(json: any, ignoreDiscriminator: boolean): Reporter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'domain': !exists(json, 'domain') ? undefined : json['domain'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'system': !exists(json, 'system') ? undefined : json['system'],
        'dataType': !exists(json, 'dataType') ? undefined : json['dataType'],
        'configuration': !exists(json, 'configuration') ? undefined : json['configuration'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
    };
}

export function ReporterToJSON(value?: Reporter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'domain': value.domain,
        'enabled': value.enabled,
        'type': value.type,
        'name': value.name,
        'system': value.system,
        'dataType': value.dataType,
        'configuration': value.configuration,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
    };
}

