import type { FC, PropsWithChildren } from 'react';

import { SiteMapNavList } from '@/types/globals';

import { SITE_MAP_NAV_LIST_LABELS } from '@/constants/globals';

export type SiteMapListProps = {
  navListName: SiteMapNavList;
};

const SiteMapList: FC<PropsWithChildren<SiteMapListProps>> = ({ children, navListName }) => (
  <ul
    aria-label={SITE_MAP_NAV_LIST_LABELS[navListName]}
    className='flex w-full flex-col gap-2 before:mb-2 before:text-base before:font-bold before:content-[attr(aria-label)] md:max-w-3xs md:gap-3 md:before:mb-6'
    role='menubar'
  >
    {children}
  </ul>
);

export default SiteMapList;
