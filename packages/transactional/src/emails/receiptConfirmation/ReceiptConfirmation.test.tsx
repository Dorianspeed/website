import { render, screen } from '@testing-library/react';

import type { ContactInformationProps } from '../../types/globals';
import ReceiptConfirmation from './ReceiptConfirmation';

const defaultProps = {
  companyName: 'Company',
  email: 'email@email.com',
  message: 'I am a message',
  name: 'Name'
} satisfies ContactInformationProps;

describe('ReceiptConfirmation', () => {
  it('should render component', () => {
    render(<ReceiptConfirmation {...defaultProps} />);

    expect(screen.getAllByRole('img')).toHaveLength(4);
    expect(screen.getAllByRole('link')).toHaveLength(5);
    expect(screen.getByText('Dorian Garcia EI')).toBeInTheDocument();
    expect(screen.getByText('11 Impasse du Bois Midy, 27400 La Haye-Malherbe')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 1, name: 'Accusé de réception' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Votre demande de contact a bien été prise en compte !'
      })
    ).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(1);
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(4);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('email@email.com')).toBeInTheDocument();
    expect(screen.getByText('I am a message')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Je vous répondrai dans les meilleurs délais, merci de votre compréhension !'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Bien cordialement,')).toBeInTheDocument();
    expect(screen.getByText(/Dorian Garcia./)).toBeInTheDocument();
  });
});
