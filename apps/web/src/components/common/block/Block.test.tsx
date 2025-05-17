import { render, screen } from '@testing-library/react';
import { randomUUID } from 'crypto';

import Block, { type BlockProps } from './Block';

const defaultProps = {
  blockList: [
    { id: randomUUID(), item: 'React' },
    { id: randomUUID(), item: 'Typescript' }
  ],
  id: randomUUID(),
  picture: { alt: 'Project picture', height: 40, url: '/avatar.webp', width: 40 },
  subtitle: { content: 'Here is a project', element: 'h3' },
  title: { content: 'Website', element: 'h2' }
} satisfies BlockProps;

describe('Block', () => {
  it('should render component', () => {
    render(<Block {...defaultProps} />);

    expect(screen.getByRole('img', { name: 'Project picture' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Website' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: 'Here is a project' })
    ).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  it('should not render list when it is empty', () => {
    render(<Block {...defaultProps} blockList={[]} />);

    expect(screen.getByRole('img', { name: 'Project picture' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Website' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: 'Here is a project' })
    ).toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });
});
