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
}

interface UserApiInterface {
    getFriends: (params: UserGetFriendsParams) => Promise<UserGetFriendsResponse>;
    getInfo: (params: UserGetInfoParams) => Promise<UserGetInfoResponse>;
    getLovedTracks: (params: UserGetLovedTracksParams) => Promise<UserGetLovedTracksResponse>;
    getPersonalTags: <T = TaggingType>(params: UserGetPersonalTagsParams) => Promise<UserGetPersonalTagsResponse<T>>;
}
