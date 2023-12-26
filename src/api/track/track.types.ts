import type { Artist } from '../artist/artist.types';
import type { Wiki } from '../common.types';

export type Track = {
    album: unknown;
    artist: Pick<Artist, 'mbid' | 'name' | 'url'>;
    duration: string;
    listeners: string;
    mbid: string;
    name: string;
    playcount: string;
    toptags: unknown[];
    url: string;
    wiki: Wiki;
};
