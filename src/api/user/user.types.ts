import type { PaginationQueryParams } from '../../common/apiClient.types';
import type { Album } from '../album/album.types';
import type { Artist } from '../artist/artist.types';
import type { AttrPagination, Image, Period, Registered, TaggingType, UtcDate } from '../common.types';
import type { Tag } from '../tag/tag.types';
import type { Track } from '../track/track.types';

export type UserGetFriendsParams = PaginationQueryParams & {
    user: string;
};

export type UserGetFriendsResponse = {
    friends: {
        '@attr': AttrPagination & {
            user: string;
        };
        user: Pick<
            User,
            | 'bootstrap'
            | 'country'
            | 'image'
            | 'name'
            | 'playcount'
            | 'playlists'
            | 'realname'
            | 'registered'
            | 'subscriber'
            | 'type'
            | 'url'
        >[];
    };
};

export type UserGetInfoParams = {
    user: string;
};

export type UserGetInfoResponse = {
    user: User;
};

export type UserGetLovedTracksParams = PaginationQueryParams & {
    user: string;
};

export type UserGetLovedTracksResponse = {
    lovedtracks: {
        '@attr': AttrPagination & {
            user: string;
        };
        track: (Pick<Track, 'artist' | 'name' | 'mbid' | 'url'> & {
            date: UtcDate;
            image: Image[];
        })[];
    };
};

export type UserGetPersonalTagsParams = PaginationQueryParams & {
    user: string;
    tag: string;
    taggingtype: TaggingType;
};

interface BaseUserGetPersonalTagsResponse {
    '@attr': AttrPagination & {
        user: string;
        tag: string;
    };
}

interface UserGetPersonalTagsAlbumsResponse extends BaseUserGetPersonalTagsResponse {
    albums: {
        album: (Pick<Album, 'image' | 'mbid' | 'name' | 'url'> & {
            artist: Pick<Artist, 'mbid' | 'name' | 'url'>;
        })[];
    };
}

interface UserGetPersonalTagsArtistsResponse extends BaseUserGetPersonalTagsResponse {
    artists: {
        artist: Pick<Artist, 'image' | 'mbid' | 'name' | 'url'>[];
    };
}

interface UserGetPersonalTagsTracksResponse extends BaseUserGetPersonalTagsResponse {
    tracks: {
        track: (Pick<Track, 'artist' | 'duration' | 'mbid' | 'name' | 'url'> & {
            image: Image[];
        })[];
    };
}

export type UserGetPersonalTagsResponse<T = TaggingType> = {
    taggings: T extends 'album'
        ? UserGetPersonalTagsAlbumsResponse
        : T extends 'artist'
          ? UserGetPersonalTagsArtistsResponse
          : T extends 'track'
            ? UserGetPersonalTagsTracksResponse
            : BaseUserGetPersonalTagsResponse;
};

export type UserGetRecentTracksParams = PaginationQueryParams & {
    user: string;
    extended?: RecentTracksType;
    from?: string;
    to?: string;
};

export enum RecentTracksType {
    REGULAR = '0',
    EXTENDED = '1',
}

interface BaseUserGetRecentTracksResponse {
    '@attr': AttrPagination & {
        user: string;
    };
}

interface UserGetRecentTracksResponseRegular extends BaseUserGetRecentTracksResponse {
    track: (Pick<Track, 'mbid' | 'name' | 'url'> & {
        album: Pick<Album, 'mbid'> & {
            '#text': string;
        };
        artist: Pick<Artist, 'mbid'> & {
            '#text': string;
        };
        date: UtcDate;
        image: Image[];
    })[];
}

interface UserGetRecentTracksResponseExtended extends BaseUserGetRecentTracksResponse {
    track: (Pick<Track, 'mbid' | 'name' | 'url'> & {
        album: Pick<Album, 'mbid'> & {
            '#text': string;
        };
        artist: Pick<Artist, 'image' | 'mbid' | 'name' | 'url'>;
        date: UtcDate;
        image: Image[];
        loved: string;
    })[];
}

