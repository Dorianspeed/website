import { render, screen } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('should render component', () => {
    render(<Header />);

    expect(screen.getByRole('img', { name: 'Logo website' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Voir le site web' })).toBeInTheDocument();
  });
});
