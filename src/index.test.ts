import { UserApi } from './api/user/user';
import { LastFm } from './index';

const mockedApiKey = 'test'

describe('LastFm', () => {
    it('creates class instance', () => {
        const lastFm = new LastFm(mockedApiKey);
        expect(lastFm).toBeInstanceOf(LastFm);
    });

    it('has user methods', () => {
        const lastFm = new LastFm(mockedApiKey);
        expect(lastFm.user).toBeInstanceOf(UserApi);
    })
});
