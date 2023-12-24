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
    '#text': number;
};

export type AttrPagination = {
    page: string;
    perPage: string;
    total: string;
    totalPages: string;
};
