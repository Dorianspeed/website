import MyProjects from './MyProjects';
import { render, screen } from '@testing-library/react';

describe('MyProjects', () => {
  it('should render component', () => {
    render(<MyProjects />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: 'Mes projets' })).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(1);
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(1);
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(1);
    expect(screen.getAllByRole('list')).toHaveLength(1);
    expect(screen.getAllByRole('listitem')).toHaveLength(5);
    expect(screen.getAllByRole('link', { name: 'Voir le projet sur GitHub' })).toHaveLength(1);
  });
});
