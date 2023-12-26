import { LastFmApi } from '../lastFmApi';
import type { GeoGetTopArtistsParams, GeoGetTopArtistsResponse } from './geo.types';

export class GeoApi extends LastFmApi implements GeoApiInterface {
    public getTopArtists(params: GeoGetTopArtistsParams): Promise<GeoGetTopArtistsResponse> {
        return this.apiClient.get<GeoGetTopArtistsResponse, GeoGetTopArtistsParams>({
            method: 'geo.getTopArtists',
            api_key: this.apiKey,
            ...params,
        });
    }
}

interface GeoApiInterface {
    getTopArtists: (params: GeoGetTopArtistsParams) => Promise<GeoGetTopArtistsResponse>;
}
