import { TaggingType } from '../common.types';
import { LastFmApi } from '../lastFmApi';
import {
    UserApiMethods,
    UserGetFriendsParams,
    UserGetFriendsResponse,
    UserGetLovedTracksParams,
    type UserGetInfoParams,
    type UserGetInfoResponse,
    UserGetLovedTracksResponse,
    UserGetPersonalTagsParams,
    UserGetPersonalTagsResponse,
    UserGetRecentTracksParams,
    UserGetRecentTracksResponse,
    RecentTracksType,
    UserGetTopAlbumsParams,
    UserGetTopAlbumsResponse,
    UserGetTopArtistsParams,
    UserGetTopArtistsResponse,
    UserGetTopTagsParams,
    UserGetTopTagsResponse,
    UserGetTopTracksParams,
    UserGetTopTracksResponse,
} from './user.types';

export class UserApi extends LastFmApi implements UserApiInterface {
    public getFriends(params: UserGetFriendsParams): Promise<UserGetFriendsResponse> {
        return this.apiClient.get<UserGetFriendsResponse, UserGetFriendsParams>({
            method: UserApiMethods.GET_FIRENDS,
            api_key: this.apiKey,
            ...params,
        });
    }

    public getInfo(params: UserGetInfoParams): Promise<UserGetInfoResponse> {
        return this.apiClient.get<UserGetInfoResponse, UserGetInfoParams>({
            method: UserApiMethods.GET_INFO,
            api_key: this.apiKey,
            ...params,
        });
    }

    public getLovedTracks(params: UserGetLovedTracksParams): Promise<UserGetLovedTracksResponse> {
        return this.apiClient.get<UserGetLovedTracksResponse, UserGetLovedTracksParams>({
            method: UserApiMethods.GET_LOVED_TRACKS,
            api_key: this.apiKey,
            ...params,
        });
    }

    public getPersonalTags<T = TaggingType>(
        params: UserGetPersonalTagsParams,
    ): Promise<UserGetPersonalTagsResponse<T>> {
        return this.apiClient.get<UserGetPersonalTagsResponse<T>, UserGetPersonalTagsParams>({
            method: UserApiMethods.GET_PERSONAL_TAGS,
            api_key: this.apiKey,
            ...params,
        });
    }

    public getRecentTracks<T = RecentTracksType>(
        params: UserGetRecentTracksParams,
    ): Promise<UserGetRecentTracksResponse<T>> {
        return this.apiClient.get<UserGetRecentTracksResponse<T>, UserGetRecentTracksParams>({
            method: UserApiMethods.GET_RECENT_TRACKS,
            api_key: this.apiKey,
            ...params,
        });
    }

    public getTopAlbums(params: UserGetTopAlbumsParams): Promise<UserGetTopAlbumsResponse> {
        return this.apiClient.get<UserGetTopAlbumsResponse, UserGetTopAlbumsParams>({
            method: UserApiMethods.GET_TOP_ALBUMS,
            api_key: this.apiKey,
            ...params,
        });
    }

    public getTopArtists(params: UserGetTopArtistsParams): Promise<UserGetTopArtistsResponse> {
        return this.apiClient.get<UserGetTopArtistsResponse, UserGetTopArtistsParams>({
            method: UserApiMethods.GET_TOP_ARTISTS,
            api_key: this.apiKey,
            ...params,
        });
    }

    public getTopTags(params: UserGetTopTagsParams): Promise<UserGetTopTagsResponse> {
        return this.apiClient.get<UserGetTopTagsResponse, UserGetTopTagsParams>({
            method: UserApiMethods.GET_TOP_TAGS,
            api_key: this.apiKey,
            ...params,
        });
    }

    public getTopTracks(params: UserGetTopTracksParams): Promise<UserGetTopTracksResponse> {
        return this.apiClient.get<UserGetTopTracksResponse, UserGetTopTracksParams>({
            method: UserApiMethods.GET_TOP_TRACKS,
            api_key: this.apiKey,
            ...params,
        });
    }
}

interface UserApiInterface {
    getFriends: (params: UserGetFriendsParams) => Promise<UserGetFriendsResponse>;
    getInfo: (params: UserGetInfoParams) => Promise<UserGetInfoResponse>;
    getLovedTracks: (params: UserGetLovedTracksParams) => Promise<UserGetLovedTracksResponse>;
    getPersonalTags: <T = TaggingType>(params: UserGetPersonalTagsParams) => Promise<UserGetPersonalTagsResponse<T>>;
    getRecentTracks: <T = RecentTracksType>(
        params: UserGetRecentTracksParams,
    ) => Promise<UserGetRecentTracksResponse<T>>;
    getTopAlbums: (params: UserGetTopAlbumsParams) => Promise<UserGetTopAlbumsResponse>;
    getTopArtists: (params: UserGetTopArtistsParams) => Promise<UserGetTopArtistsResponse>;
    getTopTags: (params: UserGetTopTagsParams) => Promise<UserGetTopTagsResponse>;
    getTopTracks: (params: UserGetTopTracksParams) => Promise<UserGetTopTracksResponse>;
}
