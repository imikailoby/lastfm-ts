import type { PaginationQueryParams } from '../../common/apiClient.types';
import type { Album } from '../album/album.types';
import type { AttrPagination, FlagString, Image, OpenSearch, OptionalUserPlayCount, Wiki } from '../common.types';
import type { Tag } from '../tag/tag.types';
import type { Track } from '../track/track.types';

export interface ArtistGetCorrectionParams {
    artist: string;
}

export type ArtistGetCorrectionResponse = {
    corrections: {
        correction: {
            '@attr': {
                index: string;
            };
            artist: Pick<Artist, 'name' | 'url'>;
        };
    };
};

export interface ArtistGetInfoParams {
    artist: string;
    autocorrect?: FlagString;
    username?: string;
    lang?: string;
}

interface ArtistGetInfoResponseRegular {
    artist: Artist;
}

interface ArtistGetInfoResponseWithUserPlayCount {
    artist: Omit<Artist, 'stats'> & {
        stats: Pick<Artist['stats'], 'listeners' | 'playcount'> & {
            userplaycount: string;
        };
    };
}

export type ArtistGetInfoResponse<T extends OptionalUserPlayCount = undefined> = T extends 'userplaycount'
    ? ArtistGetInfoResponseWithUserPlayCount
    : ArtistGetInfoResponseRegular;

export interface ArtistGetSimilarParams {
    artist: string;
    autocorrect?: FlagString;
}

export type ArtistGetSimilarResponse = {
    similarartists: {
        '@attr': {
            artist: string;
        };
        artist: (Pick<Artist, 'image' | 'name' | 'url'> & {
            match: string;
        })[];
    };
};

export interface ArtistGetTagsParams {
    artist: string;
    user: string;
    autocorrect?: FlagString;
}

export type ArtistGetTagsResponse = {
    tags: {
        '#text'?: string;
        '@attr': {
            artist: string;
        };
        tag?: (Pick<Tag, 'name'> & {
            url: string;
        })[];
    };
};

export interface ArtistGetTopAlbumsParams extends PaginationQueryParams {
    artist: string;
    autocorrect?: FlagString;
}

export type ArtistGetTopAlbumsResponse = {
    topalbums: {
        '@attr': AttrPagination & {
            artist: string;
        };
        album: (Pick<Album, 'image' | 'mbid' | 'name' | 'playcount' | 'url'> & {
            artist: Pick<Artist, 'mbid' | 'name' | 'url'>;
        })[];
    };
};

export interface ArtistGetTopTagsParams {
    artist: string;
    autocorrect?: FlagString;
}

export type ArtistGetTopTagsResponse = {
    toptags: {
        '@attr': {
            artist: string;
        };
        tag: (Pick<Tag, 'name'> & {
            count: number;
            url: string;
        })[];
    };
};

export interface ArtistGetTopTracksParams extends PaginationQueryParams {
    artist: string;
    autocorrect?: FlagString;
}

export type ArtistGetTopTracksResponse = {
    toptracks: {
        '@attr': AttrPagination & {
            artist: string;
        };
        track: (Pick<Track, 'artist' | 'listeners' | 'mbid' | 'name' | 'playcount' | 'url'> & {
            '@attr': {
                rank: string;
            };
            image: Image[];
        })[];
    };
};

export interface ArtistSearchParams extends PaginationQueryParams {
    artist: string;
}

export type ArtistSearchResponse = {
    results: OpenSearch & {
        '@attr': {
            for: string;
        };
        artistmatches: {
            artist: (Pick<Artist, 'image' | 'mbid' | 'name' | 'url'> & {
                listeners: string;
            })[];
        };
    };
};

export interface Artist {
    bio: Wiki & {
        links: {
            link: {
                '#text': string;
                href: string;
                rel: string;
            };
        };
    };
    image: Image[];
    mbid?: string;
    name: string;
    ontour: FlagString;
    similar: {
        artist: Pick<Artist, 'image' | 'name' | 'url'>[];
    };
    stats: {
        listeners: string;
        playcount: string;
    };
    tags: {
        tag: (Pick<Tag, 'name'> & {
            url: string;
        })[];
    };
    url: string;
}
