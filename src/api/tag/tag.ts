import { LastFmApi } from '../lastFmApi';
import type { TagGetInfoParams, TagGetInfoResponse, TagGetTopAlbumsParams, TagGetTopAlbumsResponse } from './tag.types';

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
}

interface TagApiInterface {
    getInfo: (params: TagGetInfoParams) => Promise<TagGetInfoResponse>;
    getTopAlbums: (params: TagGetTopAlbumsParams) => Promise<TagGetTopAlbumsResponse>;
}
