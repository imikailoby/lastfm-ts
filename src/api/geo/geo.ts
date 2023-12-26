import { LastFmApi } from '../lastFmApi';
import type {
    GeoGetTopArtistsParams,
    GeoGetTopArtistsResponse,
    GeoGetTopTracksParams,
    GeoGetTopTracksResponse,
} from './geo.types';

export class GeoApi extends LastFmApi implements GeoApiInterface {
    public getTopArtists(params: GeoGetTopArtistsParams): Promise<GeoGetTopArtistsResponse> {
        return this.apiClient.get<GeoGetTopArtistsResponse, GeoGetTopArtistsParams>({
            method: 'geo.getTopArtists',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getTopTracks(params: GeoGetTopTracksParams): Promise<GeoGetTopTracksResponse> {
        return this.apiClient.get<GeoGetTopTracksResponse, GeoGetTopTracksParams>({
            method: 'geo.getTopTracks',
            api_key: this.apiKey,
            ...params,
        });
    }
}

interface GeoApiInterface {
    getTopArtists: (params: GeoGetTopArtistsParams) => Promise<GeoGetTopArtistsResponse>;
    getTopTracks: (params: GeoGetTopTracksParams) => Promise<GeoGetTopTracksResponse>;
}
