import { GeoApi } from '../api/geo/geo';
import { LibraryApi } from '../api/library/library';
import { UserApi } from '../api/user/user';
import { ChartApi } from '../api/chart/chart';
import { LastFm } from './lastfm';

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

    it('it chart methods', () => {
        const lastFm = new LastFm(mockedApiKey);
        expect(lastFm.chart).toBeInstanceOf(ChartApi);
    });
});
