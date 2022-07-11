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
 * @interface AlertNotifier
 */
export interface AlertNotifier {
    /**
     * 
     * @type {string}
     * @memberof AlertNotifier
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof AlertNotifier
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AlertNotifier
     */
    type?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AlertNotifier
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AlertNotifier
     */
    configuration?: string;
    /**
     * 
     * @type {string}
     * @memberof AlertNotifier
     */
    referenceType?: AlertNotifierReferenceTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AlertNotifier
     */
    referenceId?: string;
    /**
     * 
     * @type {Date}
     * @memberof AlertNotifier
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof AlertNotifier
     */
    updatedAt?: Date;
}


/**
 * @export
 */
export const AlertNotifierReferenceTypeEnum = {
    Platform: 'PLATFORM',
    Domain: 'DOMAIN',
    Application: 'APPLICATION',
    Organization: 'ORGANIZATION',
    Environment: 'ENVIRONMENT'
} as const;
export type AlertNotifierReferenceTypeEnum = typeof AlertNotifierReferenceTypeEnum[keyof typeof AlertNotifierReferenceTypeEnum];


export function AlertNotifierFromJSON(json: any): AlertNotifier {
    return AlertNotifierFromJSONTyped(json, false);
}

export function AlertNotifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlertNotifier {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'configuration': !exists(json, 'configuration') ? undefined : json['configuration'],
        'referenceType': !exists(json, 'referenceType') ? undefined : json['referenceType'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
    };
}

export function AlertNotifierToJSON(value?: AlertNotifier | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'type': value.type,
        'enabled': value.enabled,
        'configuration': value.configuration,
        'referenceType': value.referenceType,
        'referenceId': value.referenceId,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}
