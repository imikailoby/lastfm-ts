import type { PaginationQueryParams } from '../../common/apiClient.types';
import type { Album } from '../album/album.types';
import type { Artist } from '../artist/artist.types';
import type { AttrPagination, Image, Wiki } from '../common.types';
import type { Track } from '../track/track.types';

export interface TagGetInfoParams {
    tag: string;
    lang?: string;
}

export type TagGetInfoResponse = {
    tag: Tag;
};

export interface TagGetTopAlbumsParams extends PaginationQueryParams {
    tag: string;
}

export type TagGetTopAlbumsResponse = {
    albums: {
        '@attr': AttrPagination & {
            tag: string;
        };
        album: (Pick<Album, 'image' | 'mbid' | 'name' | 'url'> & {
            '@attr': {
                rank: string;
            };
            artist: Pick<Artist, 'mbid' | 'name' | 'url'>;
        })[];
    };
};

export interface TagGetTopArtistsParams extends PaginationQueryParams {
    tag: string;
}

export type TagGetTopArtistsResponse = {
    topartists: {
        '@attr': AttrPagination & {
            tag: string;
        };
        artist: (Pick<Artist, 'image' | 'mbid' | 'name' | 'url'> & {
            '@attr': {
                rank: string;
            };
        })[];
    };
};

export type TagGetTopTagsResponse = {
    toptags: {
        '@attr': {
            num_res: number;
            offset: number;
            total: number;
        };
        tag: (Pick<Tag, 'name' | 'reach'> & {
            count: number;
        })[];
    };
};

export interface TagGetTopTracksParams extends PaginationQueryParams {
    tag: string;
}

export type TagGetTopTracksResponse = {
    tracks: {
        '@attr': AttrPagination & {
            tag: string;
        };
        track: (Pick<Track, 'artist' | 'duration' | 'mbid' | 'name' | 'url'> & {
            '@attr': {
                rank: string;
            };
            image: Image[];
        })[];
    };
};

export interface Tag {
    name: string;
    reach: number | string;
    total: number;
    wiki?: Pick<Wiki, 'content' | 'summary'>;
}
