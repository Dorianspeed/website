import { Fragment } from 'react';

import { INTERNAL_URLS } from '@/constants/globals';

import DownloadIcon from '@/assets/download.svg';
import MailIcon from '@/assets/mail.svg';

import Button from '../common/button/Button';
import HeroSection from '../common/heroSection/HeroSection';
import BriefDescription from './briefDescription/BriefDescription';
import ResumeBlocks from './resumeBlocks/ResumeBlocks';
import Shortcuts from './shortcuts/Shortcuts';

const MyResume = () => (
  <Fragment>
    <HeroSection subtitle={undefined} title='Mon CV'>
      <div className='flex flex-col items-center gap-4 md:flex-row'>
        <Button
          appearance='secondary'
          className={undefined}
          icon={DownloadIcon}
          onClick={() => {
            // TODO do something
          }}
          type='button'
        >
          Téléchargez-moi
        </Button>
        <Button
          appearance='primary'
          className={undefined}
          href={INTERNAL_URLS.contact}
          icon={MailIcon}
          type='link'
        >
          Contactez-moi
        </Button>
      </div>
    </HeroSection>
    <Shortcuts />
    <BriefDescription />
    <ResumeBlocks />
  </Fragment>
);

export default MyResume;
