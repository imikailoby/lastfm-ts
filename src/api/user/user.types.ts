import { PaginationQueryParams } from '../../common/apiClient.types';
import { AttrPagination, Image, Registered, UtcDate } from '../common.types';
import { Track } from '../track/track.types';

export enum UserApiMethods {
    GET_FIRENDS = 'user.getFriends',
    GET_INFO = 'user.getInfo',
    GET_LOVED_TRACKS = 'user.getLovedTracks',
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

export type UserFriend = Omit<User, 'age' | 'album_count' | 'artist_count' | 'gender' | 'track_count'>;

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

export type UserLovedTrack = Pick<Track, 'artist' | 'name' | 'streamable' | 'url'> & {
    mbid: string;
    date: UtcDate;
    image: Image[];
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
