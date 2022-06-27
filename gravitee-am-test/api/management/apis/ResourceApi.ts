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
    NewServiceResource,
    NewServiceResourceFromJSON,
    NewServiceResourceToJSON,
    ServiceResource,
    ServiceResourceFromJSON,
    ServiceResourceToJSON,
    UpdateServiceResource,
    UpdateServiceResourceFromJSON,
    UpdateServiceResourceToJSON,
} from '../models';

export interface Create11Request {
    organizationId: string;
    environmentId: string;
    domain: string;
    resource: NewServiceResource;
}

export interface Delete14Request {
    organizationId: string;
    environmentId: string;
    domain: string;
    resource: string;
}

export interface Get22Request {
    organizationId: string;
    environmentId: string;
    domain: string;
    resource: string;
}

export interface Get40Request {
    resource: string;
}

export interface GetSchema6Request {
    resource: string;
}

export interface List20Request {
    organizationId: string;
    environmentId: string;
    domain: string;
}

export interface List40Request {
    expand?: Array<string>;
}

export interface Update12Request {
    organizationId: string;
    environmentId: string;
    domain: string;
    resource: string;
    identity: UpdateServiceResource;
}

/**
 * 
 */
export class ResourceApi extends runtime.BaseAPI {

    /**
     * User must have the DOMAIN_RESOURCE[CREATE] permission on the specified domain or DOMAIN_RESOURCE[CREATE] permission on the specified environment or DOMAIN_RESOURCE[CREATE] permission on the specified organization
     * Create a resource
     */
    async create11Raw(requestParameters: Create11Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling create11.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling create11.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling create11.');
        }

