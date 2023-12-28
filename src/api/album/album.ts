import type { OptionalUserPlayCount } from '../common.types';
import { LastFmApi } from '../lastFmApi';
import type {
    AlbumSearchParams,
    AlbumSearchParamsResponse,
    AlbumGetTopTagsParams,
    AlbumGetTopTagsResponse,
    AlbumGetTagsParams,
    AlbumGetTagsResponse,
    AlbumGetInfoParams,
    AlbumGetInfoResponse,
} from './album.types';

export class AlbumApi extends LastFmApi implements AlbumApiInterface {
    public getInfo<T extends OptionalUserPlayCount = undefined>(
        params: AlbumGetInfoParams,
    ): Promise<AlbumGetInfoResponse<T>> {
        return this.apiClient.get<AlbumGetInfoResponse<T>, AlbumGetInfoParams>({
            method: 'album.getInfo',
            api_key: this.apiKey,
            ...params,
        });
    }

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
    getInfo<T extends OptionalUserPlayCount = undefined>(params: AlbumGetInfoParams): Promise<AlbumGetInfoResponse<T>>;
    getTags(params: AlbumGetTagsParams): Promise<AlbumGetTagsResponse>;
    getTopTags: (params: AlbumGetTopTagsParams) => Promise<AlbumGetTopTagsResponse>;
    search: (params: AlbumSearchParams) => Promise<AlbumSearchParamsResponse>;
}
