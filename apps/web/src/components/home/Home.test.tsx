import { render, screen } from '@testing-library/react';

import Home from './Home';

describe('Home', () => {
  it('should render component', () => {
    render(<Home />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: 'Dorian Garcia' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Développeur web front-end' })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Découvrir mon CV' })).toBeInTheDocument();
    expect(screen.getAllByRole('blockquote')).toHaveLength(6);
    expect(screen.getAllByRole('img', { name: 'Author’s picture' })).toHaveLength(6);
    expect(screen.getAllByRole('paragraph')).toHaveLength(12);
  });
});
