import { fireEvent, renderHook } from '@testing-library/react';

import useElementPosition from './useElementPosition';

const mockToJSON = vi.fn();

const MOCK_RECT = {
  bottom: 100,
  height: 0,
  left: 0,
  right: 0,
  toJSON: mockToJSON,
  top: 0,
  width: 0,
  x: 0,
  y: 0
} satisfies DOMRect;

describe('useElementPosition', () => {
  it('should return default element position when element is not defined yet', () => {
    const { result } = renderHook(() =>
      useElementPosition({
        elementRef: { current: null },
        rectPosition: 'bottom'
      })
    );

    expect(result.current).toStrictEqual(0);
  });

  it('should return default element position when element is not defined yet and scroll event occurs', async () => {
    const { result } = renderHook(() =>
      useElementPosition({
        elementRef: { current: null },
        rectPosition: 'bottom'
      })
    );

    await fireEvent.scroll(window, { scroll: 100 });

    expect(result.current).toStrictEqual(0);
  });

  it('should return default element position when no scroll event occurs', () => {
    const { result } = renderHook(() =>
      useElementPosition({
        elementRef: {
          current: {
            getBoundingClientRect: vi.fn(() => MOCK_RECT)
          } as unknown as HTMLElement
        },
        rectPosition: 'bottom'
      })
    );

    expect(result.current).toStrictEqual(0);
  });

  it('should return default element position when scroll event occurs but position is out of range', async () => {
    const { result } = renderHook(() =>
      useElementPosition({
        elementRef: {
          current: {
            getBoundingClientRect: vi.fn(() => ({ ...MOCK_RECT, bottom: 500 }))
          } as unknown as HTMLElement
        },
        rectPosition: 'bottom'
      })
    );

    await fireEvent.scroll(window, { scroll: 100 });

    expect(result.current).toStrictEqual(0);
  });

  it('should return current element position when scroll event occurs and position is in range', async () => {
    const { result } = renderHook(() =>
      useElementPosition({
        elementRef: {
          current: {
            getBoundingClientRect: vi.fn(() => MOCK_RECT)
          } as unknown as HTMLElement
        },
        rectPosition: 'bottom'
      })
    );

    await fireEvent.scroll(window, { scroll: 100 });

    expect(result.current).toStrictEqual(100);
  });
});
