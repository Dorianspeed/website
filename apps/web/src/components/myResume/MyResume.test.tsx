import { render, screen } from '@testing-library/react';

import MyResume from './MyResume';

describe('MyResume', () => {
  it('should render component', () => {
    render(<MyResume />);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
