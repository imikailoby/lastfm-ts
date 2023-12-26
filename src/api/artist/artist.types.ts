import type { Image, Wiki } from '../common.types';
import type { Tag } from '../tag/tag.types';

export type Artist = {
    bio: Wiki & {
        links: {
            link: {
                '#text': string;
                href: string;
                rel: string;
            };
        };
    };
    image: Image[];
    mbid: string;
    name: string;
    ontour: '0' | '1';
    similar: {
        artist: Pick<Artist, 'image' | 'name' | 'url'>[];
    };
    stats: {
        listeners: string;
        playcount: string;
    };
    tags: {
        tag: (Pick<Tag, 'name'> & {
            url: string;
        })[];
    };
    url: string;
};
