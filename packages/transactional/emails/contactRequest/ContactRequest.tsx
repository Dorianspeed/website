import { Container, Text } from '@react-email/components';

import ContactInformation from '../../common/contactInformation/ContactInformation';
import HeroSection from '../../common/heroSection/HeroSection';
import Layout from '../../common/layout/Layout';
import { TEXT_DEFAULT_STYLES } from '../../constants/defaultStyles';
import type { ContactInformationProps } from '../../types/globals';

const ContactRequest = (contactInfoProps: ContactInformationProps) => (
  <Layout metaTitle='Demande de contact'>
    <HeroSection
      subtitle='À répondre dans les plus brefs délais !'
      title='Réception d’une nouvelle demande de contact'
    />
    <ContactInformation {...contactInfoProps} />
    <Container className='p-[32px]'>
      <Text className={TEXT_DEFAULT_STYLES}>Bonne réception !</Text>
      <Text className={TEXT_DEFAULT_STYLES}>
        <strong>Dorian</strong>.
      </Text>
    </Container>
  </Layout>
);

export default ContactRequest;
