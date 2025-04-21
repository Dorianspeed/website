'use client';

import type { SiteMapNavList } from '@/types/globals';

import { SITE_MAP_ITEMS_DATA, SOCIAL_MEDIA_ITEMS_DATA } from '@/constants/globals';

import LaptopIcon from '@/assets/laptop.svg';

import SiteMapItem from './siteMapItem/SiteMapItem';
import SiteMapList from './siteMapList/SiteMapList';
import SocialMediaItem from './socialMediaItem/SocialMediaItem';

const Footer = () => (
  <footer className='border-default-border flex flex-col gap-16 border-t p-8 md:flex-row md:gap-0'>
    <nav
      aria-label='Réseaux sociaux'
      className='flex w-full items-center justify-between md:max-w-3xs md:flex-col md:items-stretch md:justify-normal md:gap-8'
      role='navigation'
    >
      <div className='size-8'>
        <LaptopIcon aria-hidden={true} />
      </div>
      <ul aria-label='Réseaux sociaux' className='flex items-center gap-4' role='menubar'>
        {[...SOCIAL_MEDIA_ITEMS_DATA]
          .sort((a, b) => a.position - b.position)
          .map((data) => (
            <SocialMediaItem key={data.url} {...data} />
          ))}
      </ul>
    </nav>
    <nav
      aria-label='Plan du site'
      className='flex w-full flex-col gap-6 md:max-w-lg md:flex-row md:gap-0'
      role='navigation'
    >
      {Object.entries(SITE_MAP_ITEMS_DATA)
        .sort(([_, itemA], [__, itemB]) => itemA.position - itemB.position)
        .map(([navListName, { data: siteMapItemsData }]) => (
          <SiteMapList key={navListName} navListName={navListName as SiteMapNavList}>
            {siteMapItemsData
              .sort((a, b) => a.position - b.position)
              .map((data) => (
                <SiteMapItem key={data.url} {...data} />
              ))}
          </SiteMapList>
        ))}
    </nav>
  </footer>
);

export default Footer;
