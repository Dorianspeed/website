import { render, screen } from '@testing-library/react';

import ResumeBlocks from './ResumeBlocks';

describe('ResumeBlocks', () => {
  it('should render component', () => {
    render(<ResumeBlocks />);

    expect(
      screen.getByRole('heading', { level: 2, name: 'Mes expériences professionnelles' })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Mes formations' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Mes certifications' })
    ).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(10);
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(10);
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(10);
    expect(screen.getAllByRole('list')).toHaveLength(7);
    expect(screen.getAllByRole('listitem')).toHaveLength(38);
  });
});
