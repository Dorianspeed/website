import { HOME_URL } from '@/constants/globals';

import HeroSection from '@/components/common/heroSection/HeroSection';

import CheckCircleIcon from '@/assets/check-circle.svg';
import HomeIcon from '@/assets/home.svg';

const Confirmation = () => {
  return (
    <main>
      <HeroSection subtitle={undefined} title={undefined}>
        <div className='bg-default-bg-default border-default-border flex flex-col gap-6 rounded-lg border p-6'>
          <div className='mx-auto size-12'>
            <CheckCircleIcon aria-hidden={true} />
          </div>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold'>Confirmation de votre demande de contact</h1>
            <h2 className='text-default-text-secondary text-xl font-normal'>
              Je vous répondrai dans les plus brefs délais !
            </h2>
          </div>
          <a className='btn btn-primary mx-auto' href={HOME_URL}>
            <div className='size-4 shrink-0'>
              <HomeIcon aria-hidden={true} />
            </div>
            Retour à l’accueil
          </a>
        </div>
      </HeroSection>
    </main>
  );
};

export default Confirmation;
