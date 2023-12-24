import { LastFmApi } from '../lastFmApi';
import { UserApiMethods, type UserGetInfoParams, type UserGetInfoResponse } from './user.types';

export class UserApi extends LastFmApi implements UserApiInterface {
    public getInfo(params: UserGetInfoParams): Promise<UserGetInfoResponse> {
        return this.apiClient.get<UserGetInfoResponse, UserGetInfoParams>({
            method: UserApiMethods.GET_INFO,
            api_key: this.apiKey,
            ...params,
        });
    }
}

interface UserApiInterface {
    getInfo: (params: UserGetInfoParams) => Promise<UserGetInfoResponse>;
}
