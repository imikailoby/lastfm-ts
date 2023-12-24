export type Image = {
    size: ImageSize;
    '#text': string;
};

export enum ImageSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    EXTRA_LARGE = 'extralarge',
    MEGA = 'mega',
    UNKNOWN = '',
}

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

export enum TaggingType {
    ARTIST = 'artist',
    ALBUM = 'album',
    TRACK = 'track',
}

export enum Period {
    OVERALL = 'overall',
    WEEK = '7day',
    MONTH = '1month',
    THREE_MONTHS = '3month',
    SIX_MONTHS = '6month',
    YEAR = '12month',
}
