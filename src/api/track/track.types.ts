import type { Artist } from '../artist/artist.types';
import type { Streamable } from '../common.types';

export type Track = {
    artist: Omit<Artist, 'mbid' | 'name' | 'url'>;
    name: string;
    streamable: Streamable;
    url: string;
};
