import { LastFmApi } from '../lastFmApi';
import type {
    AlbumSearchParams,
    AlbumSearchParamsResponse,
    AlbumGetTopTagsParams,
    AlbumGetTopTagsResponse,
    AlbumGetTagsParams,
    AlbumGetTagsResponse,
} from './album.types';

export class AlbumApi extends LastFmApi implements AlbumApiInterface {
    public getTags(params: AlbumGetTagsParams): Promise<AlbumGetTagsResponse> {
        return this.apiClient.get<AlbumGetTagsResponse, AlbumGetTagsParams>({
            method: 'album.getTags',
            api_key: this.apiKey,
            ...params,
        });
    }

    public getTopTags(params: AlbumGetTopTagsParams): Promise<AlbumGetTopTagsResponse> {
        return this.apiClient.get<AlbumGetTopTagsResponse, AlbumGetTopTagsParams>({
            method: 'album.getTopTags',
            api_key: this.apiKey,
            ...params,
        });
    }

    public search(params: AlbumSearchParams): Promise<AlbumSearchParamsResponse> {
        return this.apiClient.get<AlbumSearchParamsResponse, AlbumSearchParams>({
            method: 'album.search',
            api_key: this.apiKey,
            ...params,
        });
    }
}

interface AlbumApiInterface {
    getTags(params: AlbumGetTagsParams): Promise<AlbumGetTagsResponse>;
    getTopTags: (params: AlbumGetTopTagsParams) => Promise<AlbumGetTopTagsResponse>;
    search: (params: AlbumSearchParams) => Promise<AlbumSearchParamsResponse>;
}
