import { Fragment } from 'react';

import { MISSIONS_DATA } from '@/constants/data';

import ExternalLinkIcon from '@/assets/external-link.svg';

import Block from '../common/block/Block';
import HeroSection from '../common/heroSection/HeroSection';
import SvgIcon from '../common/svgIcon/SvgIcon';

const MyMissions = () => (
  <Fragment>
    <HeroSection subtitle={undefined} title='Mes missions' />
    <section className='grid-auto-fit-64 md:grid-auto-fit-80 grid gap-12 p-6 md:p-16'>
      {MISSIONS_DATA.map(({ companyUrl, picture, ...otherData }, index) => (
        <Block key={index} picture={{ ...picture, height: 120, width: 120 }} {...otherData}>
          <a
            className='btn btn-primary'
            href={companyUrl}
            rel='noopener noreferrer'
            target='_blank'
          >
            <SvgIcon Icon={ExternalLinkIcon} size={4} />
            Voir le site
          </a>
        </Block>
      ))}
    </section>
  </Fragment>
);

export default MyMissions;
