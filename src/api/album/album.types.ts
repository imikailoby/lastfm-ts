import type { Image, Wiki } from '../common.types';
import type { Tag } from '../tag/tag.types';
import type { Track } from '../track/track.types';

export type Album = {
    artist: string;
    image: Image[];
    listeners: string;
    mbid: string;
    name: string;
    playcount: string;
    tags: (Pick<Tag, 'name'> & {
        url: string;
    })[];
    tracks: (Pick<Track, 'artist' | 'duration' | 'name' | 'url'> & {
        '@attr': {
            rank: number;
        };
    })[];
    url: string;
    wiki: Wiki;
};
