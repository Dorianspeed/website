import * as navigation from 'next/navigation';
import SiteMapItem from './SiteMapItem';
import { render, screen } from '@testing-library/react';

import type { NavItemDataProps } from '@/types/globals';

vi.mock('next/navigation', async () => ({
  ...(await vi.importActual('next/navigation')),
  usePathname: () => '/'
}));

const siteMapItemProps: NavItemDataProps = {
  label: 'Accueil',
  position: 1,
  url: '/home'
};

describe('SiteMapItem', () => {
  it('should render component', () => {
    render(<SiteMapItem {...siteMapItemProps} />);

    expect(screen.getByRole('none')).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Accueil' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Accueil' })).not.toHaveAttribute(
      'aria-current',
      'page'
    );
  });

  it('should render aria-current attribute when item is current page', () => {
    vi.spyOn(navigation, 'usePathname').mockReturnValue('/home');

    render(<SiteMapItem {...siteMapItemProps} />);

    expect(screen.getByRole('none')).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Accueil' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Accueil' })).toHaveAttribute(
      'aria-current',
      'page'
    );
  });
});
