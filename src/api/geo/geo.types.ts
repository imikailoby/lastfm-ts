import type { PaginationQueryParams } from '../../common/apiClient.types';
import type { Artist } from '../artist/artist.types';
import type { AttrPagination } from '../common.types';

export type GeoGetTopArtistsParams = PaginationQueryParams & {
    country: string;
};

export type GeoGetTopArtistsResponse = {
    topartists: {
        '@attr': AttrPagination & {
            country: string;
        };
        artist: (Pick<Artist, 'image' | 'mbid' | 'name' | 'url'> & {
            listeners: string;
        })[];
    };
};
