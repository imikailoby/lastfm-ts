import { LastFmApi } from '../lastFmApi';
import type { TagGetInfoParams, TagGetInfoResponse } from './tag.types';

export class TagApi extends LastFmApi implements TagApiInterface {
    public getInfo(params: TagGetInfoParams): Promise<TagGetInfoResponse> {
        return this.apiClient.get<TagGetInfoResponse, TagGetInfoParams>({
            method: 'tag.getInfo',
            api_key: this.apiKey,
            ...params,
        });
    }
}

interface TagApiInterface {
    getInfo: (params: TagGetInfoParams) => Promise<TagGetInfoResponse>;
}
