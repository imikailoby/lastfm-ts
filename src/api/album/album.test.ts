import { ApiClient } from '../../common/apiClient';
import { AlbumApi } from './album';

jest.mock('../../common/apiClient');

const mockedApiKey = 'test';
const mockedUser = 'someUser';
const mockedArtist = 'someArtist';
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

    it('getTags()', async () => {
        await albumApi.getTags({ album: mockedAlbum, artist: mockedArtist, user: mockedUser });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'album.getTags',
            album: mockedAlbum,
            artist: mockedArtist,
            user: mockedUser,
        });

        await albumApi.getTags({ album: mockedAlbum, artist: mockedArtist, user: mockedUser, autocorrect: '1' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'album.getTags',
            album: mockedAlbum,
            artist: mockedArtist,
            user: mockedUser,
            autocorrect: '1',
        });
    });

    it('getTopTags()', async () => {
        await albumApi.getTopTags({ album: mockedAlbum, artist: mockedArtist });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'album.getTopTags',
            album: mockedAlbum,
            artist: mockedArtist,
        });

        await albumApi.getTopTags({ album: mockedAlbum, artist: mockedArtist, autocorrect: '1' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'album.getTopTags',
            album: mockedAlbum,
            artist: mockedArtist,
            autocorrect: '1',
        });

        await albumApi.getTopTags({ album: mockedAlbum, artist: mockedArtist, page: '2' });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: 'album.getTopTags',
            album: mockedAlbum,
            artist: mockedArtist,
            page: '2',
        });

        await albumApi.getTopTags({ album: mockedAlbum, artist: mockedArtist, limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(4, {
            api_key: mockedApiKey,
            method: 'album.getTopTags',
            album: mockedAlbum,
            artist: mockedArtist,
            limit: '10',
        });

        await albumApi.getTopTags({ album: mockedAlbum, artist: mockedArtist, page: '2', limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(5, {
            api_key: mockedApiKey,
            method: 'album.getTopTags',
            album: mockedAlbum,
            artist: mockedArtist,
            page: '2',
            limit: '10',
        });
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
