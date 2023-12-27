import { ApiClient } from '../../common/apiClient';
import { TrackApi } from './track';

jest.mock('../../common/apiClient');

const mockedApiKey = 'test';
const mockedArtist = 'someArtist';
const mockedUser = 'someUser';
const mockedTrack = 'someTrack';

describe('TrackApi', () => {
    let trackApi: TrackApi;
    let mockedGet: jest.Mock;

    beforeEach(() => {
        mockedGet = jest.fn();
        ApiClient.prototype.get = mockedGet;
        trackApi = new TrackApi(mockedApiKey);
    });

    it('creates class instance', () => {
        expect(trackApi).toBeInstanceOf(TrackApi);
    });

    it('getCorrection()', async () => {
        await trackApi.getCorrection({ track: mockedTrack, artist: mockedArtist });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'track.getCorrection',
            track: mockedTrack,
            artist: mockedArtist,
        });
    });

    it('getInfo()', async () => {
        await trackApi.getInfo({ track: mockedTrack, artist: mockedArtist });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'track.getInfo',
            track: mockedTrack,
            artist: mockedArtist,
        });

        await trackApi.getInfo({ track: mockedTrack, artist: mockedArtist, autocorrect: '1' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'track.getInfo',
            track: mockedTrack,
            artist: mockedArtist,
            autocorrect: '1',
        });

        await trackApi.getInfo({ track: mockedTrack, artist: mockedArtist, username: mockedUser });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: 'track.getInfo',
            track: mockedTrack,
            artist: mockedArtist,
            username: mockedUser,
        });
    });

    it('getSimilar()', async () => {
        await trackApi.getSimilar({ track: mockedTrack, artist: mockedArtist });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'track.getSimilar',
            track: mockedTrack,
            artist: mockedArtist,
        });

        await trackApi.getSimilar({ track: mockedTrack, artist: mockedArtist, autocorrect: '1' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'track.getSimilar',
            track: mockedTrack,
            artist: mockedArtist,
            autocorrect: '1',
        });

        await trackApi.getSimilar({ track: mockedTrack, artist: mockedArtist, limit: '2' });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: 'track.getSimilar',
            track: mockedTrack,
            artist: mockedArtist,
            limit: '2',
        });
    });

    it('getTags()', async () => {
        await trackApi.getTags({ track: mockedTrack, artist: mockedArtist, user: mockedUser });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'track.getTags',
            track: mockedTrack,
            artist: mockedArtist,
            user: mockedUser,
        });

        await trackApi.getTags({ track: mockedTrack, artist: mockedArtist, user: mockedUser, autocorrect: '1' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'track.getTags',
            track: mockedTrack,
            artist: mockedArtist,
            user: mockedUser,
            autocorrect: '1',
        });
    });

    it('getTopTags()', async () => {
        await trackApi.getTopTags({ track: mockedTrack, artist: mockedArtist });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'track.getTopTags',
            track: mockedTrack,
            artist: mockedArtist,
        });

        await trackApi.getTopTags({ track: mockedTrack, artist: mockedArtist, autocorrect: '1' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'track.getTopTags',
            track: mockedTrack,
            artist: mockedArtist,
            autocorrect: '1',
        });
    });

    it('search()', async () => {
        await trackApi.search({ track: mockedTrack });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'track.search',
            track: mockedTrack,
        });

        await trackApi.search({ track: mockedTrack, artist: mockedArtist });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'track.search',
            track: mockedTrack,
            artist: mockedArtist,
        });

        await trackApi.search({ track: mockedTrack, page: '2' });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: 'track.search',
            track: mockedTrack,
            page: '2',
        });

        await trackApi.search({ track: mockedTrack, limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(4, {
            api_key: mockedApiKey,
            method: 'track.search',
            track: mockedTrack,
            limit: '10',
        });

        await trackApi.search({ track: mockedTrack, page: '2', limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(5, {
            api_key: mockedApiKey,
            method: 'track.search',
            track: mockedTrack,
            page: '2',
            limit: '10',
        });
    });
});
