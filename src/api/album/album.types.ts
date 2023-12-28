import type { PaginationQueryParams } from '../../common/apiClient.types';
import type { FlagString, Image, OpenSearch, OptionalUserPlayCount, Wiki } from '../common.types';
import type { Tag } from '../tag/tag.types';
import type { Track } from '../track/track.types';

export interface AlbumGetInfoParams {
    artist: string;
    album: string;
    autocorrect?: FlagString;
    username?: string;
    lang?: string;
}

interface AlbumGetInfoResponseRegular {
    album: Album;
}

interface AlbumGetInfoResponseWithUserPlayCount {
    album: Album & {
        userplaycount?: number;
    };
}

export type AlbumGetInfoResponse<T extends OptionalUserPlayCount = undefined> = T extends 'userplaycount'
    ? AlbumGetInfoResponseWithUserPlayCount
    : AlbumGetInfoResponseRegular;

export interface AlbumGetTagsParams {
    artist: string;
    album: string;
    autocorrect?: FlagString;
    user: string;
}

export type AlbumGetTagsResponse = {
    tags: {
        '#text'?: string;
        '@attr': {
            album: string;
            artist: string;
        };
        tag?: (Pick<Tag, 'name'> & {
            url: string;
        })[];
    };
};

export interface AlbumGetTopTagsParams extends PaginationQueryParams {
    artist: string;
    album: string;
    autocorrect?: FlagString;
}

export type AlbumGetTopTagsResponse = {
    toptags: {
        '@attr': {
            album: string;
            artist: string;
        };
        tag: (Pick<Tag, 'name'> & {
            count: number;
            url: string;
        })[];
    };
};

export interface AlbumSearchParams extends PaginationQueryParams {
    album: string;
}

export type AlbumSearchParamsResponse = {
    results: OpenSearch & {
        '@attr': {
            for: string;
        };
        albummatches: {
            album: Pick<Album, 'artist' | 'image' | 'mbid' | 'name' | 'url'>[];
        };
    };
};

export interface Album {
    artist: string;
    image: Image[];
    listeners: string;
    mbid?: string;
    name: string;
    playcount: string | number;
    tags:
        | (Pick<Tag, 'name'> & {
              url: string;
          })[]
        | string;
    tracks?: (Pick<Track, 'artist' | 'duration' | 'name' | 'url'> & {
        '@attr': {
            rank: number;
        };
    })[];
    url: string;
    wiki?: Wiki;
}
