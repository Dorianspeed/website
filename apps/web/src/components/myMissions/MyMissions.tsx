'use client';

import { Fragment } from 'react';

import { MISSIONS_DATA } from '@/constants/data';

import ExternalLinkIcon from '@/assets/external-link.svg';

import Block from '../common/block/Block';
import Button from '../common/button/Button';
import HeroSection from '../common/heroSection/HeroSection';

const MyMissions = () => (
  <Fragment>
    <HeroSection subtitle={undefined} title='Mes missions' />
    <section className='grid-auto-fit-64 md:grid-auto-fit-80 grid gap-12 p-6 md:p-16'>
      {MISSIONS_DATA.map(({ companyUrl, picture, ...otherData }) => (
        <Block
          key={otherData.indexKey}
          picture={{ ...picture, height: 120, width: 120 }}
          {...otherData}
        >
          <Button
            appearance='primary'
            className={undefined}
            href={companyUrl}
            icon={ExternalLinkIcon}
            type='link'
          >
            Voir le site
          </Button>
        </Block>
      ))}
    </section>
  </Fragment>
);

export default MyMissions;
