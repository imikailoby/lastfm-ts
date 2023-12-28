import type { TaggingType } from '../common.types';
import { LastFmApi } from '../lastFmApi';
import type {
    UserGetFriendsParams,
    UserGetFriendsResponse,
    UserGetLovedTracksParams,
    UserGetLovedTracksResponse,
    UserGetPersonalTagsParams,
    UserGetPersonalTagsResponse,
    UserGetRecentTracksParams,
    UserGetRecentTracksResponse,
    TrackDetailLevel,
    UserGetTopAlbumsParams,
    UserGetTopAlbumsResponse,
    UserGetTopArtistsParams,
    UserGetTopArtistsResponse,
    UserGetTopTagsParams,
    UserGetTopTagsResponse,
    UserGetTopTracksParams,
    UserGetTopTracksResponse,
    UserGetWeeklyAlbumChartParams,
    UserGetWeeklyAlbumChartResponse,
    UserGetWeeklyArtistChartParams,
    UserGetWeeklyArtistChartResponse,
    UserGetWeeklyArtistTrackParams,
    UserGetWeeklyArtistTrackResponse,
    UserGetInfoParams,
    UserGetInfoResponse,
} from './user.types';

export class UserApi extends LastFmApi implements UserApiInterface {
    public getFriends(params: UserGetFriendsParams): Promise<UserGetFriendsResponse> {
        return this.apiClient.get<UserGetFriendsResponse, UserGetFriendsParams>({
            method: 'user.getFriends',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getInfo(params: UserGetInfoParams): Promise<UserGetInfoResponse> {
        return this.apiClient.get<UserGetInfoResponse, UserGetInfoParams>({
            method: 'user.getInfo',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getLovedTracks(params: UserGetLovedTracksParams): Promise<UserGetLovedTracksResponse> {
        return this.apiClient.get<UserGetLovedTracksResponse, UserGetLovedTracksParams>({
            method: 'user.getLovedTracks',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getPersonalTags<T extends TaggingType>(
        params: UserGetPersonalTagsParams,
    ): Promise<UserGetPersonalTagsResponse<T>> {
        return this.apiClient.get<UserGetPersonalTagsResponse<T>, UserGetPersonalTagsParams>({
            method: 'user.getPersonalTags',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getRecentTracks<T extends TrackDetailLevel = undefined>(
        params: UserGetRecentTracksParams,
    ): Promise<UserGetRecentTracksResponse<T>> {
        return this.apiClient.get<UserGetRecentTracksResponse<T>, UserGetRecentTracksParams>({
            method: 'user.getRecentTracks',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getTopAlbums(params: UserGetTopAlbumsParams): Promise<UserGetTopAlbumsResponse> {
        return this.apiClient.get<UserGetTopAlbumsResponse, UserGetTopAlbumsParams>({
            method: 'user.getTopAlbums',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getTopArtists(params: UserGetTopArtistsParams): Promise<UserGetTopArtistsResponse> {
        return this.apiClient.get<UserGetTopArtistsResponse, UserGetTopArtistsParams>({
            method: 'user.getTopArtists',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getTopTags(params: UserGetTopTagsParams): Promise<UserGetTopTagsResponse> {
        return this.apiClient.get<UserGetTopTagsResponse, UserGetTopTagsParams>({
            method: 'user.getTopTags',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getTopTracks(params: UserGetTopTracksParams): Promise<UserGetTopTracksResponse> {
        return this.apiClient.get<UserGetTopTracksResponse, UserGetTopTracksParams>({
            method: 'user.getTopTracks',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getWeeklyAlbumChart(params: UserGetWeeklyAlbumChartParams): Promise<UserGetWeeklyAlbumChartResponse> {
        return this.apiClient.get<UserGetWeeklyAlbumChartResponse, UserGetWeeklyAlbumChartParams>({
            method: 'user.getWeeklyAlbumChart',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getWeeklyArtistChart(params: UserGetWeeklyArtistChartParams): Promise<UserGetWeeklyArtistChartResponse> {
        return this.apiClient.get<UserGetWeeklyArtistChartResponse, UserGetWeeklyArtistChartParams>({
            method: 'user.getWeeklyArtistChart',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getWeeklyTrackChart(params: UserGetWeeklyArtistTrackParams): Promise<UserGetWeeklyArtistTrackResponse> {
        return this.apiClient.get<UserGetWeeklyArtistTrackResponse, UserGetWeeklyArtistTrackParams>({
            method: 'user.getWeeklyTrackChart',
            api_key: this.apiKey,
            ...params,
        });
    }
}

interface UserApiInterface {
    getFriends: (params: UserGetFriendsParams) => Promise<UserGetFriendsResponse>;
    getInfo: (params: UserGetInfoParams) => Promise<UserGetInfoResponse>;
    getLovedTracks: (params: UserGetLovedTracksParams) => Promise<UserGetLovedTracksResponse>;
    getPersonalTags: <T extends TaggingType>(
        params: UserGetPersonalTagsParams,
    ) => Promise<UserGetPersonalTagsResponse<T>>;
    getRecentTracks: <T extends TrackDetailLevel = undefined>(
        params: UserGetRecentTracksParams,
    ) => Promise<UserGetRecentTracksResponse<T>>;
    getTopAlbums: (params: UserGetTopAlbumsParams) => Promise<UserGetTopAlbumsResponse>;
    getTopArtists: (params: UserGetTopArtistsParams) => Promise<UserGetTopArtistsResponse>;
    getTopTags: (params: UserGetTopTagsParams) => Promise<UserGetTopTagsResponse>;
    getTopTracks: (params: UserGetTopTracksParams) => Promise<UserGetTopTracksResponse>;
    getWeeklyAlbumChart: (params: UserGetWeeklyAlbumChartParams) => Promise<UserGetWeeklyAlbumChartResponse>;
    getWeeklyArtistChart: (params: UserGetWeeklyArtistChartParams) => Promise<UserGetWeeklyArtistChartResponse>;
    getWeeklyTrackChart: (params: UserGetWeeklyArtistTrackParams) => Promise<UserGetWeeklyArtistTrackResponse>;
}
