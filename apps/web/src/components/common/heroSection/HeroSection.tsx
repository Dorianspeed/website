import type { PropsWithChildren } from 'react';

export type HeroSectionProps = {
  subtitle: string | undefined;
  title: string | undefined;
};

const HeroSection = ({ children, subtitle, title }: PropsWithChildren<HeroSectionProps>) => {
  if (!children && !subtitle && !title) {
    return null;
  }

  return (
    <section className='bg-brand-bg-tertiary px-6 py-40'>
      {title && <h1 className='text-center text-5xl font-bold md:text-7xl'>{title}</h1>}
      {subtitle && (
        <h2 className='text-default-text-secondary mt-2 text-center text-[32px] font-normal first:mt-0'>
          {subtitle}
        </h2>
      )}
      {children && (
        <div className='mx-auto mt-8 w-fit only:mt-0' data-testid='children'>
          {children}
        </div>
      )}
    </section>
  );
};

export default HeroSection;
