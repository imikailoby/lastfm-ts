import type { PaginationQueryParams } from '../../common/apiClient.types';
import type { Album } from '../album/album.types';
import type { AttrPagination, Image, OpenSearch, Wiki } from '../common.types';
import type { Tag } from '../tag/tag.types';
import type { Track } from '../track/track.types';

export type ArtistGetCorrectionParams = {
    artist: string;
};
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

export type ArtistGetInfoParams = {
    artist: string;
    autocorrect?: '0' | '1';
    username?: string;
    lang?: string;
};

type ArtistGetInfoResponseRegular = {
    artist: Artist;
};

type ArtistGetInfoResponseWithUserPlayCount = {
    artist: Omit<Artist, 'stats'> & {
        stats: Pick<Artist['stats'], 'listeners' | 'playcount'> & {
            userplaycount: string;
        };
    };
};

export type ArtistGetInfoResponse<T extends ArtistInfoType> = T extends 'userplaycount'
    ? ArtistGetInfoResponseWithUserPlayCount
    : ArtistGetInfoResponseRegular;

export type ArtistInfoType = 'userplaycount' | undefined;

export type ArtistGetSimilarParams = {
    artist: string;
    autocorrect?: '0' | '1';
};
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

export type ArtistGetTagsParams = {
    artist: string;
    user: string;
    autocorrect?: '0' | '1';
};
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

export type ArtistGetTopAlbumsParams = PaginationQueryParams & {
    artist: string;
    autocorrect?: '0' | '1';
};
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

export type ArtistGetTopTagsParams = {
    artist: string;
    autocorrect?: '0' | '1';
};
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

export type ArtistGetTopTracksParams = PaginationQueryParams & {
    artist: string;
    autocorrect?: '0' | '1';
};
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

export type ArtistSearchParams = PaginationQueryParams & {
    artist: string;
};
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

export type Artist = {
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
    ontour: '0' | '1';
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
};
