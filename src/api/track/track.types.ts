import type { Artist } from '../artist/artist.types';

export type Track = {
    album: unknown;
    artist: TrackArtist;
    duration: string;
    listeners: string;
    mbid: string;
    name: string;
    playcount: string;
    toptags: unknown[];
    url: string;
    wiki: unknown;
};

export type TrackArtist = Pick<Artist, 'mbid' | 'name' | 'url'>;
