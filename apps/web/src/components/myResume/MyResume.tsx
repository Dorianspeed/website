import { Fragment } from 'react';

import { CONTACT_URL } from '@/constants/globals';

import DownloadIcon from '@/assets/download.svg';
import MailIcon from '@/assets/mail.svg';

import HeroSection from '../common/heroSection/HeroSection';
import SvgIcon from '../common/svgIcon/SvgIcon';
import BriefDescription from './briefDescription/BriefDescription';
import ResumeBlocks from './resumeBlocks/ResumeBlocks';
import Shortcuts from './shortcuts/Shortcuts';

const MyResume = () => (
  <Fragment>
    <HeroSection subtitle={undefined} title='Mon CV'>
      <div className='flex flex-col items-center gap-4 md:flex-row'>
        <button
          className='btn btn-secondary cursor-pointer'
          onClick={() => {
            //TODO do something
          }}
          type='button'
        >
          <SvgIcon Icon={DownloadIcon} size={4} />
          Téléchargez-moi
        </button>
        <a className='btn btn-primary' href={CONTACT_URL}>
          <SvgIcon Icon={MailIcon} size={4} />
          Contactez-moi
        </a>
      </div>
    </HeroSection>
    <Shortcuts />
    <BriefDescription />
    <ResumeBlocks />
  </Fragment>
);

export default MyResume;
