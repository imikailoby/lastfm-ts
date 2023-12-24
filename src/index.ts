import { UserApi } from './api/user/user';

export class LastFm implements LastFmInterface {
    public user: UserApi;

    constructor(apiKey: string) {
        this.user = new UserApi(apiKey);
    }
}

interface LastFmInterface {
    user: UserApi;
}
