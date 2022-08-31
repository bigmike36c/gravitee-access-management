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
 * @interface ThemeEntity
 */
export interface ThemeEntity {
    /**
     * 
     * @type {string}
     * @memberof ThemeEntity
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ThemeEntity
     */
    referenceId?: string;
    /**
     * 
     * @type {string}
     * @memberof ThemeEntity
     */
    referenceType?: ThemeEntityReferenceTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ThemeEntity
     */
    logoUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof ThemeEntity
     */
    logoWidth?: number;
    /**
     * 
     * @type {string}
     * @memberof ThemeEntity
     */
    faviconUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ThemeEntity
     */
    primaryButtonColorHex?: string;
    /**
     * 
     * @type {string}
     * @memberof ThemeEntity
     */
    secondaryButtonColorHex?: string;
    /**
     * 
     * @type {string}
     * @memberof ThemeEntity
     */
    primaryTextColorHex?: string;
    /**
     * 
     * @type {string}
     * @memberof ThemeEntity
     */
    secondaryTextColorHex?: string;
    /**
     * 
     * @type {string}
     * @memberof ThemeEntity
     */
    css?: string;
    /**
     * 
     * @type {Date}
     * @memberof ThemeEntity
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ThemeEntity
     */
    updatedAt?: Date;
}


/**
 * @export
 */
export const ThemeEntityReferenceTypeEnum = {
    Platform: 'PLATFORM',
    Domain: 'DOMAIN',
    Application: 'APPLICATION',
    Organization: 'ORGANIZATION',
    Environment: 'ENVIRONMENT'
} as const;
export type ThemeEntityReferenceTypeEnum = typeof ThemeEntityReferenceTypeEnum[keyof typeof ThemeEntityReferenceTypeEnum];


export function ThemeEntityFromJSON(json: any): ThemeEntity {
    return ThemeEntityFromJSONTyped(json, false);
}

export function ThemeEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThemeEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'referenceType': !exists(json, 'referenceType') ? undefined : json['referenceType'],
        'logoUrl': !exists(json, 'logoUrl') ? undefined : json['logoUrl'],
        'logoWidth': !exists(json, 'logoWidth') ? undefined : json['logoWidth'],
        'faviconUrl': !exists(json, 'faviconUrl') ? undefined : json['faviconUrl'],
        'primaryButtonColorHex': !exists(json, 'primaryButtonColorHex') ? undefined : json['primaryButtonColorHex'],
        'secondaryButtonColorHex': !exists(json, 'secondaryButtonColorHex') ? undefined : json['secondaryButtonColorHex'],
        'primaryTextColorHex': !exists(json, 'primaryTextColorHex') ? undefined : json['primaryTextColorHex'],
        'secondaryTextColorHex': !exists(json, 'secondaryTextColorHex') ? undefined : json['secondaryTextColorHex'],
        'css': !exists(json, 'css') ? undefined : json['css'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
    };
}

export function ThemeEntityToJSON(value?: ThemeEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'referenceId': value.referenceId,
        'referenceType': value.referenceType,
        'logoUrl': value.logoUrl,
        'logoWidth': value.logoWidth,
        'faviconUrl': value.faviconUrl,
        'primaryButtonColorHex': value.primaryButtonColorHex,
        'secondaryButtonColorHex': value.secondaryButtonColorHex,
        'primaryTextColorHex': value.primaryTextColorHex,
        'secondaryTextColorHex': value.secondaryTextColorHex,
        'css': value.css,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}

