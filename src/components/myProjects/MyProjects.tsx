import HeroSection from '../common/heroSection/HeroSection';
import ProjectBlock from './projectBlock/ProjectBlock';

import { PROJECTS_DATA } from '@/constants/projects';

const MyProjects = () => (
  <main className='h-full'>
    <HeroSection subtitle={undefined} title='Mes projets' />
    <section className='p-6 md:p-16'>
      {PROJECTS_DATA.map((data, index) => (
        <ProjectBlock key={index} {...data} />
      ))}
    </section>
  </main>
);

export default MyProjects;
