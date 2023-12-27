import { GeoApi } from '../api/geo/geo';
import { LibraryApi } from '../api/library/library';
import { UserApi } from '../api/user/user';
import { ChartApi } from '../api/chart/chart';
import { LastFm } from './lastfm';
import { TagApi } from '../api/tag/tag';
import { AlbumApi } from '../api/album/album';
import { ArtistApi } from '../api/artist/artist';
import { TrackApi } from '../api/track/track';

const mockedApiKey = 'test';

describe('LastFm client', () => {
    it('creates class instance', () => {
        const lastFm = new LastFm(mockedApiKey);
        expect(lastFm).toBeInstanceOf(LastFm);
    });

    it('has user methods', () => {
        const lastFm = new LastFm(mockedApiKey);
        expect(lastFm.user).toBeInstanceOf(UserApi);
    });

    it('has library methods', () => {
        const lastFm = new LastFm(mockedApiKey);
        expect(lastFm.library).toBeInstanceOf(LibraryApi);
    });

    it('has geo methods', () => {
        const lastFm = new LastFm(mockedApiKey);
        expect(lastFm.geo).toBeInstanceOf(GeoApi);
    });

    it('has chart methods', () => {
        const lastFm = new LastFm(mockedApiKey);
        expect(lastFm.chart).toBeInstanceOf(ChartApi);
    });

    it('has tag methods', () => {
        const lastFm = new LastFm(mockedApiKey);
        expect(lastFm.tag).toBeInstanceOf(TagApi);
    });

    it('has album methods', () => {
        const lastFm = new LastFm(mockedApiKey);
        expect(lastFm.album).toBeInstanceOf(AlbumApi);
    });

    it('has artist methods', () => {
        const lastFm = new LastFm(mockedApiKey);
        expect(lastFm.artist).toBeInstanceOf(ArtistApi);
    });

    it('has track methods', () => {
        const lastFm = new LastFm(mockedApiKey);
        expect(lastFm.track).toBeInstanceOf(TrackApi);
    });
});
