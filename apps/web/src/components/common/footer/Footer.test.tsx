import { render, screen } from '@testing-library/react';

import Footer from './Footer';

vi.mock('next/navigation', async () => ({
  ...(await vi.importActual('next/navigation')),
  usePathname: () => '/home'
}));

describe('Footer', () => {
  it('should render component', () => {
    render(<Footer />);

    expect(screen.getByRole('navigation', { name: 'Réseaux sociaux' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Plan du site' })).toBeInTheDocument();
    expect(screen.getByRole('menubar', { name: 'Réseaux sociaux' })).toBeInTheDocument();
    expect(screen.getByRole('menubar', { name: 'Pages' })).toBeInTheDocument();
    expect(screen.getByRole('menubar', { name: 'Légal' })).toBeInTheDocument();
    expect(screen.getAllByRole('none')).toHaveLength(9);
    expect(screen.getAllByRole('menuitem')).toHaveLength(9);
    expect(screen.getByRole('menuitem', { name: 'Ajoutez-moi sur LinkedIn' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Suivez-moi sur X' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Suivez-moi sur GitHub' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Accueil' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Accueil' })).toHaveAttribute(
      'aria-current',
      'page'
    );
    expect(screen.getByRole('menuitem', { name: 'Mon CV' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Mes missions' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Mes projets' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Contact' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Mentions légales' })).toBeInTheDocument();
  });
});
