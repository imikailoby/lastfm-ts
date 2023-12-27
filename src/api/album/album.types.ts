import type { PaginationQueryParams } from '../../common/apiClient.types';
import type { Image, OpenSearch, Wiki } from '../common.types';
import type { Tag } from '../tag/tag.types';
import type { Track } from '../track/track.types';

export type AlbumGetInfoParams = {
    artist: string;
    album: string;
    autocorrect?: '0' | '1';
    username?: string;
    lang?: string;
};

type AlbumGetInfoResponseRegular = {
    album: Album;
};

type AlbumGetInfoResponseWithUserPlayCount = {
    album: Album & {
        userplaycount?: number;
    };
};

export type AlbumGetInfoResponse<T extends AlbumInfoType> = T extends 'userplaycount'
    ? AlbumGetInfoResponseWithUserPlayCount
    : AlbumGetInfoResponseRegular;

export type AlbumInfoType = 'userplaycount' | undefined;

export type AlbumGetTagsParams = {
    artist: string;
    album: string;
    autocorrect?: '0' | '1';
    user: string;
};

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

export type AlbumGetTopTagsParams = PaginationQueryParams & {
    artist: string;
    album: string;
    autocorrect?: '0' | '1';
};

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

export type AlbumSearchParams = PaginationQueryParams & {
    album: string;
};

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

export type Album = {
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
};
