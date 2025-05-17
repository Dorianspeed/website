import { render, screen } from '@testing-library/react';
import { randomUUID } from 'crypto';

import Tags, { type TagsProps } from './Tags';

const defaultProps = {
  tags: [
    { id: randomUUID(), item: 'Hello' },
    { id: randomUUID(), item: 'Welcome' }
  ]
} satisfies TagsProps;

describe('Tags', () => {
  it('should render component', () => {
    render(<Tags {...defaultProps} />);

    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('Welcome')).toBeInTheDocument();
  });
});
