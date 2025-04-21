import { render, screen } from '@testing-library/react';

import BriefDescription from './BriefDescription';

describe('BriefDescription', () => {
  it('should render component', () => {
    render(<BriefDescription />);

    expect(
      screen.getByRole('heading', { level: 2, name: 'Description brève' })
    ).toBeInTheDocument();
    expect(screen.getByRole('paragraph')).toBeInTheDocument();
  });
});
