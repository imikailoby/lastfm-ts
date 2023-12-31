import type { QueryParams } from './apiClient.types';

export function getRequestUrlParams<ParamsType = unknown>(params: QueryParams<ParamsType>): URLSearchParams {
    return new URLSearchParams({
        ...params,
        format: 'json',
    });
}
