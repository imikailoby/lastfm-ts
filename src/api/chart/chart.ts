import { LastFmApi } from '../lastFmApi';
import type {
    ChartGetTopArtistsParams,
    ChartGetTopArtistsResponse,
    ChartGetTopTagsParams,
    ChartGetTopTagsResponse,
    ChartGetTopTracksParams,
    ChartGetTopTracksResponse,
} from './chart.types';

export class ChartApi extends LastFmApi implements ChartApiInterface {
    public getTopArtists(params?: ChartGetTopArtistsParams): Promise<ChartGetTopArtistsResponse> {
        return this.apiClient.get<ChartGetTopArtistsResponse, ChartGetTopArtistsParams>({
            method: 'chart.getTopArtists',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getTopTags(params?: ChartGetTopTagsParams): Promise<ChartGetTopTagsResponse> {
        return this.apiClient.get<ChartGetTopTagsResponse, ChartGetTopTagsParams>({
            method: 'chart.getTopTags',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getTopTracks(params?: ChartGetTopTracksParams): Promise<ChartGetTopTracksResponse> {
        return this.apiClient.get<ChartGetTopTracksResponse, ChartGetTopTracksParams>({
            method: 'chart.getTopTracks',
            api_key: this.apiKey,
            ...params,
        });
    }
}

interface ChartApiInterface {
    getTopArtists: (params?: ChartGetTopArtistsParams) => Promise<ChartGetTopArtistsResponse>;
    getTopTags: (params?: ChartGetTopTagsParams) => Promise<ChartGetTopTagsResponse>;
    getTopTracks: (params?: ChartGetTopTracksParams) => Promise<ChartGetTopTracksResponse>;
}
