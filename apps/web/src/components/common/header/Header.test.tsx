import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Header from './Header';

vi.mock('next/navigation', async () => ({
  ...(await vi.importActual('next/navigation')),
  usePathname: () => '/home'
}));

describe('Header', () => {
  it('should render component', () => {
    render(<Header />);

    expect(screen.getByTestId('smile-icon')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Main menu' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Menu' })).toBeInTheDocument();
    expect(screen.getByTestId('burger-icon')).toBeInTheDocument();
    expect(screen.getByRole('menubar', { name: 'Main menu' })).toBeInTheDocument();
    expect(screen.getAllByRole('none')).toHaveLength(5);
    expect(screen.getAllByRole('menuitem')).toHaveLength(5);
    expect(screen.getByRole('menuitem', { name: 'Accueil' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Accueil' })).toHaveAttribute(
      'aria-current',
      'page'
    );
    expect(screen.getByRole('menuitem', { name: 'Mon CV' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Mes missions' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Mes projets' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Contact' })).toBeInTheDocument();
  });

  it('should render different icon when clicking on burger button', async () => {
    render(<Header />);

    expect(screen.getByTestId('burger-icon')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Menu' }));

    expect(screen.getByTestId('cross-icon')).toBeInTheDocument();
  });
});
