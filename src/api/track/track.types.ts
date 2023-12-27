import type { PaginationQueryParams } from '../../common/apiClient.types';
import type { Album } from '../album/album.types';
import type { Artist } from '../artist/artist.types';
import type { Image, OpenSearch, Wiki } from '../common.types';
import type { Tag } from '../tag/tag.types';

export type TrackGetCorrectionParams = {
    track: string;
    artist: string;
};
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

export type TrackGetInfoParams = {
    track: string;
    artist: string;
    username?: string;
    autocorrect?: '0' | '1';
};

type TrackGetInfoResponseRegular = {
    track: Track;
};

type TrackGetInfoResponseWithUserPlayCount = {
    track: Track & {
        userloved: string;
        userplaycount: string;
    };
};

export type TrackGetInfoResponse<T extends TrackInfoType> = T extends 'userplaycount'
    ? TrackGetInfoResponseWithUserPlayCount
    : TrackGetInfoResponseRegular;

export type TrackInfoType = 'userplaycount' | undefined;

export type TrackGetSimilarParams = Pick<PaginationQueryParams, 'limit'> & {
    track: string;
    artist: string;
    autocorrect?: '0' | '1';
};

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

export type TrackGetTagsParams = {
    track: string;
    artist: string;
    autocorrect?: '0' | '1';
    user: string;
};
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

export type TrackGetTopTagsParams = {
    track: string;
    artist: string;
    autocorrect?: '0' | '1';
};

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

export type TrackSearchParams = PaginationQueryParams & {
    track: string;
    artist?: string;
};

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

export type Track = {
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
};
