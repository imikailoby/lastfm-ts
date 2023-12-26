import { UserApi } from '../api/user/user';
import { LibraryApi } from '../api/library/library';
import { GeoApi } from '../api/geo/geo';

export class LastFm implements LastFmInterface {
    public user: UserApi;
    public library: LibraryApi;
    public geo: GeoApi;

    constructor(apiKey: string) {
        this.user = new UserApi(apiKey);
        this.library = new LibraryApi(apiKey);
        this.geo = new GeoApi(apiKey);
    }
}

interface LastFmInterface {
    user: UserApi;
    library: LibraryApi;
    geo: GeoApi;
}
