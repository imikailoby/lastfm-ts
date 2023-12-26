import { ApiClient } from '../../common/apiClient';
import { GeoApi } from './geo';

jest.mock('../../common/apiClient');

const mockedApiKey = 'test';
const mockedCountry = 'lithuania';

describe('GeoApi', () => {
    let geoApi: GeoApi;
    let mockedGet: jest.Mock;

    beforeEach(() => {
        mockedGet = jest.fn();
        ApiClient.prototype.get = mockedGet;
        geoApi = new GeoApi(mockedApiKey);
    });

    it('creates class instance', () => {
        expect(geoApi).toBeInstanceOf(GeoApi);
    });

    it('getTopArtists()', async () => {
        await geoApi.getTopArtists({ country: mockedCountry });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'geo.getTopArtists',
            country: mockedCountry,
        });

        await geoApi.getTopArtists({ country: mockedCountry, page: '2' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'geo.getTopArtists',
            country: mockedCountry,
            page: '2',
        });

        await geoApi.getTopArtists({ country: mockedCountry, limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: 'geo.getTopArtists',
            country: mockedCountry,
            limit: '10',
        });

        await geoApi.getTopArtists({ country: mockedCountry, page: '2', limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(4, {
            api_key: mockedApiKey,
            method: 'geo.getTopArtists',
            country: mockedCountry,
            page: '2',
            limit: '10',
        });
    });
});
