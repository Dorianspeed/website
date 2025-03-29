import LegalNotice from './LegalNotice';
import { render, screen } from '@testing-library/react';

describe('LegalNotice', () => {
  it('should render component', () => {
    render(<LegalNotice />);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
