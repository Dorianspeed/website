import Confirmation from './Confirmation';
import { render, screen } from '@testing-library/react';

describe('Confirmation', () => {
  it('should render component', () => {
    render(<Confirmation />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'Confirmation de votre demande de contact' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Je vous répondrai dans les plus brefs délais !'
      })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Retour à l’accueil' })).toBeInTheDocument();
  });
});
