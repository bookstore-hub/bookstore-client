/* tslint:disable */
/* eslint-disable */
/**
 * Bookstore - Server
 * Service that exposes the Bookstore API via REST
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  GetData,
} from '../models/index';
import {
    GetDataFromJSON,
    GetDataToJSON,
} from '../models/index';

export interface AddAuthorToBookRequest {
    authorCode: string;
    bookCode: string;
}

export interface CreateAuthorRequest {
    authorName: string;
}

export interface EditAuthorRequest {
    authorCode: string;
    authorName: string;
}

export interface RemoveAuthorRequest {
    authorCode: string;
}

export interface RemoveAuthorFromBookRequest {
    authorCode: string;
    bookCode: string;
}

/**
 * 
 */
export class AuthorControllerApi extends runtime.BaseAPI {

    /**
     * Adds an author to a book
     */
    async addAuthorToBookRaw(requestParameters: AddAuthorToBookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['authorCode'] == null) {
            throw new runtime.RequiredError(
                'authorCode',
                'Required parameter "authorCode" was null or undefined when calling addAuthorToBook().'
            );
        }

        if (requestParameters['bookCode'] == null) {
            throw new runtime.RequiredError(
                'bookCode',
                'Required parameter "bookCode" was null or undefined when calling addAuthorToBook().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['authorCode'] != null) {
            queryParameters['authorCode'] = requestParameters['authorCode'];
        }

        if (requestParameters['bookCode'] != null) {
            queryParameters['bookCode'] = requestParameters['bookCode'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/author/addToBook`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Adds an author to a book
     */
    async addAuthorToBook(requestParameters: AddAuthorToBookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.addAuthorToBookRaw(requestParameters, initOverrides);
    }

    /**
     * Creates a new author
     */
    async createAuthorRaw(requestParameters: CreateAuthorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetData>> {
        if (requestParameters['authorName'] == null) {
            throw new runtime.RequiredError(
                'authorName',
                'Required parameter "authorName" was null or undefined when calling createAuthor().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['authorName'] != null) {
            queryParameters['authorName'] = requestParameters['authorName'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/author`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetDataFromJSON(jsonValue));
    }

    /**
     * Creates a new author
     */
    async createAuthor(requestParameters: CreateAuthorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetData> {
        const response = await this.createAuthorRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Edits an author entry
     */
    async editAuthorRaw(requestParameters: EditAuthorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetData>> {
        if (requestParameters['authorCode'] == null) {
            throw new runtime.RequiredError(
                'authorCode',
                'Required parameter "authorCode" was null or undefined when calling editAuthor().'
            );
        }

        if (requestParameters['authorName'] == null) {
            throw new runtime.RequiredError(
                'authorName',
                'Required parameter "authorName" was null or undefined when calling editAuthor().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['authorCode'] != null) {
            queryParameters['authorCode'] = requestParameters['authorCode'];
        }

        if (requestParameters['authorName'] != null) {
            queryParameters['authorName'] = requestParameters['authorName'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/author`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetDataFromJSON(jsonValue));
    }

    /**
     * Edits an author entry
     */
    async editAuthor(requestParameters: EditAuthorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetData> {
        const response = await this.editAuthorRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Removes an author
     */
    async removeAuthorRaw(requestParameters: RemoveAuthorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['authorCode'] == null) {
            throw new runtime.RequiredError(
                'authorCode',
                'Required parameter "authorCode" was null or undefined when calling removeAuthor().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['authorCode'] != null) {
            queryParameters['authorCode'] = requestParameters['authorCode'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/author`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Removes an author
     */
    async removeAuthor(requestParameters: RemoveAuthorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.removeAuthorRaw(requestParameters, initOverrides);
    }

    /**
     * Removes an author to a book
     */
    async removeAuthorFromBookRaw(requestParameters: RemoveAuthorFromBookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['authorCode'] == null) {
            throw new runtime.RequiredError(
                'authorCode',
                'Required parameter "authorCode" was null or undefined when calling removeAuthorFromBook().'
            );
        }

        if (requestParameters['bookCode'] == null) {
            throw new runtime.RequiredError(
                'bookCode',
                'Required parameter "bookCode" was null or undefined when calling removeAuthorFromBook().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['authorCode'] != null) {
            queryParameters['authorCode'] = requestParameters['authorCode'];
        }

        if (requestParameters['bookCode'] != null) {
            queryParameters['bookCode'] = requestParameters['bookCode'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/author/removeFromBook`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Removes an author to a book
     */
    async removeAuthorFromBook(requestParameters: RemoveAuthorFromBookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.removeAuthorFromBookRaw(requestParameters, initOverrides);
    }

}
