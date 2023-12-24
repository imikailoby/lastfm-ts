import type { Image } from '../common.types';

export type Artist = {
    bio: unknown;
    image: Image[];
    mbid: string;
    name: string;
    ontour: unknown;
    similar: unknown[];
    stats: unknown;
    tags: unknown[];
    url: string;
};
