import type { FC } from 'react';

import type { SocialMediaItemDataProps } from '@/types/globals';

const SocialMediaItem: FC<SocialMediaItemDataProps> = ({ icon, label, url }) => (
  <li role='none'>
    <a
      aria-label={label}
      className='hover:text-tertiary-background inline-block h-6 w-6'
      href={url}
      rel='noopener noreferrer'
      role='menuitem'
      target='_blank'
    >
      {icon}
    </a>
  </li>
);

export default SocialMediaItem;
