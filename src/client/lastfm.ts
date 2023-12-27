import { UserApi } from '../api/user/user';
import { LibraryApi } from '../api/library/library';
import { GeoApi } from '../api/geo/geo';
import { ChartApi } from '../api/chart/chart';
import { TagApi } from '../api/tag/tag';
import { AlbumApi } from '../api/album/album';
import { ArtistApi } from '../api/artist/artist';
import { TrackApi } from '../api/track/track';

export class LastFm implements LastFmInterface {
    public user: UserApi;
    public library: LibraryApi;
    public geo: GeoApi;
    public chart: ChartApi;
    public tag: TagApi;
    public album: AlbumApi;
    public artist: ArtistApi;
    public track: TrackApi;

    constructor(apiKey: string) {
        this.user = new UserApi(apiKey);
        this.library = new LibraryApi(apiKey);
        this.geo = new GeoApi(apiKey);
        this.chart = new ChartApi(apiKey);
        this.tag = new TagApi(apiKey);
        this.album = new AlbumApi(apiKey);
        this.artist = new ArtistApi(apiKey);
        this.track = new TrackApi(apiKey);
    }
}

interface LastFmInterface {
    user: UserApi;
    library: LibraryApi;
    geo: GeoApi;
    chart: ChartApi;
    tag: TagApi;
    album: AlbumApi;
    artist: ArtistApi;
    track: TrackApi;
}
