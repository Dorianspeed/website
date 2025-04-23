import { INTERNAL_URLS } from '@/constants/globals';

import Button from '@/components/common/button/Button';
import HeroSection from '@/components/common/heroSection/HeroSection';
import SvgIcon from '@/components/common/svgIcon/SvgIcon';

import CheckCircleIcon from '@/assets/circle-check.svg';
import HomeIcon from '@/assets/home.svg';

const Confirmation = () => (
  <HeroSection subtitle={undefined} title={undefined}>
    <div className='bg-default-bg-default border-default-border flex flex-col items-center gap-6 rounded-lg border p-6'>
      <SvgIcon Icon={CheckCircleIcon} size={12} />
      <div className='flex flex-col gap-2 text-center'>
        <h1 className='text-2xl font-semibold'>Confirmation de votre demande de contact</h1>
        <h2 className='text-default-text-secondary text-xl font-normal'>
          Je vous répondrai dans les plus brefs délais !
        </h2>
      </div>
      <Button
        appearance='primary'
        className={undefined}
        href={INTERNAL_URLS.home}
        icon={HomeIcon}
        type='link'
      >
        Retour à l’accueil
      </Button>
    </div>
  </HeroSection>
);

export default Confirmation;
