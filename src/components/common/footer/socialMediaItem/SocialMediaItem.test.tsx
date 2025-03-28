import SocialMediaItem from './SocialMediaItem';
import { render, screen } from '@testing-library/react';

import type { SocialMediaItemDataProps } from '@/types/globals';

import LinkedinIcon from '@/assets/linkedin.svg';

const socialMediaItemProps: SocialMediaItemDataProps = {
  icon: <LinkedinIcon aria-hidden={true} data-testid='linkedin-icon' />,
  label: 'Ajoutez-moi sur LinkedIn',
  position: 1,
  url: 'https://www.linkedin.com/in/garcia-dorian-dev'
};

describe('SocialMediaItem', () => {
  it('should render component', () => {
    render(<SocialMediaItem {...socialMediaItemProps} />);

    expect(screen.getByRole('none')).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Ajoutez-moi sur LinkedIn' })).toBeInTheDocument();
    expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();
  });
});
