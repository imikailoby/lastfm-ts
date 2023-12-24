import { PaginationQueryParams } from '../../common/apiClient.types';
import { Album } from '../album/album.types';
import { Artist } from '../artist/artist.types';
import { AttrPagination, Image, Period, Registered, TaggingType, UtcDate } from '../common.types';
import { Track } from '../track/track.types';

export enum UserApiMethods {
    GET_FIRENDS = 'user.getFriends',
    GET_INFO = 'user.getInfo',
    GET_LOVED_TRACKS = 'user.getLovedTracks',
    GET_PERSONAL_TAGS = 'user.getPersonalTags',
    GET_RECENT_TRACKS = 'user.getRecentTracks',
    GET_TOP_ALBUMS = 'user.getTopAlbums',
}

export type UserGetFriendsParams = PaginationQueryParams & {
    user: string;
};

export type UserGetFriendsResponse = {
    friends: {
        '@attr': AttrPagination & {
            user: string;
        };
        user: UserFriend[];
    };
};

export type UserFriend = Pick<
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
>;

export type UserGetInfoParams = {
    user?: string;
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
        track: UserLovedTrack[];
    };
};

export type UserLovedTrack = Pick<Track, 'artist' | 'name' | 'mbid' | 'url'> & {
    date: UtcDate;
    image: Image[];
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
        album: UserPersonalTagsAlbum[];
    };
}

export type UserPersonalTagsAlbum = Pick<Album, 'image' | 'mbid' | 'name' | 'url'> & {
    artist: Pick<Artist, 'mbid' | 'name' | 'url'>;
};

interface UserGetPersonalTagsArtistsResponse extends BaseUserGetPersonalTagsResponse {
    artists: {
        artist: UserPersonalTagsArtist[];
    };
}

export type UserPersonalTagsArtist = Pick<Artist, 'image' | 'mbid' | 'name' | 'url'>;

interface UserGetPersonalTagsTracksResponse extends BaseUserGetPersonalTagsResponse {
    tracks: {
        track: UserPersonalTagsTrack[];
    };
}

export type UserPersonalTagsTrack = Pick<Track, 'artist' | 'duration' | 'mbid' | 'name' | 'url'> & {
    image: Image[];
};

export type UserGetPersonalTagsResponse<T> = {
    taggings: T extends TaggingType.ALBUM
        ? UserGetPersonalTagsAlbumsResponse
        : T extends TaggingType.ARTIST
          ? UserGetPersonalTagsArtistsResponse
          : T extends TaggingType.TRACK
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
    track: UserRecentTrack[];
}

interface UserGetRecentTracksResponseExtended extends BaseUserGetRecentTracksResponse {
    track: UserRecentTrackExtended[];
}

export type UserGetRecentTracksResponse<T = RecentTracksType.REGULAR> = {
    recenttracks: T extends RecentTracksType.EXTENDED
        ? UserGetRecentTracksResponseExtended
        : UserGetRecentTracksResponseRegular;
};

export type UserRecentTrack = Pick<Track, 'mbid' | 'name' | 'url'> & {
    album: UserRecentTrackAlbum;
    artist: UserRecentTrackArtist;
    date: UtcDate;
    image: Image[];
};

export type UserRecentTrackExtended = Omit<UserRecentTrack, 'artist'> & {
    artist: UserRecentTrackArtistExtended;
    loved: string;
};

export type UserRecentTrackAlbum = Pick<Album, 'mbid'> & {
    '#text': string;
};

export type UserRecentTrackArtist = Pick<Artist, 'mbid'> & {
    '#text': string;
};

export type UserRecentTrackArtistExtended = Pick<Artist, 'image' | 'mbid' | 'name' | 'url'>;

export type UserGetTopAlbumsParams = PaginationQueryParams & {
    user: string;
    period?: Period;
};

export interface UserGetTopAlbumsResponse {
    topalbums: {
        '@attr': AttrPagination & {
            user: string;
        };
        album: UserTopAlbum[];
    };
}

export type UserTopAlbum = Pick<Album, 'image' | 'mbid' | 'name' | 'playcount' | 'url'> & {
    '@attr': {
        rank: string;
    };
    artist: Pick<Artist, 'mbid' | 'name' | 'url'>;
};

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
    subscriber: SubscriberStatus;
    track_count: string;
    type: UserType;
    url: string;
};

export enum SubscriberStatus {
    INACTIVE = '0',
    ACTIVE = '1',
}

export enum UserType {
    USER = 'user',
    SUBSCRIBER = 'subscriber',
    ALUM = 'alum',
    STAFF = 'staff',
}
