'use client';

import { Fragment } from 'react';

import { PROJECTS_DATA } from '@/constants/data';

import ExternalLinkIcon from '@/assets/external-link.svg';

import Block from '../common/block/Block';
import Button from '../common/button/Button';
import HeroSection from '../common/heroSection/HeroSection';

const MyProjects = () => (
  <Fragment>
    <HeroSection subtitle={undefined} title='Mes projets' />
    <section className='p-6 md:p-16'>
      {PROJECTS_DATA.map(({ picture, projectUrl, ...otherData }) => (
        <Block
          key={otherData.indexKey}
          picture={{ ...picture, height: 160, width: 160 }}
          {...otherData}
        >
          <Button
            appearance='primary'
            className={undefined}
            href={projectUrl}
            icon={ExternalLinkIcon}
            type='link'
          >
            Voir le projet sur GitHub
          </Button>
        </Block>
      ))}
    </section>
  </Fragment>
);

export default MyProjects;
