import { LastFm } from './index';

describe('LastFm', () => {
    it('creates class instance', () => {
        const lastFm = new LastFm();
        expect(lastFm).toBeInstanceOf(LastFm);
    });
});
