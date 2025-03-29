import MyResume from './MyResume';
import { render, screen } from '@testing-library/react';

describe('MyResume', () => {
  it('should render component', () => {
    render(<MyResume />);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
