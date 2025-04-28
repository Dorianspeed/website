import useElementPosition from '@/hooks/useElementPosition/useElementPosition';
import { Fragment, useRef } from 'react';

import { INTERNAL_URLS } from '@/constants/globals';

import ChevronUpIcon from '@/assets/chevron-up.svg';
import DownloadIcon from '@/assets/download.svg';
import MailIcon from '@/assets/mail.svg';

import Button from '../common/button/Button';
import HeroSection from '../common/heroSection/HeroSection';
import SvgIcon from '../common/svgIcon/SvgIcon';
import BriefDescription from './briefDescription/BriefDescription';
import ResumeBlocks from './resumeBlocks/ResumeBlocks';
import Shortcuts from './shortcuts/Shortcuts';

const MyResume = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementPosition = useElementPosition({ elementRef: sectionRef, rectPosition: 'bottom' });

  return (
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
      <Shortcuts sectionRef={sectionRef} />
      <BriefDescription />
      <ResumeBlocks />
      <button
        aria-label='Retour au haut de la page'
        className={`bg-default-bg-default border-default-border hover:bg-brand-bg-tertiary fixed bottom-6 left-1/2 -translate-x-1/2 cursor-pointer rounded-full border p-2 duration-300 ${elementPosition < 0 ? 'visible opacity-100' : 'invisible opacity-0'}`}
        onClick={() => sectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
        type='button'
      >
        <SvgIcon dataTest={undefined} icon={ChevronUpIcon} size={9} />
      </button>
    </Fragment>
  );
};

export default MyResume;
