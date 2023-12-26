import { LastFmApi } from '../lastFmApi';
import type { ChartGetTopArtistsParams, ChartGetTopArtistsResponse } from './chart.types';

export class ChartApi extends LastFmApi implements ChartApiInterface {
    public getTopArtists(params?: ChartGetTopArtistsParams): Promise<ChartGetTopArtistsResponse> {
        return this.apiClient.get<ChartGetTopArtistsResponse, ChartGetTopArtistsParams>({
            method: 'chart.getTopArtists',
            api_key: this.apiKey,
            ...params,
        });
    }
}

interface ChartApiInterface {
    getTopArtists: (params?: ChartGetTopArtistsParams) => Promise<ChartGetTopArtistsResponse>;
}
