import { API_ENDPOINT, API_VERSION } from '../constants/global';
import { ApiClient } from './apiClient';
import { ApiClientMethods, RequiredQueryParams } from './apiClient.types';

const okResponse = {
    json: () => Promise.resolve({}),
    ok: true,
};

const errorResponse = {
    json: () => Promise.resolve({}),
    ok: false,
};

const mockedBaseUrl = `${API_ENDPOINT}/${API_VERSION}`;

const mockedRequiredParams: RequiredQueryParams = {
    method: 'test' as ApiClientMethods,
    api_key: 'testkey',
};

describe('ApiClient', () => {
    let apiClient: ApiClient;

    beforeEach(() => {
        apiClient = new ApiClient();
        (global.fetch as jest.Mock) = jest.fn(() => Promise.resolve(okResponse));
    });

    afterEach(() => {
        (fetch as jest.Mock).mockClear();
    });

    it('creates class instance', () => {
        expect(apiClient).toBeInstanceOf(ApiClient);
    });

    describe('get()', () => {
        it('calls the endpoint correctly', () => {
            apiClient.get(mockedRequiredParams);

            expect(fetch).toHaveBeenNthCalledWith(
                1,
                `${mockedBaseUrl}/?method=${mockedRequiredParams.method}&api_key=${mockedRequiredParams.api_key}&format=json`,
                {
                    method: 'GET',
                },
            );
        });

        it('throws an error when response is not ok', async () => {
            (global.fetch as jest.Mock) = jest.fn(() => Promise.resolve(errorResponse));

            await expect(apiClient.get(mockedRequiredParams)).rejects.toMatchObject({});

            expect(fetch).toHaveBeenNthCalledWith(
                1,
                `${mockedBaseUrl}/?method=${mockedRequiredParams.method}&api_key=${mockedRequiredParams.api_key}&format=json`,
                {
                    method: 'GET',
                },
            );
        });
    });
});
