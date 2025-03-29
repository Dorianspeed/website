import MyProjects from './MyProjects';
import { render, screen } from '@testing-library/react';

describe('MyProjects', () => {
  it('should render component', () => {
    render(<MyProjects />);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
