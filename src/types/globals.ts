import type { ReactNode } from 'react';

export type FormLabelsProps = {
  label: string;
  placeholder: string;
};

export type NavItemDataProps = {
  label: string;
  position: number;
  url: string;
};

export type SiteMapNavList = 'legal' | 'pages';

export type SocialMediaItemDataProps = {
  icon: ReactNode;
  label: string;
  position: number;
  url: string;
};
