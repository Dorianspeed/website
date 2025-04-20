import { Fragment } from 'react';

import { PROJECTS_DATA } from '@/constants/data';

import ExternalLinkIcon from '@/assets/external-link.svg';

import Block from '../common/block/Block';
import HeroSection from '../common/heroSection/HeroSection';

const MyProjects = () => (
  <Fragment>
    <HeroSection subtitle={undefined} title='Mes projets' />
    <section className='p-6 md:p-16'>
      {PROJECTS_DATA.map(({ picture, projectUrl, ...otherData }, index) => (
        <Block key={index} picture={{ ...picture, height: 160, width: 160 }} {...otherData}>
          <a
            className='btn btn-primary shrink-0'
            href={projectUrl}
            rel='noopener noreferrer'
            target='_blank'
          >
            <div className='size-4'>
              <ExternalLinkIcon aria-hidden={true} />
            </div>
            Voir le projet sur GitHub
          </a>
        </Block>
      ))}
    </section>
  </Fragment>
);

export default MyProjects;
