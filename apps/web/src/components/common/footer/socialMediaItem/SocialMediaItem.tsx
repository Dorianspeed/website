import type { SocialMediaItemDataProps } from '@/types/globals';

const SocialMediaItem = ({ icon, label, url }: SocialMediaItemDataProps) => (
  <li role='none'>
    <a
      aria-label={label}
      className='hover:text-neutral-icon-secondary inline-block size-6'
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
