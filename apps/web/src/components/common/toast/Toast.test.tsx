import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { type ToastContentProps, cssTransition } from 'react-toastify';

import Toast from './Toast';

const mockCloseToast = vi.fn();

const defaultToastProps = {
  closeToast: mockCloseToast,
  data: {},
  isPaused: false,
  toastProps: {
    ariaLabel: 'I am a toast',
    closeToast: vi.fn(),
    collapseAll: vi.fn(),
    deleteToast: vi.fn(),
    draggablePercent: 80,
    isIn: false,
    key: 'key',
    position: 'bottom-right',
    theme: 'light',
    toastId: 'toastId',
    transition: cssTransition({ enter: '', exit: '' }),
    type: 'default'
  }
} satisfies ToastContentProps;

describe('Toast', () => {
  it('should render component', () => {
    render(<Toast {...defaultToastProps} />);

    expect(screen.getByRole('button', { name: 'Fermer' })).toBeInTheDocument();
    expect(screen.getByRole('paragraph')).toHaveTextContent('I am a toast');
  });

  it('should close toast on close button click', async () => {
    render(<Toast {...defaultToastProps} />);

    await userEvent.click(screen.getByRole('button', { name: 'Fermer' }));

    expect(mockCloseToast).toHaveBeenCalledOnce();
  });
});
