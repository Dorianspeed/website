import HeroSection from '../common/heroSection/HeroSection';

const LegalNotice = () => (
  <main className='h-full'>
    <HeroSection subtitle={undefined} title='Mentions légales' />
    <section className='flex flex-col gap-12 p-6 md:gap-16 md:p-16'>
      <div>
        <h2 className='mb-6 text-2xl font-semibold'>Société</h2>
        <p className='text-base font-normal'>
          Dorian Garcia EI est une société située au 11 Impasse du Bois Midy 27400 La Haye-Malherbe.
        </p>
        <p className='text-base font-normal'>
          Elle est immatriculée au R.C.S Evreux sous le numéro 928 033 141.
        </p>
        <p className='text-base font-normal'>
          Pour tout demande concernant celle-ci, veuillez utiliser le contact suivant :{' '}
          <a
            className='font-semibold hover:underline'
            href='mailto:dorian.garcia.dev@gmail.com'
            rel='noopener noreferrer'
          >
            dorian.garcia.dev@gmail.com
          </a>
          .
        </p>
      </div>
      <div>
        <h2 className='mb-6 text-2xl font-semibold'>Hébergement du site</h2>
        <p className='text-base font-normal'>Le site est hébergé sur Vercel.</p>
      </div>
      <div>
        <h2 className='mb-6 text-2xl font-semibold'>Collecte des données</h2>
        <p className='text-base font-normal'>
          Aucune donnée n’est collectée sans l’accord tacite de l’utilisateur.
        </p>
      </div>
      <div>
        <h2 className='mb-6 text-2xl font-semibold'>Utilisation des cookies</h2>
        <p className='text-base font-normal'>Aucun cookie n'est utilisé sur ce site.</p>
      </div>
    </section>
  </main>
);

export default LegalNotice;
