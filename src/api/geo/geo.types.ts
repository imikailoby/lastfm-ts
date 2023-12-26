import type { PaginationQueryParams } from '../../common/apiClient.types';
import type { Artist } from '../artist/artist.types';
import type { AttrPagination, Image } from '../common.types';
import type { Track } from '../track/track.types';

export type GeoGetTopArtistsParams = PaginationQueryParams & {
    country: string;
};

export type GeoGetTopArtistsResponse = {
    topartists: {
        '@attr': AttrPagination & {
            country: string;
        };
        artist: (Pick<Artist, 'image' | 'mbid' | 'name' | 'url'> & {
            listeners: string;
        })[];
    };
};

export type GeoGetTopTracksParams = PaginationQueryParams & {
    country: string;
};

export type GeoGetTopTracksResponse = {
    tracks: {
        '@attr': AttrPagination & {
            country: string;
        };
        track: (Pick<Track, 'artist' | 'duration' | 'listeners' | 'mbid' | 'name' | 'url'> & {
            '@attr': {
                rank: string;
            };
            image: Image[];
        })[];
    };
};
