import type {
  NavItemDataProps,
  SiteMapItemsDataProps,
  SiteMapNavList,
  SocialMediaItemDataProps
} from '@/types/globals';

import GithubIcon from '@/assets/github.svg';
import LinkedinIcon from '@/assets/linkedin.svg';
import XIcon from '@/assets/x.svg';

export const CONTACT_URL = '/contact';
export const HOME_URL = '/home';
export const LEGAL_NOTICE_URL = '/legal-notice';
export const MISSIONS_URL = '/my-missions';
export const PROJECTS_URL = '/my-projects';
export const RESUME_URL = '/my-resume';

export const MENU_ITEMS_DATA = [
  { label: 'Accueil', position: 1, url: HOME_URL },
  { label: 'Mon CV', position: 2, url: RESUME_URL },
  { label: 'Mes missions', position: 3, url: MISSIONS_URL },
  { label: 'Mes projets', position: 4, url: PROJECTS_URL },
  { label: 'Contact', position: 5, url: CONTACT_URL }
] satisfies Array<NavItemDataProps>;

export const SITE_MAP_ITEMS_DATA = {
  legal: { data: [{ label: 'Mentions légales', position: 1, url: LEGAL_NOTICE_URL }], position: 2 },
  pages: { data: MENU_ITEMS_DATA, position: 1 }
} satisfies Record<SiteMapNavList, SiteMapItemsDataProps>;

export const SITE_MAP_NAV_LIST_LABELS = {
  legal: 'Légal',
  pages: 'Pages'
} satisfies Record<SiteMapNavList, string>;

export const SOCIAL_MEDIA_ITEMS_DATA = [
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
] satisfies Array<SocialMediaItemDataProps>;
