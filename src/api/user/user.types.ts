import { PaginationQueryParams } from '../../common/apiClient.types';
import { AttrPagination, Image, Registered } from '../common.types';

export enum UserApiMethods {
    GET_FIRENDS = 'user.getFriends',
    GET_INFO = 'user.getInfo',
}

export type UserGetFriendsParams = PaginationQueryParams & {
    user: string;
};

export type UserGetFriendsResponse = {
    friends: {
        '@attr': AttrPagination & {
            user: string;
        };
        user: Omit<User, 'age' | 'album_count' | 'artist_count' | 'gender' | 'track_count'>[];
    };
};

export type UserGetInfoParams = {
    user?: string;
};

export type UserGetInfoResponse = {
    user: User;
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
