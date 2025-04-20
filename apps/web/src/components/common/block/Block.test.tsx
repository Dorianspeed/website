import { render, screen } from '@testing-library/react';

import Block, { type BlockProps } from './Block';

const defaultBlockProps = {
  list: ['React', 'Typescript'],
  picture: { alt: 'Project picture', height: 40, url: '/avatar.webp', width: 40 },
  subtitle: { content: 'Here is a project', element: 'h3' },
  title: { content: 'Website', element: 'h2' }
} satisfies BlockProps;

describe('Block', () => {
  it('should render component', () => {
    render(<Block {...defaultBlockProps} />);

    expect(screen.getByRole('img', { name: 'Project picture' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Website' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: 'Here is a project' })
    ).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
