import { fetcher } from './http';

const mockResponse = {
  firstName: 'Michel',
  lastName: 'Platini'
};

describe('http', () => {
  describe('fetcher', () => {
    it('should return response', async () => {
      global.fetch = vi.fn(() =>
        Promise.resolve(new Response(JSON.stringify(mockResponse), { status: 200 }))
      );

      const userFetch = fetcher('/user', { method: 'GET' });

      await expect(userFetch).resolves.toStrictEqual(mockResponse);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith('/user', { method: 'GET' });
    });

    it('should return error', async () => {
      global.fetch = vi.fn(() => Promise.resolve(new Response('Server error', { status: 500 })));

      const userFetch = fetcher('/user', { method: 'GET' });

      await expect(userFetch).rejects.toThrowError(
        'Status code 500: an error occured while fetching data'
      );
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith('/user', { method: 'GET' });
    });
  });
});
