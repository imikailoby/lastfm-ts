import { Image, Registered } from '../common.types';

export enum UserApiMethods {
    GET_INFO = 'user.getInfo',
}

export type UserGetInfoParams = Readonly<{
    user?: string;
}>;

export type UserGetInfoResponse = Readonly<{
    user: User;
}>;

export type User = Readonly<{
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
}>;

export enum SubscriberStatus {
    INACTIVE = '0',
    ACTIVE = '1',
}

export enum UserType {
    USER = 'user',
    SUBSCRIBER = 'subscriber',
    ALUM = 'alum',
    STAFF = 'staff'
}
