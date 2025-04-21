import { Fragment } from 'react';

import { CONTACT_URL } from '@/constants/globals';

import DownloadIcon from '@/assets/download.svg';
import MailIcon from '@/assets/mail.svg';

import HeroSection from '../common/heroSection/HeroSection';
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
          <div className='size-4 shrink-0'>
            <DownloadIcon aria-hidden={true} />
          </div>
          Téléchargez-moi
        </button>
        <a className='btn btn-primary' href={CONTACT_URL}>
          <div className='size-4 shrink-0'>
            <MailIcon aria-hidden={true} />
          </div>
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
