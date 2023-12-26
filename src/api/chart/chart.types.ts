import type { PaginationQueryParams } from '../../common/apiClient.types';
import type { Artist } from '../artist/artist.types';
import type { AttrPagination } from '../common.types';
import type { Tag } from '../tag/tag.types';

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

export type ChartGetTopTagsParams = PaginationQueryParams;

export type ChartGetTopTagsResponse = {
    tags: {
        '@attr': AttrPagination;
        tag: (Pick<Tag, 'name' | 'reach' | 'wiki'> & {
            taggings: string;
            url: string;
        })[];
    };
};
