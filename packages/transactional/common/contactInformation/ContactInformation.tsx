import { Container, Heading, Text } from '@react-email/components';
import parse from 'html-react-parser';
import type { FC } from 'react';

import type { ContactInformationProps } from '@/types/globals';

import { TEXT_DEFAULT_STYLES } from '@/constants/defaultStyles';

const ContactInformation: FC<ContactInformationProps> = ({
  companyName = 'Casavo',
  email = 'dorian.garcia.dev@gmail.com',
  message = 'Bonjour,\n\nJe vous contacte pour une mise en relation avec un client potentiel.\nPour se faire, j’aurais besoin que l’on fasse une première mise en situation.\n\nMerci de me recontacter,\n\nCordialement,\n\nJean-Michou.',
  name = 'Garcia'
}) => (
  <Container className='mx-auto mt-[64px] rounded-[8px] border-[1px] border-solid border-gray-200 p-[24px]'>
    <Heading as='h3' className='text-[18px] font-semibold text-neutral-900'>
      Voici un récapitulatif des informations fournies :
    </Heading>
    <Text className={`${TEXT_DEFAULT_STYLES} mt-[24px] mb-[12px]`}>
      Votre nom : <strong>{name}</strong>
    </Text>
    <Text className={TEXT_DEFAULT_STYLES}>
      Le nom de votre société : <strong>{companyName}</strong>
    </Text>
    <Text className={TEXT_DEFAULT_STYLES}>
      Votre email : <strong>{email}</strong>
    </Text>
    <Text className={TEXT_DEFAULT_STYLES}>Votre message :</Text>
    <Text className={`${TEXT_DEFAULT_STYLES} rounded-[8px] bg-gray-50 p-[24px]`}>
      {parse(message)}
    </Text>
  </Container>
);

export default ContactInformation;
