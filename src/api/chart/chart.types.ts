import type { PaginationQueryParams } from '../../common/apiClient.types';
import type { Artist } from '../artist/artist.types';
import type { AttrPagination } from '../common.types';

export type ChartGetTopArtistsParams = PaginationQueryParams;

export type ChartGetTopArtistsResponse = {
    artists: {
        '@attr': AttrPagination;
        artist: (Pick<Artist, 'image' | 'mbid' | 'name' | 'url'> & {
            listeners: string;
            playcount: string;
        })[];
    };
};
