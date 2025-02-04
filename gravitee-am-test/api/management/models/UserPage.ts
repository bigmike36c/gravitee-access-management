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
    User,
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface UserPage
 */
export interface UserPage {
    /**
     * 
     * @type {Array<User>}
     * @memberof UserPage
     */
    data?: Array<User>;
    /**
     * 
     * @type {number}
     * @memberof UserPage
     */
    currentPage?: number;
    /**
     * 
     * @type {number}
     * @memberof UserPage
     */
    totalCount?: number;
}

export function UserPageFromJSON(json: any): UserPage {
    return UserPageFromJSONTyped(json, false);
}

export function UserPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserPage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(UserFromJSON)),
        'currentPage': !exists(json, 'currentPage') ? undefined : json['currentPage'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function UserPageToJSON(value?: UserPage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(UserToJSON)),
        'currentPage': value.currentPage,
        'totalCount': value.totalCount,
    };
}

