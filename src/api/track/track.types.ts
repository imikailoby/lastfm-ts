import type { PaginationQueryParams } from '../../common/apiClient.types';
import type { Album } from '../album/album.types';
import type { Artist } from '../artist/artist.types';
import type { FlagString, Image, OpenSearch, OptionalUserPlayCount, Wiki } from '../common.types';
import type { Tag } from '../tag/tag.types';

export interface TrackGetCorrectionParams {
    track: string;
    artist: string;
}

export type TrackGetCorrectionResponse = {
    corrections: {
        correction: {
            '@attr': {
                artistcorrected: string;
                index: string;
                trackcorrected: string;
            };
            track: Pick<Track, 'artist' | 'mbid' | 'name' | 'url'>;
        };
    };
};

export interface TrackGetInfoParams {
    track: string;
    artist: string;
    username?: string;
    autocorrect?: FlagString;
}

interface TrackGetInfoResponseRegular {
    track: Track;
}

interface TrackGetInfoResponseWithUserPlayCount {
    track: Track & {
        userloved: string;
        userplaycount: string;
    };
}

export type TrackGetInfoResponse<T extends OptionalUserPlayCount = undefined> = T extends 'userplaycount'
    ? TrackGetInfoResponseWithUserPlayCount
    : TrackGetInfoResponseRegular;

export interface TrackGetSimilarParams extends Pick<PaginationQueryParams, 'limit'> {
    track: string;
    artist: string;
    autocorrect?: FlagString;
}

export type TrackGetSimilarResponse = {
    similartracks: {
        '@attr': {
            artist: string;
        };
        track: (Pick<Track, 'artist' | 'duration' | 'mbid' | 'name' | 'playcount' | 'url'> & {
            image: Image[];
            match: number;
        })[];
    };
};

export interface TrackGetTagsParams {
    track: string;
    artist: string;
    autocorrect?: FlagString;
    user: string;
}

export type TrackGetTagsResponse = {
    tags: {
        '#text'?: string;
        '@attr': {
            artist: string;
            track: string;
        };
        tag?: (Pick<Tag, 'name'> & {
            url: string;
        })[];
    };
};

export interface TrackGetTopTagsParams {
    track: string;
    artist: string;
    autocorrect?: FlagString;
}

export type TrackGetTopTagsResponse = {
    toptags: {
        '@attr': {
            artist: string;
            track: string;
        };
        tag: (Pick<Tag, 'name'> & {
            count: number;
            url: string;
        })[];
    };
};

export interface TrackSearchParams extends PaginationQueryParams {
    track: string;
    artist?: string;
}

export type TrackSearchParamsResponse = {
    results: Omit<OpenSearch, 'opensearch:Query'> & {
        'opensearch:Query': Pick<OpenSearch['opensearch:Query'], '#text' | 'role' | 'startPage'>;
        '@attr': object;
        trackmatches: {
            track: (Pick<Track, 'listeners' | 'mbid' | 'name' | 'url'> & {
                artist: string;
                image: Image[];
            })[];
        };
    };
};

export interface Track {
    album: Pick<Album, 'artist' | 'image' | 'mbid' | 'url'> & {
        '@attr': {
            position: number;
        };
        title: string;
    };
    artist: Pick<Artist, 'mbid' | 'name' | 'url'>;
    duration: string | number | null;
    listeners: string;
    mbid?: string;
    name: string;
    playcount: string | number;
    toptags: {
        tag: (Pick<Tag, 'name'> & {
            url: string;
        })[];
    };
    url: string;
    wiki?: Wiki;
}
