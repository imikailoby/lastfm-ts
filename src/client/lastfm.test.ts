import { LibraryApi } from '../api/library/library';
import { UserApi } from '../api/user/user';
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
});
