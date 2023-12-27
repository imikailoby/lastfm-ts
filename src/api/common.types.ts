export type Image = {
    size: 'small' | 'medium' | 'large' | 'extralarge' | 'mega' | '';
    '#text': string;
};

export type Registered = {
    unixtime: string;
    '#text': number | string;
};

export type UtcDate = {
    uts: string;
    '#text': number | string;
};

export type AttrPagination = {
    page: string;
    perPage: string;
    total: string;
    totalPages: string;
};

export type TaggingType = 'artist' | 'album' | 'track';

export type Period = 'overall' | '7day' | '1month' | '3month' | '6month' | '12month';

export type Wiki = {
    content: string;
    published: string;
    summary: string;
};

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