        if (requestParameters.resource === null || requestParameters.resource === undefined) {
            throw new runtime.RequiredError('resource','Required parameter requestParameters.resource was null or undefined when calling create11.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/resources`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewServiceResourceToJSON(requestParameters.resource),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * User must have the DOMAIN_RESOURCE[CREATE] permission on the specified domain or DOMAIN_RESOURCE[CREATE] permission on the specified environment or DOMAIN_RESOURCE[CREATE] permission on the specified organization
     * Create a resource
     */
    async create11(requestParameters: Create11Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.create11Raw(requestParameters, initOverrides);
    }

    /**
     * User must have the DOMAIN_RESOURCE[DELETE] permission on the specified domain or DOMAIN_RESOURCE[DELETE] permission on the specified environment or DOMAIN_RESOURCE[DELETE] permission on the specified organization
     * Delete a resource
     */
    async delete14Raw(requestParameters: Delete14Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling delete14.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling delete14.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling delete14.');
        }

        if (requestParameters.resource === null || requestParameters.resource === undefined) {
            throw new runtime.RequiredError('resource','Required parameter requestParameters.resource was null or undefined when calling delete14.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/resources/{resource}`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))).replace(`{${"resource"}}`, encodeURIComponent(String(requestParameters.resource))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * User must have the DOMAIN_RESOURCE[DELETE] permission on the specified domain or DOMAIN_RESOURCE[DELETE] permission on the specified environment or DOMAIN_RESOURCE[DELETE] permission on the specified organization
     * Delete a resource
     */
    async delete14(requestParameters: Delete14Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.delete14Raw(requestParameters, initOverrides);
    }

    /**
     * User must have the DOMAIN_RESOURCE[READ] permission on the specified domain or DOMAIN_RESOURCE[READ] permission on the specified environment or DOMAIN_RESOURCE[READ] permission on the specified organization
     * Get a resource
     */
    async get22Raw(requestParameters: Get22Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ServiceResource>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling get22.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling get22.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling get22.');
        }

        if (requestParameters.resource === null || requestParameters.resource === undefined) {
            throw new runtime.RequiredError('resource','Required parameter requestParameters.resource was null or undefined when calling get22.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/resources/{resource}`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))).replace(`{${"resource"}}`, encodeURIComponent(String(requestParameters.resource))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ServiceResourceFromJSON(jsonValue));
    }

    /**
     * User must have the DOMAIN_RESOURCE[READ] permission on the specified domain or DOMAIN_RESOURCE[READ] permission on the specified environment or DOMAIN_RESOURCE[READ] permission on the specified organization
     * Get a resource
     */
    async get22(requestParameters: Get22Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ServiceResource> {
        const response = await this.get22Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * Get a resource plugin
     */
    async get40Raw(requestParameters: Get40Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.resource === null || requestParameters.resource === undefined) {
            throw new runtime.RequiredError('resource','Required parameter requestParameters.resource was null or undefined when calling get40.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/platform/plugins/resources/{resource}`.replace(`{${"resource"}}`, encodeURIComponent(String(requestParameters.resource))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * Get a resource plugin
     */
    async get40(requestParameters: Get40Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.get40Raw(requestParameters, initOverrides);
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * Get a resource plugin\'s schema
     */
    async getSchema6Raw(requestParameters: GetSchema6Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.resource === null || requestParameters.resource === undefined) {
            throw new runtime.RequiredError('resource','Required parameter requestParameters.resource was null or undefined when calling getSchema6.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/platform/plugins/resources/{resource}/schema`.replace(`{${"resource"}}`, encodeURIComponent(String(requestParameters.resource))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * Get a resource plugin\'s schema
     */
    async getSchema6(requestParameters: GetSchema6Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.getSchema6Raw(requestParameters, initOverrides);
    }

    /**
     * User must have the DOMAIN_RESOURCE[LIST] permission on the specified domain or DOMAIN_RESOURCE[LIST] permission on the specified environment or DOMAIN_RESOURCE[LIST] permission on the specified organization Each returned resource is filtered and contains only basic information such as id, name and resource type.
     * List registered resources for a security domain
     */
    async list20Raw(requestParameters: List20Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<ServiceResource>>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling list20.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling list20.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling list20.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/resources`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ServiceResourceFromJSON));
    }

    /**
     * User must have the DOMAIN_RESOURCE[LIST] permission on the specified domain or DOMAIN_RESOURCE[LIST] permission on the specified environment or DOMAIN_RESOURCE[LIST] permission on the specified organization Each returned resource is filtered and contains only basic information such as id, name and resource type.
     * List registered resources for a security domain
     */
    async list20(requestParameters: List20Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<ServiceResource>> {
        const response = await this.list20Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * List resource plugins
     */
    async list40Raw(requestParameters: List40Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/platform/plugins/resources`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * List resource plugins
     */
    async list40(requestParameters: List40Request = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.list40Raw(requestParameters, initOverrides);
    }

    /**
     * User must have the DOMAIN_RESOURCE[UPDATE] permission on the specified domain or DOMAIN_RESOURCE[UPDATE] permission on the specified environment or DOMAIN_RESOURCE[UPDATE] permission on the specified organization
     * Update a resource
     */
    async update12Raw(requestParameters: Update12Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ServiceResource>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling update12.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling update12.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling update12.');
        }

        if (requestParameters.resource === null || requestParameters.resource === undefined) {
            throw new runtime.RequiredError('resource','Required parameter requestParameters.resource was null or undefined when calling update12.');
        }

        if (requestParameters.identity === null || requestParameters.identity === undefined) {
            throw new runtime.RequiredError('identity','Required parameter requestParameters.identity was null or undefined when calling update12.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/resources/{resource}`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))).replace(`{${"resource"}}`, encodeURIComponent(String(requestParameters.resource))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateServiceResourceToJSON(requestParameters.identity),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ServiceResourceFromJSON(jsonValue));
    }

    /**
     * User must have the DOMAIN_RESOURCE[UPDATE] permission on the specified domain or DOMAIN_RESOURCE[UPDATE] permission on the specified environment or DOMAIN_RESOURCE[UPDATE] permission on the specified organization
     * Update a resource
     */
    async update12(requestParameters: Update12Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ServiceResource> {
        const response = await this.update12Raw(requestParameters, initOverrides);
        return await response.value();
    }

}