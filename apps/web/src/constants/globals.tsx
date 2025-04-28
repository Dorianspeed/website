import type {
  NavItemDataProps,
  ResumeNavItemsDataProps,
  ResumeSections,
  SiteMapItemsDataProps,
  SiteMapNavList,
  SocialMediaItemDataProps
} from '@/types/globals';

import GithubIcon from '@/assets/github.svg';
import LinkedinIcon from '@/assets/linkedin.svg';
import XIcon from '@/assets/x.svg';

export const INTERNAL_URLS = {
  contact: '/contact',
  home: '/home',
  legalNotice: '/legal-notice',
  missions: '/my-missions',
  projects: '/my-projects',
  resume: '/my-resume'
};

export const MENU_ITEMS_DATA = [
  { label: 'Accueil', position: 1, url: INTERNAL_URLS.home },
  { label: 'Mon CV', position: 2, url: INTERNAL_URLS.resume },
  { label: 'Mes missions', position: 3, url: INTERNAL_URLS.missions },
  { label: 'Mes projets', position: 4, url: INTERNAL_URLS.projects },
  { label: 'Contact', position: 5, url: INTERNAL_URLS.contact }
] satisfies Array<NavItemDataProps>;

export const RESUME_SECTION_LABELS = {
  'my-certifications': 'Mes certifications',
  'my-courses': 'Mes formations',
  'my-professional-experiences': 'Mes expériences professionnelles'
} satisfies Record<ResumeSections, string>;

export const SHORTCUTS_ITEMS_DATA = [
  { label: 'Mes expériences professionnelles', position: 1, url: '#my-professional-experiences' },
  { label: 'Mes formations', position: 2, url: '#my-courses' },
  { label: 'Mes certifications', position: 3, url: '#my-certifications' }
] satisfies Array<ResumeNavItemsDataProps>;

export const SITE_MAP_ITEMS_DATA = {
  legal: {
    data: [{ label: 'Mentions légales', position: 1, url: INTERNAL_URLS.legalNotice }],
    position: 2
  },
  pages: { data: MENU_ITEMS_DATA, position: 1 }
} satisfies Record<SiteMapNavList, SiteMapItemsDataProps>;

export const SITE_MAP_NAV_LIST_LABELS = {
  legal: 'Légal',
  pages: 'Pages'
} satisfies Record<SiteMapNavList, string>;

export const SOCIAL_MEDIA_ITEMS_DATA = [
  {
    icon: LinkedinIcon,
    label: 'Ajoutez-moi sur LinkedIn',
    position: 1,
    url: 'https://www.linkedin.com/in/garcia-dorian-dev'
  },
  {
    icon: XIcon,
    label: 'Suivez-moi sur X',
    position: 2,
    url: 'https://x.com/Dorian_Speed'
  },
  {
    icon: GithubIcon,
    label: 'Suivez-moi sur GitHub',
    position: 3,
    url: 'https://github.com/Dorianspeed'
  }
] satisfies Array<SocialMediaItemDataProps>;
