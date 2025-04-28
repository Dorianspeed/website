import { render, screen } from '@testing-library/react';

import Shortcuts, { type ShortcutsProps } from './Shortcuts';

const defaultProps = {
  sectionRef: { current: null }
} satisfies ShortcutsProps;

describe('Shortcuts', () => {
  it('should render component', () => {
    render(<Shortcuts {...defaultProps} />);

    expect(screen.getByRole('heading', { level: 2, name: '# Raccourcis' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Raccourcis du CV' })).toBeInTheDocument();
    expect(screen.getByRole('menubar', { name: 'Raccourcis du CV' })).toBeInTheDocument();
    expect(screen.getAllByRole('none')).toHaveLength(3);
    expect(
      screen.getByRole('menuitem', { name: 'Mes expériences professionnelles' })
    ).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Mes formations' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Mes certifications' })).toBeInTheDocument();
  });
});
