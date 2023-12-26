import type { PaginationQueryParams } from '../../common/apiClient.types';
import type { Artist } from '../artist/artist.types';
import type { AttrPagination } from '../common.types';

export type LibraryGetArtistsParams = PaginationQueryParams & {
    user: string;
};

export type LibraryGetArtistsResponse = {
    artists: {
        '@attr': AttrPagination & {
            user: string;
        };
        artist: (Pick<Artist, 'image' | 'mbid' | 'name' | 'url'> & {
            playcount: string;
            tagcount: string;
        })[];
    };
};
