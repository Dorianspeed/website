import { render, screen } from '@testing-library/react';

import Contact from './Contact';

vi.mock('next/navigation', async () => ({
  ...(await vi.importActual('next/navigation')),
  useRouter: () => ({ push: vi.fn() })
}));

describe('Contact', () => {
  it('should render component', () => {
    render(<Contact />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: 'Contactez-moi' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Si l’envie vous en dit !' })
    ).toBeInTheDocument();
    expect(screen.getAllByRole('textbox')).toHaveLength(4);
    expect(screen.getByRole('button', { name: 'Soumettre' })).toBeInTheDocument();
  });
});
