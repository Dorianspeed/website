import { render, screen } from '@testing-library/react';

import type { SocialMediaItemDataProps } from '@/types/globals';

import LinkedinIcon from '@/assets/linkedin.svg';

import SocialMediaItem from './SocialMediaItem';

const socialMediaItemProps = {
  icon: LinkedinIcon,
  label: 'Ajoutez-moi sur LinkedIn',
  position: 1,
  url: 'https://www.linkedin.com/in/garcia-dorian-dev'
} satisfies SocialMediaItemDataProps;

describe('SocialMediaItem', () => {
  it('should render component', () => {
    render(<SocialMediaItem {...socialMediaItemProps} />);

    expect(screen.getByRole('none')).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Ajoutez-moi sur LinkedIn' })).toBeInTheDocument();
    expect(screen.getByTestId('social-media-icon')).toBeInTheDocument();
  });
});
