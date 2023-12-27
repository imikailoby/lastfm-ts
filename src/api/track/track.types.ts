import type { Album } from '../album/album.types';
import type { Artist } from '../artist/artist.types';
import type { Wiki } from '../common.types';
import type { Tag } from '../tag/tag.types';

export type Track = {
    album: Pick<Album, 'artist' | 'image' | 'mbid' | 'url'> & {
        '@attr': {
            position: number;
        };
        title: string;
    };
    artist: Pick<Artist, 'mbid' | 'name' | 'url'>;
    duration: string | number | null;
    listeners: string;
    mbid: string;
    name: string;
    playcount: string;
    toptags: {
        tag: (Pick<Tag, 'name'> & {
            url: string;
        })[];
    };
    url: string;
    wiki: Wiki;
};
