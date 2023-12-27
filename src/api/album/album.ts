import { LastFmApi } from '../lastFmApi';
import type {
    AlbumSearchParams,
    AlbumSearchParamsResponse,
    AlbumGetTopTagsParams,
    AlbumGetTopTagsResponse,
} from './album.types';

export class AlbumApi extends LastFmApi implements AlbumApiInterface {
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
    getTopTags: (params: AlbumGetTopTagsParams) => Promise<AlbumGetTopTagsResponse>;
    search: (params: AlbumSearchParams) => Promise<AlbumSearchParamsResponse>;
}
