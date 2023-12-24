import type { Image } from '../common.types';

export type Album = {
    artist: string;
    image: Image[];
    listeners: string;
    mbid: string;
    name: string;
    playcount: string;
    tags: unknown[];
    tracks: unknown[];
    url: string;
    wiki: unknown;
};
