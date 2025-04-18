import { Fragment } from 'react';

import { PROJECTS_DATA } from '@/constants/projects';

import HeroSection from '../common/heroSection/HeroSection';
import ProjectBlock from './projectBlock/ProjectBlock';

const MyProjects = () => (
  <Fragment>
    <HeroSection subtitle={undefined} title='Mes projets' />
    <section className='p-6 md:p-16'>
      {PROJECTS_DATA.map((data, index) => (
        <ProjectBlock key={index} {...data} />
      ))}
    </section>
  </Fragment>
);

export default MyProjects;
