export type ApiClientError = {
    error: ApiError;
    message: string;
};

export enum ApiError {
    INVALID_SERVICE = 2,
    INVALID_METHOD = 3,
    AUTHENTICATION_FAILED = 4,
    INVALID_FORMAT = 5,
    INVALID_PARAMETERS = 6,
    INVALID_RESOURCE = 7,
    OPERATION_FAILED = 8,
    INVALID_SESSION_KEY = 9,
    INVALID_API_KEY = 10,
    SERVICE_OFFLINE = 11,
    INVALID_METHOD_SIGNATURE_SUPPLIED = 13,
    TEMPORARY_ERROR = 16,
    SUSPENDED_API_KEY = 26,
    RATE_LIMIT_EXCEEDED = 29,
}

export type QueryParams<T> = T & RequiredQueryParams;

export type RequiredQueryParams = {
    method: string;
    api_key: string;
};

export type PaginationQueryParams = {
    limit?: string;
    page?: string;
};
