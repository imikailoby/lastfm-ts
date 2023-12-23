import { ApiClientMethods } from './apiClient.types';
import { getRequestUrlParams } from './helpers';

describe('helpers', () => {
    it('getRequestUrlParams()', () => {
        const params = getRequestUrlParams({
            method: 'test' as ApiClientMethods,
            api_key: '123',
        });

        expect(params).toBeInstanceOf(URLSearchParams);
        expect(params.get('format')).toBe('json');
        expect(params.get('method')).toBe('test');
        expect(params.get('api_key')).toBe('123');
    });
});
