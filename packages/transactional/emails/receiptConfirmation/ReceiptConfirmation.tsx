import { Container, Text } from '@react-email/components';
import type { FC } from 'react';

import type { ContactInformationProps } from '@/types/globals';

import { TEXT_DEFAULT_STYLES } from '@/constants/defaultStyles';

import ContactInformation from '@/common/contactInformation/ContactInformation';
import HeroSection from '@/common/heroSection/HeroSection';
import Layout from '@/common/layout/Layout';

export const ReceiptConfirmation: FC<ContactInformationProps> = (contactInfoProps) => (
  <Layout metaTitle='Accusé de réception'>
    <HeroSection
      subtitle='Votre demande de contact a bien été prise en compte !'
      title='Accusé de réception'
    />
    <ContactInformation {...contactInfoProps} />
    <Container className='p-[32px]'>
      <Text className={TEXT_DEFAULT_STYLES}>
        Je vous répondrai dans les meilleurs délais, merci de votre compréhension !
      </Text>
      <Text className={TEXT_DEFAULT_STYLES}>Bien cordialement,</Text>
      <Text className={TEXT_DEFAULT_STYLES}>
        <strong>Dorian Garcia</strong>.
      </Text>
    </Container>
  </Layout>
);

export default ReceiptConfirmation;
