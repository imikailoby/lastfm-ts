import { ApiClient } from '../../common/apiClient';
import { TagApi } from './tag';

jest.mock('../../common/apiClient');

const mockedApiKey = 'test';
const mockedTag = 'rock';

describe('TagApi', () => {
    let tagApi: TagApi;
    let mockedGet: jest.Mock;

    beforeEach(() => {
        mockedGet = jest.fn();
        ApiClient.prototype.get = mockedGet;
        tagApi = new TagApi(mockedApiKey);
    });

    it('creates class instance', () => {
        expect(tagApi).toBeInstanceOf(TagApi);
    });

    it('getInfo()', async () => {
        await tagApi.getInfo({ tag: mockedTag });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: 'tag.getInfo',
            tag: mockedTag,
        });

        await tagApi.getInfo({ tag: mockedTag, lang: 'es' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: 'tag.getInfo',
            tag: mockedTag,
            lang: 'es',
        });
    });
});
