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

export interface Get40Request {
    deviceIdentifier: string;
}

export interface GetSchema9Request {
    deviceIdentifier: string;
}

/**
 * 
 */
export class DeviceIdentifierApi extends runtime.BaseAPI {

    /**
     * There is no particular permission needed. User must be authenticated.
     * Get a device identifier plugin
     */
    async get40Raw(requestParameters: Get40Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.deviceIdentifier === null || requestParameters.deviceIdentifier === undefined) {
            throw new runtime.RequiredError('deviceIdentifier','Required parameter requestParameters.deviceIdentifier was null or undefined when calling get40.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/platform/plugins/device-identifiers/{deviceIdentifier}`.replace(`{${"deviceIdentifier"}}`, encodeURIComponent(String(requestParameters.deviceIdentifier))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * Get a device identifier plugin
     */
    async get40(requestParameters: Get40Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.get40Raw(requestParameters, initOverrides);
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * Get a device identifier plugin\'s schema
     */
    async getSchema9Raw(requestParameters: GetSchema9Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.deviceIdentifier === null || requestParameters.deviceIdentifier === undefined) {
            throw new runtime.RequiredError('deviceIdentifier','Required parameter requestParameters.deviceIdentifier was null or undefined when calling getSchema9.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/platform/plugins/device-identifiers/{deviceIdentifier}/schema`.replace(`{${"deviceIdentifier"}}`, encodeURIComponent(String(requestParameters.deviceIdentifier))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * Get a device identifier plugin\'s schema
     */
    async getSchema9(requestParameters: GetSchema9Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.getSchema9Raw(requestParameters, initOverrides);
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * List device identifier plugins
     */
    async list40Raw(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/platform/plugins/device-identifiers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * List device identifier plugins
     */
    async list40(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.list40Raw(initOverrides);
    }

}