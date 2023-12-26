import type { Wiki } from '../common.types';

export type TagGetInfoParams = {
    tag: string;
    lang?: string;
};

export type TagGetInfoResponse = {
    tag: Tag;
};

export type Tag = {
    name: string;
    reach: number | string;
    total: number;
    wiki: Pick<Wiki, 'content' | 'summary'>;
};
