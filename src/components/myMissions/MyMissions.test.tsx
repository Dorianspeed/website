import MyMissions from './MyMissions';
import { render, screen } from '@testing-library/react';

describe('MyMissions', () => {
  it('should render component', () => {
    render(<MyMissions />);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
