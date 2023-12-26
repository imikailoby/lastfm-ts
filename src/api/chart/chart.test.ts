import { ApiClient } from '../../common/apiClient';
import { ChartApi } from './chart';

jest.mock('../../common/apiClient');

const mockedApiKey = 'test';

describe('ChartApi', () => {
    let chartApi: ChartApi;
    let mockedGet: jest.Mock;

    beforeEach(() => {
        mockedGet = jest.fn();
        ApiClient.prototype.get = mockedGet;
        chartApi = new ChartApi(mockedApiKey);
    });

    it('creates class instance', () => {
        expect(chartApi).toBeInstanceOf(ChartApi);
    });

    it('getTopArtists()', async () => {
        await chartApi.getTopArtists();
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'chart.getTopArtists',
        });

        await chartApi.getTopArtists({ page: '2' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'chart.getTopArtists',
            page: '2',
        });

        await chartApi.getTopArtists({ limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: 'chart.getTopArtists',
            limit: '10',
        });

        await chartApi.getTopArtists({ page: '2', limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(4, {
            api_key: mockedApiKey,
            method: 'chart.getTopArtists',
            page: '2',
            limit: '10',
        });
    });

    it('getTopTags()', async () => {
        await chartApi.getTopTags();
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'chart.getTopTags',
        });

        await chartApi.getTopTags({ page: '2' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'chart.getTopTags',
            page: '2',
        });

        await chartApi.getTopTags({ limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: 'chart.getTopTags',
            limit: '10',
        });

        await chartApi.getTopTags({ page: '2', limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(4, {
            api_key: mockedApiKey,
            method: 'chart.getTopTags',
            page: '2',
            limit: '10',
        });
    });
});
