import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { INTERNAL_URLS } from '@/constants/globals';

import LaptopIcon from '@/assets/laptop.svg';

import type { ButtonProps } from './Button';
import Button from './Button';

const buttonLabel = 'I am a button';
const mockOnClick = vi.fn();

const defaultProps = {
  appearance: 'primary',
  className: '',
  icon: LaptopIcon
} satisfies Pick<ButtonProps, 'appearance' | 'className' | 'icon'>;

describe('Button', () => {
  it('should render component and trigger onClick (type button)', async () => {
    render(
      <Button {...defaultProps} onClick={mockOnClick} type='button'>
        {buttonLabel}
      </Button>
    );

    expect(screen.getByTestId('svg-icon')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: buttonLabel })).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: buttonLabel }));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should render component (type link - external)', () => {
    render(
      <Button {...defaultProps} href='/external-link' type='link'>
        {buttonLabel}
      </Button>
    );

    expect(screen.getByTestId('svg-icon')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: buttonLabel })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: buttonLabel })).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link', { name: buttonLabel })).toHaveAttribute(
      'rel',
      'noopener noreferrer'
    );
  });

  it('should render component (type link - internal)', () => {
    render(
      <Button {...defaultProps} href={INTERNAL_URLS.home} type='link'>
        {buttonLabel}
      </Button>
    );

    expect(screen.getByTestId('svg-icon')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: buttonLabel })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: buttonLabel })).not.toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link', { name: buttonLabel })).not.toHaveAttribute(
      'rel',
      'noopener noreferrer'
    );
  });

  it('should render component (type submit)', () => {
    render(
      <Button {...defaultProps} disabled={false} type='submit'>
        {buttonLabel}
      </Button>
    );

    expect(screen.getByTestId('svg-icon')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: buttonLabel })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: buttonLabel })).not.toBeDisabled();
  });

  it('should render ReactElement instead of SVG icon', () => {
    render(
      <Button
        {...defaultProps}
        disabled={false}
        icon={<div data-testid='I am not SVG' />}
        type='submit'
      >
        {buttonLabel}
      </Button>
    );

    expect(screen.queryByTestId('svg-icon')).not.toBeInTheDocument();
    expect(screen.getByTestId('I am not SVG')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: buttonLabel })).toBeInTheDocument();
  });
});
