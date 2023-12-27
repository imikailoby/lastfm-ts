import { UserApi } from '../api/user/user';
import { LibraryApi } from '../api/library/library';
import { GeoApi } from '../api/geo/geo';
import { ChartApi } from '../api/chart/chart';
import { TagApi } from '../api/tag/tag';
import { AlbumApi } from '../api/album/album';

export class LastFm implements LastFmInterface {
    public user: UserApi;
    public library: LibraryApi;
    public geo: GeoApi;
    public chart: ChartApi;
    public tag: TagApi;
    public album: AlbumApi;

    constructor(apiKey: string) {
        this.user = new UserApi(apiKey);
        this.library = new LibraryApi(apiKey);
        this.geo = new GeoApi(apiKey);
        this.chart = new ChartApi(apiKey);
        this.tag = new TagApi(apiKey);
        this.album = new AlbumApi(apiKey);
    }
}

interface LastFmInterface {
    user: UserApi;
    library: LibraryApi;
    geo: GeoApi;
    chart: ChartApi;
    tag: TagApi;
    album: AlbumApi;
}
