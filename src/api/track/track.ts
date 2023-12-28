import type { OptionalUserPlayCount } from '../common.types';
import { LastFmApi } from '../lastFmApi';
import type {
    TrackGetCorrectionParams,
    TrackGetCorrectionResponse,
    TrackGetInfoParams,
    TrackGetInfoResponse,
    TrackGetSimilarParams,
    TrackGetSimilarResponse,
    TrackGetTagsParams,
    TrackGetTagsResponse,
    TrackGetTopTagsParams,
    TrackGetTopTagsResponse,
    TrackSearchParams,
    TrackSearchParamsResponse,
} from './track.types';

export class TrackApi extends LastFmApi implements TrackApiInterface {
    public getCorrection(params: TrackGetCorrectionParams): Promise<TrackGetCorrectionResponse> {
        return this.apiClient.get<TrackGetCorrectionResponse, TrackGetCorrectionParams>({
            method: 'track.getCorrection',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getInfo<T extends OptionalUserPlayCount = undefined>(
        params: TrackGetInfoParams,
    ): Promise<TrackGetInfoResponse<T>> {
        return this.apiClient.get<TrackGetInfoResponse<T>, TrackGetInfoParams>({
            method: 'track.getInfo',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getSimilar(params: TrackGetSimilarParams): Promise<TrackGetSimilarResponse> {
        return this.apiClient.get<TrackGetSimilarResponse, TrackGetSimilarParams>({
            method: 'track.getSimilar',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getTags(params: TrackGetTagsParams): Promise<TrackGetTagsResponse> {
        return this.apiClient.get<TrackGetTagsResponse, TrackGetTagsParams>({
            method: 'track.getTags',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getTopTags(params: TrackGetTopTagsParams): Promise<TrackGetTopTagsResponse> {
        return this.apiClient.get<TrackGetTopTagsResponse, TrackGetTopTagsParams>({
            method: 'track.getTopTags',
            api_key: this.apiKey,
            ...params,
        });
    }

    public search(params: TrackSearchParams): Promise<TrackSearchParamsResponse> {
        return this.apiClient.get<TrackSearchParamsResponse, TrackSearchParams>({
            method: 'track.search',
            api_key: this.apiKey,
            ...params,
        });
    }
}

interface TrackApiInterface {
    getCorrection(params: TrackGetCorrectionParams): Promise<TrackGetCorrectionResponse>;
    getInfo<T extends OptionalUserPlayCount = undefined>(params: TrackGetInfoParams): Promise<TrackGetInfoResponse<T>>;
    getSimilar(params: TrackGetSimilarParams): Promise<TrackGetSimilarResponse>;
    getTags(params: TrackGetTagsParams): Promise<TrackGetTagsResponse>;
    getTopTags(params: TrackGetTopTagsParams): Promise<TrackGetTopTagsResponse>;
    search(params: TrackSearchParams): Promise<TrackSearchParamsResponse>;
}
