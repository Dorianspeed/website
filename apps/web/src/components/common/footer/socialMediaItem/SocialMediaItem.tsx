import type { SocialMediaItemDataProps } from '@/types/globals';

const SocialMediaItem = ({ icon: Icon, label, url }: SocialMediaItemDataProps) => (
  <li role='none'>
    <a
      aria-label={label}
      className='hover:text-neutral-icon-secondary inline-block size-6'
      href={url}
      rel='noopener noreferrer'
      role='menuitem'
      target='_blank'
    >
      <Icon aria-hidden={true} data-testid='social-media-icon' />
    </a>
  </li>
);

export default SocialMediaItem;
