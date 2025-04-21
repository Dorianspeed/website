import { render, screen } from '@testing-library/react';

import Tag, { type TagProps } from './Tag';

const defaultProps = { appearance: 'primary', tag: 'Hello' } satisfies TagProps;

describe('Tag', () => {
  it('should render component', () => {
    render(<Tag {...defaultProps} />);

    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
