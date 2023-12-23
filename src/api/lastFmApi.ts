import { ApiClient } from '../common/apiClient';

export class LastFmApi {
    protected apiKey: string;
    protected apiClient = new ApiClient();

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }
}
