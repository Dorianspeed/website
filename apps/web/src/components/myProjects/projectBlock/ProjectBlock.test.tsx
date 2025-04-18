import { render, screen } from '@testing-library/react';

import ProjectBlock, { type ProjectBlockProps } from './ProjectBlock';

const projectBlockProps = {
  description: 'Here is a project',
  featuresList: ['React', 'Typescript'],
  pictureUrl: '/avatar.webp',
  projectName: 'Website',
  projectUrl: 'https://github.com/Dorianspeed'
} satisfies ProjectBlockProps;

describe('ProjectBlock', () => {
  it('should render component', () => {
    render(<ProjectBlock {...projectBlockProps} />);

    expect(screen.getByRole('img', { name: 'Project picture' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Website' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: 'Here is a project' })
    ).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getByRole('link', { name: 'Voir le projet sur GitHub' })).toBeInTheDocument();
  });
});
