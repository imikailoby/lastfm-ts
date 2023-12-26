import { UserApi } from '../api/user/user';
import { LibraryApi } from '../api/library/library';

export class LastFm implements LastFmInterface {
    public user: UserApi;
    public library: LibraryApi;

    constructor(apiKey: string) {
        this.user = new UserApi(apiKey);
        this.library = new LibraryApi(apiKey);
    }
}

interface LastFmInterface {
    user: UserApi;
    library: LibraryApi;
}
