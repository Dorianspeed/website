import { Fragment } from 'react';

import { CONTACT_URL } from '@/constants/globals';

import DownloadIcon from '@/assets/download.svg';
import MailIcon from '@/assets/mail.svg';

import HeroSection from '../common/heroSection/HeroSection';

const MyResume = () => (
  <Fragment>
    <HeroSection subtitle={undefined} title='Mon CV'>
      <div className='flex flex-col items-center gap-4 md:flex-row'>
        <button className='btn btn-secondary cursor-pointer' type='button'>
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
    <section className='flex flex-col gap-2 p-6 md:p-16'>
      <h2 className='text-2xl font-semibold'># Raccourcis</h2>
      <nav aria-label='Raccourcis du CV'>
        <ol
          aria-label='Raccourcis du CV'
          className='text-default-text-secondary flex list-inside list-decimal flex-col gap-2 text-xl font-normal'
          role='menubar'
        >
          <li role='none'>
            <a href='#my-professional-experiences' role='menuitem'>
              Mes expériences professionnelles
            </a>
          </li>
          <li role='none'>
            <a href='#my-courses' role='menuitem'>
              Mes formations
            </a>
          </li>
          <li role='none'>
            <a href='#my-certifications' role='menuitem'>
              Mes certifications
            </a>
          </li>
        </ol>
      </nav>
    </section>
  </Fragment>
);

export default MyResume;
