import { render, screen } from '@testing-library/react';

import MyMissions from './MyMissions';

describe('MyMissions', () => {
  it('should render component', () => {
    render(<MyMissions />);

    expect(screen.getByRole('heading', { level: 1, name: 'Mes missions' })).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(4);
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(4);
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4);
    expect(screen.getAllByRole('list')).toHaveLength(4);
    expect(screen.getAllByRole('listitem')).toHaveLength(4);
    expect(screen.getAllByRole('link', { name: 'Voir le site' })).toHaveLength(4);
  });
});
