'use client';

import SiteMapItem from './siteMapItem/SiteMapItem';
import SiteMapList from './siteMapList/SiteMapList';
import SocialMediaItem from './socialMediaItem/SocialMediaItem';

import type { SiteMapNavList } from '@/types/globals';

import { SITE_MAP_ITEMS_DATA, SOCIAL_MEDIA_ITEMS_DATA } from '@/constants/globals';

import LaptopIcon from '@/assets/laptop.svg';

const Footer = () => (
  <footer className='border-default-border flex flex-col gap-16 border-t p-8 md:flex-row md:gap-0'>
    <nav
      aria-label='Social media'
      className='flex w-full items-center justify-between md:max-w-3xs md:flex-col md:items-stretch md:justify-normal md:gap-8'
      role='navigation'
    >
      <div className='size-8'>
        <LaptopIcon aria-hidden={true} />
      </div>
      <ul aria-label='Social media' className='flex items-center gap-4' role='menubar'>
        {[...SOCIAL_MEDIA_ITEMS_DATA]
          .sort((a, b) => a.position - b.position)
          .map((data) => (
            <SocialMediaItem key={data.url} {...data} />
          ))}
      </ul>
    </nav>
    <nav
      aria-label='Site map'
      className='flex w-full flex-col gap-6 md:max-w-lg md:flex-row md:gap-0'
      role='navigation'
    >
      {Object.entries(SITE_MAP_ITEMS_DATA).map(([navListName, siteMapItemsData]) => (
        <SiteMapList key={navListName} navListName={navListName as SiteMapNavList}>
          {[...siteMapItemsData]
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
