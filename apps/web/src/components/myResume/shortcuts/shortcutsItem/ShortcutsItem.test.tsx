import { render, screen } from '@testing-library/react';

import ShortcutsItem, { type ShortcutsItemProps } from './ShortcutsItem';

const defaultProps = {
  label: 'Home',
  url: '/home'
} satisfies ShortcutsItemProps;

describe('ShortcutsItem', () => {
  it('should render component', () => {
    render(<ShortcutsItem {...defaultProps} />);

    expect(screen.getByRole('none')).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Home' })).toBeInTheDocument();
  });
});
