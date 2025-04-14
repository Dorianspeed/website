import ContactRequest from './ContactRequest';
import { render, screen } from '@testing-library/react';

import type { ContactInformationProps } from '@/types/globals';

const defaultProps = {
  companyName: 'Company',
  email: 'email@email.com',
  message: 'I am a message',
  name: 'Name'
} satisfies ContactInformationProps;

describe('ContactRequest', () => {
  it('should render component', () => {
    render(<ContactRequest {...defaultProps} />);

    expect(screen.getAllByRole('img')).toHaveLength(4);
    expect(screen.getAllByRole('link')).toHaveLength(5);
    expect(screen.getByText('Dorian Garcia EI')).toBeInTheDocument();
    expect(screen.getByText('11 Impasse du Bois Midy, 27400 La Haye-Malherbe')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 1, name: 'Réception d’une nouvelle demande de contact' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'À répondre dans les plus brefs délais !' })
    ).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(1);
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(4);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('email@email.com')).toBeInTheDocument();
    expect(screen.getByText('I am a message')).toBeInTheDocument();
    expect(screen.getByText('Bonne réception !')).toBeInTheDocument();
    expect(screen.getByText(/Dorian./)).toBeInTheDocument();
  });
});
