import { ApiClient } from '../../common/apiClient';
import { ArtistApi } from './artist';

jest.mock('../../common/apiClient');

const mockedApiKey = 'test';
const mockedArtist = 'someArtist';
const mockedUser = 'someUser';

describe('ArtistApi', () => {
    let artistApi: ArtistApi;
    let mockedGet: jest.Mock;

    beforeEach(() => {
        mockedGet = jest.fn();
        ApiClient.prototype.get = mockedGet;
        artistApi = new ArtistApi(mockedApiKey);
    });

    it('creates class instance', () => {
        expect(artistApi).toBeInstanceOf(ArtistApi);
    });

    it('getCorrection()', async () => {
        await artistApi.getCorrection({ artist: mockedArtist });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'artist.getCorrection',
            artist: mockedArtist,
        });
    });

    it('getInfo()', async () => {
        await artistApi.getInfo({ artist: mockedArtist });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'artist.getInfo',
            artist: mockedArtist,
        });

        await artistApi.getInfo({ artist: mockedArtist, autocorrect: '1' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'artist.getInfo',
            artist: mockedArtist,
            autocorrect: '1',
        });

        await artistApi.getInfo({ artist: mockedArtist, username: mockedUser });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: 'artist.getInfo',
            artist: mockedArtist,
            username: mockedUser,
        });

        await artistApi.getInfo({ artist: mockedArtist, lang: 'es' });
        expect(mockedGet).toHaveBeenNthCalledWith(4, {
            api_key: mockedApiKey,
            method: 'artist.getInfo',
            artist: mockedArtist,
            lang: 'es',
        });
    });

    it('getSimilar()', async () => {
        await artistApi.getSimilar({ artist: mockedArtist });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'artist.getSimilar',
            artist: mockedArtist,
        });

        await artistApi.getSimilar({ artist: mockedArtist, autocorrect: '1' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'artist.getSimilar',
            artist: mockedArtist,
            autocorrect: '1',
        });
    });

    it('getTags()', async () => {
        await artistApi.getTags({ artist: mockedArtist, user: mockedUser });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'artist.getTags',
            artist: mockedArtist,
            user: mockedUser,
        });

        await artistApi.getTags({ artist: mockedArtist, user: mockedUser, autocorrect: '1' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'artist.getTags',
            artist: mockedArtist,
            user: mockedUser,
            autocorrect: '1',
        });
    });

    it('getTopAlbums()', async () => {
        await artistApi.getTopAlbums({ artist: mockedArtist });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'artist.getTopAlbums',
            artist: mockedArtist,
        });

        await artistApi.getTopAlbums({ artist: mockedArtist, autocorrect: '1' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'artist.getTopAlbums',
            artist: mockedArtist,
            autocorrect: '1',
        });

        await artistApi.getTopAlbums({ artist: mockedArtist, page: '2' });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: 'artist.getTopAlbums',
            artist: mockedArtist,
            page: '2',
        });

        await artistApi.getTopAlbums({ artist: mockedArtist, limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(4, {
            api_key: mockedApiKey,
            method: 'artist.getTopAlbums',
            artist: mockedArtist,
            limit: '10',
        });

        await artistApi.getTopAlbums({ artist: mockedArtist, page: '2', limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(5, {
            api_key: mockedApiKey,
            method: 'artist.getTopAlbums',
            artist: mockedArtist,
            page: '2',
            limit: '10',
        });
    });

    it('getTopTags()', async () => {
        await artistApi.getTopTags({ artist: mockedArtist });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'artist.getTopTags',
            artist: mockedArtist,
        });

        await artistApi.getTopTags({ artist: mockedArtist, autocorrect: '1' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'artist.getTopTags',
            artist: mockedArtist,
            autocorrect: '1',
        });
    });

    it('getTopTracks()', async () => {
        await artistApi.getTopTracks({ artist: mockedArtist });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'artist.getTopTracks',
            artist: mockedArtist,
        });

        await artistApi.getTopTracks({ artist: mockedArtist, autocorrect: '1' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'artist.getTopTracks',
            artist: mockedArtist,
            autocorrect: '1',
        });

        await artistApi.getTopTracks({ artist: mockedArtist, page: '2' });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: 'artist.getTopTracks',
            artist: mockedArtist,
            page: '2',
        });

        await artistApi.getTopTracks({ artist: mockedArtist, limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(4, {
            api_key: mockedApiKey,
            method: 'artist.getTopTracks',
            artist: mockedArtist,
            limit: '10',
        });

        await artistApi.getTopTracks({ artist: mockedArtist, page: '2', limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(5, {
            api_key: mockedApiKey,
            method: 'artist.getTopTracks',
            artist: mockedArtist,
            page: '2',
            limit: '10',
        });
    });

    it('search()', async () => {
        await artistApi.search({ artist: mockedArtist });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'artist.search',
            artist: mockedArtist,
        });

        await artistApi.search({ artist: mockedArtist, page: '2' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'artist.search',
            artist: mockedArtist,
            page: '2',
        });

        await artistApi.search({ artist: mockedArtist, limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: 'artist.search',
            artist: mockedArtist,
            limit: '10',
        });

        await artistApi.search({ artist: mockedArtist, page: '2', limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(4, {
            api_key: mockedApiKey,
            method: 'artist.search',
            artist: mockedArtist,
            page: '2',
            limit: '10',
        });
    });
});
