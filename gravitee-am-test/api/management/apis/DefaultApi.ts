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


import * as runtime from '../runtime';
import {
    Domain,
    DomainFromJSON,
    DomainToJSON,
    Environment,
    EnvironmentFromJSON,
    EnvironmentToJSON,
    MembershipListItem,
    MembershipListItemFromJSON,
    MembershipListItemToJSON,
    NewMembership,
    NewMembershipFromJSON,
    NewMembershipToJSON,
} from '../models';

export interface AddOrUpdateMember2Request {
    organizationId: string;
    body?: NewMembership;
}

export interface Get28Request {
    organizationId: string;
}

export interface GetMembers1Request {
    organizationId: string;
}

export interface ListRequest {
    organizationId: string;
}

export interface PatchRequest {
    organizationId: string;
    domain: any;
}

export interface PermissionsRequest {
    organizationId: string;
    environmentId: string;
}

export interface RemoveMember2Request {
    organizationId: string;
    member: string;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * User must have ORGANIZATION_MEMBER[READ] permission on the specified organization
     * Add or update an organization member
     */
    async addOrUpdateMember2Raw(requestParameters: AddOrUpdateMember2Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling addOrUpdateMember2.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/members`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewMembershipToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * User must have ORGANIZATION_MEMBER[READ] permission on the specified organization
     * Add or update an organization member
     */
    async addOrUpdateMember2(requestParameters: AddOrUpdateMember2Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.addOrUpdateMember2Raw(requestParameters, initOverrides);
    }

    /**
     * User must have the ORGANIZATION_SETTINGS[READ] permission on the specified organization
     * Get organization main settings
     */

    async get28Raw(requestParameters: Get28Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Domain>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling get28.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/settings`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainFromJSON(jsonValue));
    }

    /**
     * User must have the ORGANIZATION_SETTINGS[READ] permission on the specified organization
     * Get organization main settings
     */
    async get28(requestParameters: Get28Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Domain> {
        const response = await this.get28Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User must have ORGANIZATION_MEMBER[LIST] permission on the specified organization
     * List members for an organization
     */
    async getMembers1Raw(requestParameters: GetMembers1Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<MembershipListItem>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling getMembers1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/members`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MembershipListItemFromJSON(jsonValue));
    }

    /**
     * User must have ORGANIZATION_MEMBER[LIST] permission on the specified organization
     * List members for an organization
     */
    async getMembers1(requestParameters: GetMembers1Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<MembershipListItem> {
        const response = await this.getMembers1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User must have the ENVIRONMENT[LIST] permission on the specified organization AND either ENVIRONMENT[READ] permission on each environment or ENVIRONMENT[READ] permission on the specified organization.Each returned environment is filtered and contains only basic information such as id and name.
     * List all the environments
     */
    async listRaw(requestParameters: ListRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<Environment>>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling list.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EnvironmentFromJSON));
    }

    /**
     * User must have the ENVIRONMENT[LIST] permission on the specified organization AND either ENVIRONMENT[READ] permission on each environment or ENVIRONMENT[READ] permission on the specified organization.Each returned environment is filtered and contains only basic information such as id and name.
     * List all the environments
     */
    async list(requestParameters: ListRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<Environment>> {
        const response = await this.listRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User must have the ORGANIZATION_SETTINGS[UPDATE] permission on the specified organization
     * Update platform main settings
     */
    async patchRaw(requestParameters: PatchRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Domain>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling patch.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling patch.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/settings`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.domain as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainFromJSON(jsonValue));
    }

    /**
     * User must have the ORGANIZATION_SETTINGS[UPDATE] permission on the specified organization
     * Update platform main settings
     */
    async patch(requestParameters: PatchRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Domain> {
        const response = await this.patchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User must have ENVIRONMENT[READ] permission on the specified environment or ENVIRONMENT[READ] permission on the specified organization
     * List environment member\'s permissions
     */
    async permissionsRaw(requestParameters: PermissionsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<any>>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling permissions.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling permissions.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/members/permissions`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * User must have ENVIRONMENT[READ] permission on the specified environment or ENVIRONMENT[READ] permission on the specified organization
     * List environment member\'s permissions
     */
    async permissions(requestParameters: PermissionsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<any>> {
        const response = await this.permissionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User must have ORGANIZATION_MEMBER[DELETE] permission on the specified organization
     * Remove a membership of the organization
     */
    async removeMember2Raw(requestParameters: RemoveMember2Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling removeMember2.');
        }

        if (requestParameters.member === null || requestParameters.member === undefined) {
            throw new runtime.RequiredError('member','Required parameter requestParameters.member was null or undefined when calling removeMember2.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/members/{member}`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"member"}}`, encodeURIComponent(String(requestParameters.member))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * User must have ORGANIZATION_MEMBER[DELETE] permission on the specified organization
     * Remove a membership of the organization
     */
    async removeMember2(requestParameters: RemoveMember2Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.removeMember2Raw(requestParameters, initOverrides);
    }

}
