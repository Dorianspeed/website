import type { NavItemDataProps, SiteMapNavList, SocialMediaItemDataProps } from '@/types/globals';

import GithubIcon from '@/assets/github.svg';
import LinkedinIcon from '@/assets/linkedin.svg';
import XIcon from '@/assets/x.svg';

export const MENU_ITEMS_DATA: Array<NavItemDataProps> = [
  { label: 'Accueil', position: 1, url: '/home' },
  { label: 'Mon CV', position: 2, url: '/my-resume' },
  { label: 'Mes missions', position: 3, url: '/my-missions' },
  { label: 'Mes projets', position: 4, url: '/my-projects' },
  { label: 'Contact', position: 5, url: '/contact' }
];

export const SITE_MAP_ITEMS_DATA: Record<SiteMapNavList, Array<NavItemDataProps>> = {
  legal: MENU_ITEMS_DATA,
  pages: [{ label: 'Mentions légales', position: 1, url: '/legal-notice' }]
};

export const SITE_MAP_NAV_LIST_LABELS: Record<SiteMapNavList, string> = {
  legal: 'Légal',
  pages: 'Pages'
};

export const SOCIAL_MEDIA_ITEMS_DATA: Array<SocialMediaItemDataProps> = [
  {
    icon: <LinkedinIcon aria-hidden={true} />,
    label: 'Ajoutez-moi sur LinkedIn',
    position: 1,
    url: 'https://www.linkedin.com/in/garcia-dorian-dev'
  },
  {
    icon: <XIcon aria-hidden={true} />,
    label: 'Suivez-moi sur X',
    position: 2,
    url: 'https://x.com/Dorian_Speed'
  },
  {
    icon: <GithubIcon aria-hidden={true} />,
    label: 'Suivez-moi sur GitHub',
    position: 3,
    url: 'https://github.com/Dorianspeed'
  }
];
