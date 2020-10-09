import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useAsyncHook from '../components/useAsyncHook';

const useAsyncHookMock = [{"id":4,"brand":"sjlzxeo","description":"pnyn rlxbabba","image":"www.lider.cl/catalogo/images/computerIcon.svg","price":890348,"discount":50.0,"finalPrice":445174}];

const mockFetch = (mockData) => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    })
  );
};

const mockFetchError = (error) => {
  global.fetch = jest.fn().mockImplementation(() => Promise.reject(error));
};

const mockFetchCleanUp = () => {
  global.fetch.mockClear();
  delete global.fetch;
};

describe('useApi Hook', () => {
  it('initial and success state', async () => {
    mockFetch(useAsyncHookMock);
    const { result, waitForNextUpdate } = renderHook(() =>
      useApiFetch('lorem')
    );
    expect(result.current).toMatchObject({
      data: [],
      error: '',
      state: 'LOADING',
    });

    await waitForNextUpdate();

    expect(result.current).toMatchObject({
      data: useApiFetchMock,
      error: '',
      state: 'SUCCESS',
    });
    mockFetchCleanUp();
  });

/*   it('error state', async () => {
    mockFetchError('Network Error');

    const { result, waitForNextUpdate } = renderHook(() =>
      useApiFetch('lorem')
    );
    await waitForNextUpdate();
    mockFetchCleanUp();

    expect(result.current).toMatchObject({
      data: [],
      error: 'Fetch failed',
      state: 'ERROR',
    });
  }); */
});