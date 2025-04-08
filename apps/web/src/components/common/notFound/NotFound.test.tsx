import NotFound from './NotFound';
import { render, screen } from '@testing-library/react';

describe('NotFound', () => {
  it('should render component', () => {
    render(<NotFound />);

    expect(screen.getByRole('heading', { level: 1, name: 'Erreur 404' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'La ressource demandée n’a pas été trouvée !'
      })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Retour à l’accueil' })).toBeInTheDocument();
  });
});
