import Footer from './Footer';
import { render, screen } from '@testing-library/react';

describe('Footer', () => {
  it('should render component', () => {
    render(<Footer />);

    expect(screen.getByText('Dorian Garcia EI')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Logo LinkedIn' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Logo LinkedIn' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Logo X' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Logo X' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Logo GitHub' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Logo GitHub' })).toBeInTheDocument();
    expect(screen.getByText('11 Impasse du Bois Midy, 27400 La Haye-Malherbe')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'dorian.garcia.dev@gmail.com' })).toBeInTheDocument();
  });
});
