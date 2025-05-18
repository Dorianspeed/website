import * as navigation from 'next/navigation';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MenuItem, { type MenuItemProps } from './MenuItem';

vi.mock('next/navigation', async () => ({
  ...(await vi.importActual('next/navigation')),
  usePathname: () => '/'
}));

const onNavigateMock = vi.fn();

const menuItemProps = {
  label: 'Accueil',
  onNavigate: onNavigateMock,
  position: 1,
  url: '/home'
} satisfies MenuItemProps;

describe('MenuItem', () => {
  it('should render component', () => {
    render(<MenuItem {...menuItemProps} />);

    expect(screen.getByRole('none')).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Accueil' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Accueil' })).not.toHaveAttribute(
      'aria-current',
      'page'
    );
  });

  it('should render aria-current attribute when item is current page', () => {
    vi.spyOn(navigation, 'usePathname').mockReturnValue('/home');

    render(<MenuItem {...menuItemProps} />);

    expect(screen.getByRole('none')).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Accueil' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Accueil' })).toHaveAttribute(
      'aria-current',
      'page'
    );
  });

  it('should trigger onNavigate when item is clicked', async () => {
    render(<MenuItem {...menuItemProps} />);

    await userEvent.click(screen.getByRole('menuitem', { name: 'Accueil' }));

    expect(onNavigateMock).toHaveBeenCalledOnce();
  });
});
