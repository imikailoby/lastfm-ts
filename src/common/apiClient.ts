import { API_ENDPOINT, API_VERSION } from '../constants/global';
import type { ApiClientError, QueryParams } from './apiClient.types';
import { getRequestUrlParams } from './helpers';

export class ApiClient implements ApiClientInterface {
    private baseUrl: string = `${API_ENDPOINT}/${API_VERSION}`;

    public async get<ResponseType = unknown, ParamsType = unknown>(
        params: QueryParams<ParamsType>,
    ): Promise<ResponseType> {
        const urlParams = getRequestUrlParams<ParamsType>(params);
        const response = await fetch(`${this.baseUrl}/?${urlParams}`, {
            method: 'GET',
        });

        const data = await response.json();

        if (!response.ok) {
            throw data as ApiClientError;
        }

        return data as ResponseType;
    }
}

interface ApiClientInterface {
    get<ResponseType = unknown, ParamsType = unknown>(params: QueryParams<ParamsType>): Promise<ResponseType>;
}
