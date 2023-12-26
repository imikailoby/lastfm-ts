import { LastFmApi } from '../lastFmApi';
import type {
    TagGetInfoParams,
    TagGetInfoResponse,
    TagGetTopAlbumsParams,
    TagGetTopAlbumsResponse,
    TagGetTopArtistsParams,
    TagGetTopArtistsResponse,
    TagGetTopTagsResponse,
    TagGetTopTracksParams,
    TagGetTopTracksResponse,
} from './tag.types';

export class TagApi extends LastFmApi implements TagApiInterface {
    public getInfo(params: TagGetInfoParams): Promise<TagGetInfoResponse> {
        return this.apiClient.get<TagGetInfoResponse, TagGetInfoParams>({
            method: 'tag.getInfo',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getTopAlbums(params: TagGetTopAlbumsParams): Promise<TagGetTopAlbumsResponse> {
        return this.apiClient.get<TagGetTopAlbumsResponse, TagGetTopAlbumsParams>({
            method: 'tag.getTopAlbums',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getTopArtists(params: TagGetTopArtistsParams): Promise<TagGetTopArtistsResponse> {
        return this.apiClient.get<TagGetTopArtistsResponse, TagGetTopArtistsParams>({
            method: 'tag.getTopArtists',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getTopTags(): Promise<TagGetTopTagsResponse> {
        return this.apiClient.get<TagGetTopTagsResponse, unknown>({
            method: 'tag.getTopTags',
            api_key: this.apiKey,
        });
    }

    public getTopTracks(params: TagGetTopTracksParams): Promise<TagGetTopTracksResponse> {
        return this.apiClient.get<TagGetTopTracksResponse, TagGetTopTracksParams>({
            method: 'tag.getTopTracks',
            api_key: this.apiKey,
            ...params,
        });
    }
}

interface TagApiInterface {
    getInfo: (params: TagGetInfoParams) => Promise<TagGetInfoResponse>;
    getTopAlbums: (params: TagGetTopAlbumsParams) => Promise<TagGetTopAlbumsResponse>;
    getTopArtists(params: TagGetTopArtistsParams): Promise<TagGetTopArtistsResponse>;
    getTopTags(): Promise<TagGetTopTagsResponse>;
    getTopTracks(params: TagGetTopTracksParams): Promise<TagGetTopTracksResponse>;
}
