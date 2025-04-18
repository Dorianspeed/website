import { render, screen } from '@testing-library/react';

import LegalNotice from './LegalNotice';

describe('LegalNotice', () => {
  it('should render component', () => {
    render(<LegalNotice />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Société' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Hébergement du site' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Collecte des données' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Utilisation des cookies' })
    ).toBeInTheDocument();
    expect(screen.getAllByRole('paragraph')).toHaveLength(6);
    expect(screen.getByRole('link', { name: 'dorian.garcia.dev@gmail.com' })).toBeInTheDocument();
  });
});
