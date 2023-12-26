import { ApiClient } from '../../common/apiClient';
import { UserApi } from './user';
import { RecentTracksType } from './user.types';

jest.mock('../../common/apiClient');

const mockedApiKey = 'test';
const mockedUserName = 'someName';

describe('UserApi', () => {
    let userApi: UserApi;
    let mockedGet: jest.Mock;

    beforeEach(() => {
        mockedGet = jest.fn();
        ApiClient.prototype.get = mockedGet;
        userApi = new UserApi(mockedApiKey);
    });

    it('creates class instance', () => {
        expect(userApi).toBeInstanceOf(UserApi);
    });

    it('getInfo()', async () => {
        await userApi.getInfo({ user: mockedUserName });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'user.getInfo',
            user: mockedUserName,
        });

        await userApi.getInfo();
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'user.getInfo',
        });
    });

    it('getFriends()', async () => {
        await userApi.getFriends({ user: mockedUserName });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'user.getFriends',
            user: mockedUserName,
        });

        await userApi.getFriends({ user: mockedUserName, page: '2' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'user.getFriends',
            user: mockedUserName,
            page: '2',
        });

        await userApi.getFriends({ user: mockedUserName, limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: 'user.getFriends',
            user: mockedUserName,
            limit: '10',
        });

        await userApi.getFriends({ user: mockedUserName, page: '2', limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(4, {
            api_key: mockedApiKey,
            method: 'user.getFriends',
            user: mockedUserName,
            page: '2',
            limit: '10',
        });
    });

    it('getLovedTracks()', async () => {
        await userApi.getLovedTracks({ user: mockedUserName });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'user.getLovedTracks',
            user: mockedUserName,
        });

        await userApi.getLovedTracks({ user: mockedUserName, page: '2' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'user.getLovedTracks',
            user: mockedUserName,
            page: '2',
        });

        await userApi.getLovedTracks({ user: mockedUserName, limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: 'user.getLovedTracks',
            user: mockedUserName,
            limit: '10',
        });

        await userApi.getLovedTracks({ user: mockedUserName, page: '2', limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(4, {
            api_key: mockedApiKey,
            method: 'user.getLovedTracks',
            user: mockedUserName,
            page: '2',
            limit: '10',
        });
    });

    it('getLovedTracks()', async () => {
        await userApi.getPersonalTags({ user: mockedUserName, tag: 'rock', taggingtype: 'album' });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'user.getPersonalTags',
            user: mockedUserName,
            tag: 'rock',
            taggingtype: 'album',
        });

        await userApi.getPersonalTags({ user: mockedUserName, page: '2', tag: 'rap', taggingtype: 'artist' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'user.getPersonalTags',
            user: mockedUserName,
            page: '2',
            tag: 'rap',
            taggingtype: 'artist',
        });

        await userApi.getPersonalTags({
            user: mockedUserName,
            limit: '10',
            tag: 'jazz',
            taggingtype: 'track',
        });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: 'user.getPersonalTags',
            user: mockedUserName,
            limit: '10',
            tag: 'jazz',
            taggingtype: 'track',
        });

        await userApi.getPersonalTags({
            user: mockedUserName,
            page: '2',
            limit: '10',
            tag: 'pop',
            taggingtype: 'album',
        });
        expect(mockedGet).toHaveBeenNthCalledWith(4, {
            api_key: mockedApiKey,
            method: 'user.getPersonalTags',
            user: mockedUserName,
            page: '2',
            limit: '10',
            tag: 'pop',
            taggingtype: 'album',
        });
    });

    it('getRecentTracks()', async () => {
        await userApi.getRecentTracks({ user: mockedUserName });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'user.getRecentTracks',
            user: mockedUserName,
        });

        await userApi.getRecentTracks({ user: mockedUserName, extended: RecentTracksType.EXTENDED });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'user.getRecentTracks',
            user: mockedUserName,
            extended: RecentTracksType.EXTENDED,
        });

        await userApi.getRecentTracks({ user: mockedUserName, from: '1640995200', to: '1643760000' });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: 'user.getRecentTracks',
            user: mockedUserName,
            from: '1640995200',
            to: '1643760000',
        });

        await userApi.getRecentTracks({ user: mockedUserName, page: '2', limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(4, {
            api_key: mockedApiKey,
            method: 'user.getRecentTracks',
            user: mockedUserName,
            page: '2',
            limit: '10',
        });
    });

    it('getTopAlbums()', async () => {
        await userApi.getTopAlbums({ user: mockedUserName });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'user.getTopAlbums',
            user: mockedUserName,
        });

        await userApi.getTopAlbums({ user: mockedUserName, period: '6month' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'user.getTopAlbums',
            user: mockedUserName,
            period: '6month',
        });

        await userApi.getTopAlbums({ user: mockedUserName, page: '2', limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: 'user.getTopAlbums',
            user: mockedUserName,
            page: '2',
            limit: '10',
        });
    });

    it('getTopArtists()', async () => {
        await userApi.getTopArtists({ user: mockedUserName });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'user.getTopArtists',
            user: mockedUserName,
        });

        await userApi.getTopArtists({ user: mockedUserName, period: '6month' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'user.getTopArtists',
            user: mockedUserName,
            period: '6month',
        });

        await userApi.getTopArtists({ user: mockedUserName, page: '2', limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: 'user.getTopArtists',
            user: mockedUserName,
            page: '2',
            limit: '10',
        });
    });

    it('getTopTags()', async () => {
        await userApi.getTopTags({ user: mockedUserName });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'user.getTopTags',
            user: mockedUserName,
        });

        await userApi.getTopTags({ user: mockedUserName, limit: '20' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'user.getTopTags',
            user: mockedUserName,
            limit: '20',
        });
    });

    it('getTopTracks()', async () => {
        await userApi.getTopTracks({ user: mockedUserName });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'user.getTopTracks',
            user: mockedUserName,
        });

        await userApi.getTopTracks({ user: mockedUserName, period: '6month' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'user.getTopTracks',
            user: mockedUserName,
            period: '6month',
        });

        await userApi.getTopTracks({ user: mockedUserName, page: '2', limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: 'user.getTopTracks',
            user: mockedUserName,
            page: '2',
            limit: '10',
        });
    });

    it('getWeeklyAlbumChart()', async () => {
        await userApi.getWeeklyAlbumChart({ user: mockedUserName });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'user.getWeeklyAlbumChart',
            user: mockedUserName,
        });

        await userApi.getWeeklyAlbumChart({ user: mockedUserName, from: '1640995200', to: '1643760000' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'user.getWeeklyAlbumChart',
            user: mockedUserName,
            from: '1640995200',
            to: '1643760000',
        });
    });

    it('getWeeklyAlbumChart()', async () => {
        await userApi.getWeeklyArtistChart({ user: mockedUserName });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'user.getWeeklyArtistChart',
            user: mockedUserName,
        });

        await userApi.getWeeklyArtistChart({ user: mockedUserName, from: '1640995200', to: '1643760000' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'user.getWeeklyArtistChart',
            user: mockedUserName,
            from: '1640995200',
            to: '1643760000',
        });
    });

    it('getWeeklyTrackChart()', async () => {
        await userApi.getWeeklyTrackChart({ user: mockedUserName });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'user.getWeeklyTrackChart',
            user: mockedUserName,
        });

        await userApi.getWeeklyTrackChart({ user: mockedUserName, from: '1640995200', to: '1643760000' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'user.getWeeklyTrackChart',
            user: mockedUserName,
            from: '1640995200',
            to: '1643760000',
        });
    });
});
