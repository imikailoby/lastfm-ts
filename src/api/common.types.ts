export type Image = {
    size: 'small' | 'medium' | 'large' | 'extralarge' | 'mega' | '';
    '#text': string;
};

export interface Registered {
    unixtime: string;
    '#text': number | string;
}

export interface UtcDate {
    uts: string;
    '#text': number | string;
}

export interface AttrPagination {
    page: string;
    perPage: string;
    total: string;
    totalPages: string;
}

export type TaggingType = 'artist' | 'album' | 'track';

export type Period = 'overall' | '7day' | '1month' | '3month' | '6month' | '12month';

export interface Wiki {
    content: string;
    published: string;
    summary: string;
}

export type FlagString = '0' | '1';

export type OptionalUserPlayCount = 'userplaycount' | undefined;

export type OpenSearch = {
    'opensearch:Query': {
        '#text': string;
        role: string;
        searchTerms: string;
        startPage: string;
    };
    'opensearch:itemsPerPage': string;
    'opensearch:startIndex': string;
    'opensearch:totalResults': string;
};
