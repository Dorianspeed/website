import type { HTMLElementType, SVGElementType } from 'react';

export type DefaultBlockProps = {
  blockList: Array<ListItemProps>;
  id: string;
  picture: PictureProps;
  subtitle: TitleProps;
  title: TitleProps;
};

export type FormLabelsProps = {
  label: string;
  placeholder: string;
};

export type ListItemProps = {
  id: string;
  item: string;
};

export type MissionsDataProps = DefaultBlockProps & {
  companyUrl: string;
};

export type NavItemDataProps = {
  label: string;
  position: number;
  url: string;
};

export type SiteMapItemsDataProps = {
  data: Array<NavItemDataProps>;
  position: number;
};

export type SiteMapNavList = 'legal' | 'pages';

export type SocialMediaItemDataProps = {
  icon: SVGElementType;
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

type ResumeDataProps = DefaultBlockProps & { assetsList: Array<ListItemProps> };

export type ResumeDataPropsExtended = {
  data: Array<ResumeDataProps>;
  position: number;
};

export type ResumeNavItemsDataProps = Omit<NavItemDataProps, 'url'> & {
  url: `#${ResumeSections}`;
};

export type ResumeSections = 'my-professional-experiences' | 'my-courses' | 'my-certifications';

type TitleProps = {
  content: string;
  element: Extract<HTMLElementType, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
};
