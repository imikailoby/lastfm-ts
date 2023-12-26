import { ApiClient } from '../../common/apiClient';
import { TagApi } from './tag';

jest.mock('../../common/apiClient');

const mockedApiKey = 'test';
const mockedTag = 'rock';

describe('TagApi', () => {
    let tagApi: TagApi;
    let mockedGet: jest.Mock;

    beforeEach(() => {
        mockedGet = jest.fn();
        ApiClient.prototype.get = mockedGet;
        tagApi = new TagApi(mockedApiKey);
    });

    it('creates class instance', () => {
        expect(tagApi).toBeInstanceOf(TagApi);
    });

    it('getInfo()', async () => {
        await tagApi.getInfo({ tag: mockedTag });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'tag.getInfo',
            tag: mockedTag,
        });

        await tagApi.getInfo({ tag: mockedTag, lang: 'es' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'tag.getInfo',
            tag: mockedTag,
            lang: 'es',
        });
    });

    it('getTopAlbums()', async () => {
        await tagApi.getTopAlbums({ tag: mockedTag });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'tag.getTopAlbums',
            tag: mockedTag,
        });

        await tagApi.getTopAlbums({ tag: mockedTag, page: '2' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'tag.getTopAlbums',
            tag: mockedTag,
            page: '2',
        });

        await tagApi.getTopAlbums({ tag: mockedTag, limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: 'tag.getTopAlbums',
            tag: mockedTag,
            limit: '10',
        });

        await tagApi.getTopAlbums({ tag: mockedTag, page: '2', limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(4, {
            api_key: mockedApiKey,
            method: 'tag.getTopAlbums',
            tag: mockedTag,
            page: '2',
            limit: '10',
        });
    });

    it('getTopArtists()', async () => {
        await tagApi.getTopArtists({ tag: mockedTag });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'tag.getTopArtists',
            tag: mockedTag,
        });

        await tagApi.getTopArtists({ tag: mockedTag, page: '2' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'tag.getTopArtists',
            tag: mockedTag,
            page: '2',
        });

        await tagApi.getTopArtists({ tag: mockedTag, limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: 'tag.getTopArtists',
            tag: mockedTag,
            limit: '10',
        });

        await tagApi.getTopArtists({ tag: mockedTag, page: '2', limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(4, {
            api_key: mockedApiKey,
            method: 'tag.getTopArtists',
            tag: mockedTag,
            page: '2',
            limit: '10',
        });
    });

    it('getTopTags()', async () => {
        await tagApi.getTopTags();
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'tag.getTopTags',
        });
    });

    it('getTopTracks()', async () => {
        await tagApi.getTopTracks({ tag: mockedTag });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'tag.getTopTracks',
            tag: mockedTag,
        });

        await tagApi.getTopTracks({ tag: mockedTag, page: '2' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'tag.getTopTracks',
            tag: mockedTag,
            page: '2',
        });

        await tagApi.getTopTracks({ tag: mockedTag, limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: 'tag.getTopTracks',
            tag: mockedTag,
            limit: '10',
        });

        await tagApi.getTopTracks({ tag: mockedTag, page: '2', limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(4, {
            api_key: mockedApiKey,
            method: 'tag.getTopTracks',
            tag: mockedTag,
            page: '2',
            limit: '10',
        });
    });
});
