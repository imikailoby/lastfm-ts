import { ApiClient } from '../../common/apiClient';
import { AlbumApi } from './album';

jest.mock('../../common/apiClient');

const mockedApiKey = 'test';
const mockedAlbum = 'someAlbum';

describe('AlbumApi', () => {
    let albumApi: AlbumApi;
    let mockedGet: jest.Mock;

    beforeEach(() => {
        mockedGet = jest.fn();
        ApiClient.prototype.get = mockedGet;
        albumApi = new AlbumApi(mockedApiKey);
    });

    it('creates class instance', () => {
        expect(albumApi).toBeInstanceOf(AlbumApi);
    });

    it('search()', async () => {
        await albumApi.search({ album: mockedAlbum });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'album.search',
            album: mockedAlbum,
        });

        await albumApi.search({ album: mockedAlbum, page: '2' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'album.search',
            album: mockedAlbum,
            page: '2',
        });

        await albumApi.search({ album: mockedAlbum, limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: 'album.search',
            album: mockedAlbum,
            limit: '10',
        });

        await albumApi.search({ album: mockedAlbum, page: '2', limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(4, {
            api_key: mockedApiKey,
            method: 'album.search',
            album: mockedAlbum,
            page: '2',
            limit: '10',
        });
    });
});
