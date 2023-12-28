import type { PaginationQueryParams } from '../../common/apiClient.types';
import type { Album } from '../album/album.types';
import type { Artist } from '../artist/artist.types';
import type { AttrPagination, FlagString, Image, Period, Registered, TaggingType, UtcDate } from '../common.types';
import type { Tag } from '../tag/tag.types';
import type { Track } from '../track/track.types';

export interface UserGetFriendsParams extends PaginationQueryParams {
    user: string;
}

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

export interface UserGetInfoParams {
    user: string;
}

export type UserGetInfoResponse = {
    user: User;
};

export interface UserGetLovedTracksParams extends PaginationQueryParams {
    user: string;
}

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

export interface UserGetPersonalTagsParams extends PaginationQueryParams {
    user: string;
    tag: string;
    taggingtype: TaggingType;
}

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

export type UserGetPersonalTagsResponse<T extends TaggingType> = {
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
    extended?: FlagString;
    from?: string;
    to?: string;
};

export type TrackDetailLevel = 'extended' | undefined;

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

export type UserGetRecentTracksResponse<T extends TrackDetailLevel = undefined> = {
    recenttracks: T extends 'extended' ? UserGetRecentTracksResponseExtended : UserGetRecentTracksResponseRegular;
};

export interface UserGetTopAlbumsParams extends PaginationQueryParams {
    user: string;
    period?: Period;
}

export type UserGetTopAlbumsResponse = {
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
};

export interface UserGetTopArtistsParams extends PaginationQueryParams {
    user: string;
    period?: Period;
}

export type UserGetTopArtistsResponse = {
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
};

export interface UserGetTopTagsParams extends Pick<PaginationQueryParams, 'limit'> {
    user: string;
}

export type UserGetTopTagsResponse = {
    toptags: {
        '@attr': {
            user: string;
        };
        tag: (Pick<Tag, 'name'> & {
            count: string;
            url: string;
        })[];
    };
};

export interface UserGetTopTracksParams extends PaginationQueryParams {
    user: string;
    period?: Period;
}

export type UserGetTopTracksResponse = {
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
};

export interface UserGetWeeklyAlbumChartParams {
    user: string;
    from?: string;
    to?: string;
}

export type UserGetWeeklyAlbumChartResponse = {
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
};

export interface UserGetWeeklyArtistChartParams {
    user: string;
    from?: string;
    to?: string;
}

export type UserGetWeeklyArtistChartResponse = {
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
};

export interface UserGetWeeklyArtistTrackParams {
    user: string;
    from?: string;
    to?: string;
}

export type UserGetWeeklyArtistTrackResponse = {
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
};

export interface User {
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
    subscriber: FlagString;
    track_count: string;
    type: 'user' | 'subscriber' | 'alum' | 'staff';
    url: string;
}
