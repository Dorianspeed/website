import { Heading, Section } from '@react-email/components';

export type HeroSectionProps = {
  subtitle: string;
  title: string;
};

const HeroSection = ({ subtitle, title }: HeroSectionProps) => (
  <Section className='bg-gray-100 p-[32px] text-center'>
    <Heading as='h1' className='text-[24px] font-semibold text-neutral-900'>
      {title}
    </Heading>
    <Heading as='h2' className='text-[20px] font-normal text-gray-500'>
      {subtitle}
    </Heading>
  </Section>
);

export default HeroSection;
