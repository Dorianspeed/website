import { render, screen } from '@testing-library/react';

import type { ContactInformationProps } from '../../types/globals';
import ContactInformation from './ContactInformation';

const defaultProps = {
  companyName: 'Company',
  email: 'email@email.com',
  message: 'I am a message',
  name: 'Name'
} satisfies ContactInformationProps;

describe('ContactInformation', () => {
  it('should render component', () => {
    render(<ContactInformation {...defaultProps} />);

    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Voici un récapitulatif des informations fournies :'
      })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 4, name: 'Votre nom :' })).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 4, name: 'Le nom de votre société :' })
    ).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 4, name: 'Votre email :' })).toBeInTheDocument();
    expect(screen.getByText('email@email.com')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 4, name: 'Votre message :' })).toBeInTheDocument();
    expect(screen.getByText('I am a message')).toBeInTheDocument();
  });
});
