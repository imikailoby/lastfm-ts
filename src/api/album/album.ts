import { LastFmApi } from '../lastFmApi';
import type { AlbumSearchParams, AlbumSearchParamsResponse } from './album.types';

export class AlbumApi extends LastFmApi implements AlbumApiInterface {
    public search(params: AlbumSearchParams): Promise<AlbumSearchParamsResponse> {
        return this.apiClient.get<AlbumSearchParamsResponse, AlbumSearchParams>({
            method: 'album.search',
            api_key: this.apiKey,
            ...params,
        });
    }
}

interface AlbumApiInterface {
    search: (params: AlbumSearchParams) => Promise<AlbumSearchParamsResponse>;
}
