import { Fragment } from 'react';

import { QUOTES_DATA } from '@/constants/data';
import { RESUME_URL } from '@/constants/globals';

import TruckIcon from '@/assets/truck.svg';

import HeroSection from '../common/heroSection/HeroSection';
import SvgIcon from '../common/svgIcon/SvgIcon';
import QuoteBlock from './quoteBlock/QuoteBlock';

const Home = () => (
  <Fragment>
    <HeroSection subtitle='Développeur web front-end' title='Dorian Garcia'>
      <a className='btn btn-secondary' href={RESUME_URL}>
        <SvgIcon Icon={TruckIcon} size={4} />
        Découvrir mon CV
      </a>
    </HeroSection>
    <section className='p-6 md:p-16'>
      <h3 className='text-2xl font-semibold'>Ce qu’ils pensent de moi</h3>
      <h4 className='text-default-text-secondary mt-2 text-xl font-normal'>
        Des avis véridiques comme on en a jamais vu !
      </h4>
      <div className='grid-auto-fit-64 md:grid-auto-fit-80 mt-12 grid gap-6 md:gap-12'>
        {QUOTES_DATA.map((data, index) => (
          <QuoteBlock key={index} {...data} />
        ))}
      </div>
    </section>
  </Fragment>
);

export default Home;
