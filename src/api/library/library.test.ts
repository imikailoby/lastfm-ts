import { ApiClient } from '../../common/apiClient';
import { LibraryApi } from './library';

jest.mock('../../common/apiClient');

const mockedApiKey = 'test';
const mockedUserName = 'someName';

describe('LibraryApi', () => {
    let libraryApi: LibraryApi;
    let mockedGet: jest.Mock;

    beforeEach(() => {
        mockedGet = jest.fn();
        ApiClient.prototype.get = mockedGet;
        libraryApi = new LibraryApi(mockedApiKey);
    });

    it('creates class instance', () => {
        expect(libraryApi).toBeInstanceOf(LibraryApi);
    });

    it('getArtists()', async () => {
        await libraryApi.getArtists({ user: mockedUserName });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'library.getArtists',
            user: mockedUserName,
        });

        await libraryApi.getArtists({ user: mockedUserName, page: '2' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'library.getArtists',
            user: mockedUserName,
            page: '2',
        });

        await libraryApi.getArtists({ user: mockedUserName, limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: 'library.getArtists',
            user: mockedUserName,
            limit: '10',
        });

        await libraryApi.getArtists({ user: mockedUserName, page: '2', limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(4, {
            api_key: mockedApiKey,
            method: 'library.getArtists',
            user: mockedUserName,
            page: '2',
            limit: '10',
        });
    });
});
