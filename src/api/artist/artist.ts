import { LastFmApi } from '../lastFmApi';
import type {
    ArtistGetCorrectionParams,
    ArtistGetCorrectionResponse,
    ArtistGetInfoParams,
    ArtistGetInfoResponse,
    ArtistGetSimilarParams,
    ArtistGetSimilarResponse,
    ArtistGetTagsParams,
    ArtistGetTagsResponse,
    ArtistGetTopAlbumsParams,
    ArtistGetTopAlbumsResponse,
    ArtistGetTopTagsParams,
    ArtistGetTopTagsResponse,
    ArtistGetTopTracksParams,
    ArtistGetTopTracksResponse,
    ArtistInfoType,
    ArtistSearchParams,
    ArtistSearchResponse,
} from './artist.types';

export class ArtistApi extends LastFmApi implements ArtistApiInterface {
    public getCorrection(params: ArtistGetCorrectionParams): Promise<ArtistGetCorrectionResponse> {
        return this.apiClient.get<ArtistGetCorrectionResponse, ArtistGetCorrectionParams>({
            method: 'artist.getCorrection',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getInfo<T extends ArtistInfoType = undefined>(
        params: ArtistGetInfoParams,
    ): Promise<ArtistGetInfoResponse<T>> {
        return this.apiClient.get<ArtistGetInfoResponse<T>, ArtistGetInfoParams>({
            method: 'artist.getInfo',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getSimilar(params: ArtistGetSimilarParams): Promise<ArtistGetSimilarResponse> {
        return this.apiClient.get<ArtistGetSimilarResponse, ArtistGetSimilarParams>({
            method: 'artist.getSimilar',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getTags(params: ArtistGetTagsParams): Promise<ArtistGetTagsResponse> {
        return this.apiClient.get<ArtistGetTagsResponse, ArtistGetTagsParams>({
            method: 'artist.getTags',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getTopAlbums(params: ArtistGetTopAlbumsParams): Promise<ArtistGetTopAlbumsResponse> {
        return this.apiClient.get<ArtistGetTopAlbumsResponse, ArtistGetTopAlbumsParams>({
            method: 'artist.getTopAlbums',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getTopTags(params: ArtistGetTopTagsParams): Promise<ArtistGetTopTagsResponse> {
        return this.apiClient.get<ArtistGetTopTagsResponse, ArtistGetTopTagsParams>({
            method: 'artist.getTopTags',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getTopTracks(params: ArtistGetTopTracksParams): Promise<ArtistGetTopTracksResponse> {
        return this.apiClient.get<ArtistGetTopTracksResponse, ArtistGetTopTracksParams>({
            method: 'artist.getTopTracks',
            api_key: this.apiKey,
            ...params,
        });
    }

    public search(params: ArtistSearchParams): Promise<ArtistSearchResponse> {
        return this.apiClient.get<ArtistSearchResponse, ArtistSearchParams>({
            method: 'artist.search',
            api_key: this.apiKey,
            ...params,
        });
    }
}

interface ArtistApiInterface {
    getCorrection(params: ArtistGetCorrectionParams): Promise<ArtistGetCorrectionResponse>;
    getInfo<T extends ArtistInfoType = undefined>(params: ArtistGetInfoParams): Promise<ArtistGetInfoResponse<T>>;
    getSimilar(params: ArtistGetSimilarParams): Promise<ArtistGetSimilarResponse>;
    getTags(params: ArtistGetTagsParams): Promise<ArtistGetTagsResponse>;
    getTopAlbums(params: ArtistGetTopAlbumsParams): Promise<ArtistGetTopAlbumsResponse>;
    getTopTags(params: ArtistGetTopTagsParams): Promise<ArtistGetTopTagsResponse>;
    getTopTracks(params: ArtistGetTopTracksParams): Promise<ArtistGetTopTracksResponse>;
    search(params: ArtistSearchParams): Promise<ArtistSearchResponse>;
}
