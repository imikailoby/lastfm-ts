import type { PaginationQueryParams } from '../../common/apiClient.types';
import type { Artist } from '../artist/artist.types';
import type { AttrPagination, Image } from '../common.types';
import type { Tag } from '../tag/tag.types';
import type { Track } from '../track/track.types';

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

export type ChartGetTopTracksParams = PaginationQueryParams;

export type ChartGetTopTracksResponse = {
    tracks: {
        '@attr': AttrPagination;
        track: (Pick<Track, 'artist' | 'duration' | 'listeners' | 'mbid' | 'name' | 'playcount' | 'url'> & {
            image: Image[];
        })[];
    };
};
