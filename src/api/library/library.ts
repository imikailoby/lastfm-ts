import { LastFmApi } from '../lastFmApi';
import type { LibraryGetArtistsParams, LibraryGetArtistsResponse } from './library.types';

export class LibraryApi extends LastFmApi implements LibraryApiInterface {
    public getArtists(params: LibraryGetArtistsParams): Promise<LibraryGetArtistsResponse> {
        return this.apiClient.get<LibraryGetArtistsResponse, LibraryGetArtistsParams>({
            method: 'library.getArtists',
            api_key: this.apiKey,
            ...params,
        });
    }
}

interface LibraryApiInterface {
    getArtists: (params: LibraryGetArtistsParams) => Promise<LibraryGetArtistsResponse>;
}
