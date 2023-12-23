import { LastFmApi } from './lastFmApi';

describe('LastFmApi', () => {
    it('creates class instance', () => {
        const lastFmApi = new LastFmApi('test');
        expect(lastFmApi).toBeInstanceOf(LastFmApi);
    });
});
