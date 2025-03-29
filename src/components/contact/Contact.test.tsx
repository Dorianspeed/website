import Contact from './Contact';
import { render, screen } from '@testing-library/react';

describe('Contact', () => {
  it('should render component', () => {
    render(<Contact />);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
