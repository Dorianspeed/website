import { Fragment } from 'react';

import { MISSIONS_DATA } from '@/constants/missions';

import HeroSection from '../common/heroSection/HeroSection';
import MissionBlock from './missionBlock/MissionBlock';

const MyMissions = () => (
  <Fragment>
    <HeroSection subtitle={undefined} title='Mes missions' />
    <section className='grid-auto-fit-64 md:grid-auto-fit-80 grid gap-12 p-6 md:p-16'>
      {MISSIONS_DATA.map((data, index) => (
        <MissionBlock key={index} {...data} />
      ))}
    </section>
  </Fragment>
);

export default MyMissions;