export type UserGetRecentTracksResponse<T = RecentTracksType> = {
    recenttracks: T extends RecentTracksType.EXTENDED
        ? UserGetRecentTracksResponseExtended
        : UserGetRecentTracksResponseRegular;
};

export type UserGetTopAlbumsParams = PaginationQueryParams & {
    user: string;
    period?: Period;
};

export interface UserGetTopAlbumsResponse {
    topalbums: {
        '@attr': AttrPagination & {
            user: string;
        };
        album: (Pick<Album, 'image' | 'mbid' | 'name' | 'playcount' | 'url'> & {
            '@attr': {
                rank: string;
            };
            artist: Pick<Artist, 'mbid' | 'name' | 'url'>;
        })[];
    };
}

export type UserGetTopArtistsParams = PaginationQueryParams & {
    user: string;
    period?: Period;
};

export interface UserGetTopArtistsResponse {
    topartists: {
        '@attr': AttrPagination & {
            user: string;
        };
        artist: (Pick<Artist, 'image' | 'mbid' | 'name' | 'url'> & {
            '@attr': {
                rank: string;
            };
            playcount: string;
        })[];
    };
}

export type UserGetTopTagsParams = Pick<PaginationQueryParams, 'limit'> & {
    user: string;
};

export interface UserGetTopTagsResponse {
    toptags: {
        '@attr': {
            user: string;
        };
        tag: (Pick<Tag, 'name'> & {
            count: string;
            url: string;
        })[];
    };
}

export type UserGetTopTracksParams = PaginationQueryParams & {
    user: string;
    period?: Period;
};

export interface UserGetTopTracksResponse {
    toptracks: {
        '@attr': AttrPagination & {
            user: string;
        };
        track: (Pick<Track, 'artist' | 'duration' | 'mbid' | 'name' | 'playcount' | 'url'> & {
            '@attr': {
                rank: string;
            };
            image: Image[];
        })[];
    };
}

export type UserGetWeeklyAlbumChartParams = {
    user: string;
    from?: string;
    to?: string;
};

export interface UserGetWeeklyAlbumChartResponse {
    weeklyalbumchart: {
        '@attr': {
            from: string;
            to: string;
            user: string;
        };
        album: (Pick<Album, 'mbid' | 'name' | 'playcount' | 'url'> & {
            '@attr': {
                rank: string;
            };
            artist: Pick<Artist, 'mbid'> & {
                '#text': string;
            };
        })[];
    };
}

export type UserGetWeeklyArtistChartParams = {
    user: string;
    from?: string;
    to?: string;
};

export interface UserGetWeeklyArtistChartResponse {
    weeklyartistchart: {
        '@attr': {
            from: string;
            to: string;
            user: string;
        };
        artist: (Pick<Artist, 'mbid' | 'name' | 'url'> & {
            '@attr': {
                rank: string;
            };
            playcount: string;
        })[];
    };
}

export type UserGetWeeklyArtistTrackParams = {
    user: string;
    from?: string;
    to?: string;
};

export interface UserGetWeeklyArtistTrackResponse {
    weeklytrackchart: {
        '@attr': {
            from: string;
            to: string;
            user: string;
        };
        artist: (Pick<Track, 'mbid' | 'name' | 'playcount' | 'url'> & {
            '@attr': {
                rank: string;
            };
            artist: Pick<Artist, 'mbid'> & {
                '#text': string;
            };
            image: Image[];
        })[];
    };
}

export type User = {
    age: string;
    album_count: string;
    artist_count: string;
    bootstrap: string;
    country: string;
    gender: string;
    image: Image[];
    name: string;
    playcount: string;
    playlists: string;
    realname: string;
    registered: Registered;
    subscriber: '0' | '1';
    track_count: string;
    type: 'user' | 'subscriber' | 'alum' | 'staff';
    url: string;
};
