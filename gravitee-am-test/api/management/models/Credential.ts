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
 * @interface Credential
 */
export interface Credential {
    /**
     * 
     * @type {string}
     * @memberof Credential
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Credential
     */
    referenceType?: CredentialReferenceTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Credential
     */
    referenceId?: string;
    /**
     * 
     * @type {string}
     * @memberof Credential
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof Credential
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof Credential
     */
    credentialId?: string;
    /**
     * 
     * @type {string}
     * @memberof Credential
     */
    publicKey?: string;
    /**
     * 
     * @type {number}
     * @memberof Credential
     */
    counter?: number;
    /**
     * 
     * @type {string}
     * @memberof Credential
     */
    aaguid?: string;
    /**
     * 
     * @type {string}
     * @memberof Credential
     */
    attestationStatementFormat?: string;
    /**
     * 
     * @type {string}
     * @memberof Credential
     */
    attestationStatement?: string;
    /**
     * 
     * @type {string}
     * @memberof Credential
     */
    ipAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof Credential
     */
    userAgent?: string;
    /**
     * 
     * @type {number}
     * @memberof Credential
     */
    createdAt?: number;
    /**
     * 
     * @type {number}
     * @memberof Credential
     */
    updatedAt?: number;
    /**
     * 
     * @type {number}
     * @memberof Credential
     */
    accessedAt?: number;
    /**
     * 
     * @type {number}
     * @memberof Credential
     */
    lastCheckedAt?: number;
}


/**
 * @export
 */
export const CredentialReferenceTypeEnum = {
    Platform: 'PLATFORM',
    Domain: 'DOMAIN',
    Application: 'APPLICATION',
    Organization: 'ORGANIZATION',
    Environment: 'ENVIRONMENT'
} as const;
export type CredentialReferenceTypeEnum = typeof CredentialReferenceTypeEnum[keyof typeof CredentialReferenceTypeEnum];


export function CredentialFromJSON(json: any): Credential {
    return CredentialFromJSONTyped(json, false);
}

export function CredentialFromJSONTyped(json: any, ignoreDiscriminator: boolean): Credential {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'referenceType': !exists(json, 'referenceType') ? undefined : json['referenceType'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'credentialId': !exists(json, 'credentialId') ? undefined : json['credentialId'],
        'publicKey': !exists(json, 'publicKey') ? undefined : json['publicKey'],
        'counter': !exists(json, 'counter') ? undefined : json['counter'],
        'aaguid': !exists(json, 'aaguid') ? undefined : json['aaguid'],
        'attestationStatementFormat': !exists(json, 'attestationStatementFormat') ? undefined : json['attestationStatementFormat'],
        'attestationStatement': !exists(json, 'attestationStatement') ? undefined : json['attestationStatement'],
        'ipAddress': !exists(json, 'ipAddress') ? undefined : json['ipAddress'],
        'userAgent': !exists(json, 'userAgent') ? undefined : json['userAgent'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'accessedAt': !exists(json, 'accessedAt') ? undefined : json['accessedAt'],
        'lastCheckedAt': !exists(json, 'lastCheckedAt') ? undefined : json['lastCheckedAt'],
    };
}

export function CredentialToJSON(value?: Credential | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'referenceType': value.referenceType,
        'referenceId': value.referenceId,
        'userId': value.userId,
        'username': value.username,
        'credentialId': value.credentialId,
        'publicKey': value.publicKey,
        'counter': value.counter,
        'aaguid': value.aaguid,
        'attestationStatementFormat': value.attestationStatementFormat,
        'attestationStatement': value.attestationStatement,
        'ipAddress': value.ipAddress,
        'userAgent': value.userAgent,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'accessedAt': value.accessedAt,
        'lastCheckedAt': value.lastCheckedAt,
    };
}

