import type { HTMLElementType, ReactNode } from 'react';

export type DefaultBlockProps = {
  list: Array<string>;
  picture: PictureProps;
  subtitle: TitleProps;
  title: TitleProps;
};

export type FormLabelsProps = {
  label: string;
  placeholder: string;
};

export type MissionsDataProps = DefaultBlockProps & {
  companyUrl: string;
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

type PictureProps = {
  alt: string;
  url: string;
};

export type PicturePropsExtended = PictureProps & {
  height: number;
  width: number;
};

export type ProjectsDataProps = DefaultBlockProps & {
  projectUrl: string;
};

type TitleProps = {
  content: string;
  element: Extract<HTMLElementType, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
};
