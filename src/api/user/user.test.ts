import { ApiClient } from '../../common/apiClient';
import { UserApi } from './user';
import { UserApiMethods } from './user.types';

jest.mock('../../common/apiClient')

const mockedApiKey = 'test';
const mockedUserName = 'someName';

describe('UserApi', () => {
    let userApi: UserApi;
    let mockedGet: jest.Mock;

    beforeEach(() => {
        mockedGet = jest.fn();
        ApiClient.prototype.get = mockedGet;
        userApi = new UserApi(mockedApiKey);
    })

    it('creates class instance', () => {
        expect(userApi).toBeInstanceOf(UserApi);
    });

    it('getInfo()', async () => {
        await userApi.getInfo({ user: mockedUserName });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: UserApiMethods.GET_INFO,
            user: mockedUserName
        });

        await userApi.getInfo({});
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: UserApiMethods.GET_INFO,
        });
    })
});
