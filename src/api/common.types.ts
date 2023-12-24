export type Image = {
    size: ImageSize;
    '#text': string;
};

export enum ImageSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    EXTRA_LARGE = 'extralarge',
}

export type Registered = {
    unixtime: string;
    '#text': number | string;
};

export type UtcDate = {
    uts: string;
    '#text': number;
};

export type Streamable = {
    fulltrack: string;
    '#text': string;
};

export type AttrPagination = {
    page: string;
    perPage: string;
    total: string;
    totalPages: string;
};
