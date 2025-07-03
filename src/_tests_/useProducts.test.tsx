import { renderHook, act } from '@testing-library/react';
import { useProducts } from '../hooks/useProducts';

jest.useFakeTimers();

it('should load products from mock data', async () => {
  const { result } = renderHook(() => useProducts());

  expect(result.current.loading).toBe(true);

  act(() => {
    jest.advanceTimersByTime(500);
  });

  expect(result.current.products.length).toBeGreaterThan(0);
  expect(result.current.loading).toBe(false);
});