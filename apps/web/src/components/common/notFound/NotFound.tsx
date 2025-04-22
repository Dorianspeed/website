import { HOME_URL } from '@/constants/globals';

import HeroSection from '@/components/common/heroSection/HeroSection';

import CircleAlertIcon from '@/assets/circle-alert.svg';
import HomeIcon from '@/assets/home.svg';

import SvgIcon from '../svgIcon/SvgIcon';

const NotFound = () => (
  <HeroSection subtitle={undefined} title={undefined}>
    <div className='bg-default-bg-default border-default-border flex flex-col items-center gap-6 rounded-lg border p-6'>
      <SvgIcon Icon={CircleAlertIcon} size={12} />
      <div className='flex flex-col gap-2 text-center'>
        <h1 className='text-2xl font-semibold'>Erreur 404</h1>
        <h2 className='text-default-text-secondary text-xl font-normal'>
          La ressource demandée n’a pas été trouvée !
        </h2>
      </div>
      <a className='btn btn-primary' href={HOME_URL}>
        <SvgIcon Icon={HomeIcon} size={4} />
        Retour à l’accueil
      </a>
    </div>
  </HeroSection>
);

export default NotFound;
