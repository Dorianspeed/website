import { render, screen } from '@testing-library/react';

import MissionBlock, { type MissionBlockProps } from './MissionBlock';

const missionBlockProps = {
  companyName: 'Dorian Garcia EI',
  companyUrl: 'http://my-own-website.fr',
  dateRange: '20/04/23 au 25/05/23',
  missionsList: ['Add a new feature', 'Implementation of the new design system'],
  pictureUrl: '/avatar.webp'
} satisfies MissionBlockProps;

describe('MissionBlock', () => {
  it('should render component', () => {
    render(<MissionBlock {...missionBlockProps} />);

    expect(screen.getByRole('img', { name: 'Logo Dorian Garcia EI' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Dorian Garcia EI' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: '20/04/23 au 25/05/23' })
    ).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getByRole('link', { name: 'Voir le site' })).toBeInTheDocument();
  });
});
