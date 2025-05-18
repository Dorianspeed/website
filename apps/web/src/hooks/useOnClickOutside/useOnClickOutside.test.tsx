import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRef } from 'react';

import useOnClickOutside from './useOnClickOutside';

const mockHandler = vi.fn();

const TestComponent = () => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, mockHandler);

  return (
    <div data-testid='outside'>
      <div data-testid='inside' ref={ref} />
    </div>
  );
};

describe('useOnClickOutside', () => {
  it('should call the handler when clicking outside the element', async () => {
    render(<TestComponent />);

    await userEvent.click(screen.getByTestId('outside'));

    expect(mockHandler).toHaveBeenCalledOnce();
  });

  it('should not call the handler when clicking inside the element', async () => {
    render(<TestComponent />);

    await userEvent.click(screen.getByTestId('inside'));

    expect(mockHandler).not.toHaveBeenCalled();
  });

  it('should call the handler when touching outside the element', () => {
    render(<TestComponent />);

    fireEvent.touchStart(screen.getByTestId('outside'));

    expect(mockHandler).toHaveBeenCalledOnce();
  });

  it('should not call the handler when touching inside the element', () => {
    render(<TestComponent />);

    fireEvent.touchStart(screen.getByTestId('inside'));

    expect(mockHandler).not.toHaveBeenCalled();
  });
});
