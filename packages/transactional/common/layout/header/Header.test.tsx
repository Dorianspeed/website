import Header from './Header';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  it('should render component', () => {
    render(<Header />);

    expect(screen.getByRole('img', { name: 'Logo website' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Voir le site web' })).toBeInTheDocument();
  });
});
