export type Image = Readonly<{
    size: ImageSize;
    '#text': string;
}>;

export enum ImageSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    EXTRA_LARGE = 'extralarge',
}

export type Registered = Readonly<{
    unixtime: string;
    '#text': number;
}>;

export type AttrPagination = Readonly<{
    page: string;
    perPage: string;
    total: string;
    totalPages: string;
}>;
