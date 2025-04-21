import { Container, Heading, Text } from '@react-email/components';
import parse from 'html-react-parser';
import { Fragment } from 'react';

import { TEXT_DEFAULT_STYLES } from '../../constants/defaultStyles';
import { CONTACT_INFORMATION_LABELS } from '../../constants/labels';
import type { ContactInformationProps, ContactInformationPropsKey } from '../../types/globals';

const ContactInformation = ({
  companyName = '',
  email = '',
  message = '',
  name = ''
}: ContactInformationProps) => {
  const props = { companyName, email, message, name } satisfies ContactInformationProps;

  const sortedLabels = Object.entries(CONTACT_INFORMATION_LABELS).sort(
    ([_, valueA], [__, valueB]) => valueA.position - valueB.position
  );

  return (
    <Container className='mx-auto mt-[64px] rounded-[8px] border-[1px] border-solid border-gray-200 p-[24px]'>
      <Heading as='h3' className='text-[18px] font-semibold text-neutral-900'>
        Voici un récapitulatif des informations fournies :
      </Heading>
      {sortedLabels.map(([key, { position, title }]) => (
        <Fragment key={position}>
          <Heading as='h4' className='my-[16px] text-[16px] font-semibold text-neutral-900'>
            {title}
          </Heading>
          {key === 'message' ? (
            <Text
              className={`${TEXT_DEFAULT_STYLES} rounded-[8px] bg-gray-50 p-[24px] text-gray-600`}
            >
              {parse(props[key as ContactInformationPropsKey].replace(/\r\n|\r|\n/g, '<br />'))}
            </Text>
          ) : (
            <Text className={`${TEXT_DEFAULT_STYLES} text-gray-600`}>
              {props[key as ContactInformationPropsKey]}
            </Text>
          )}
        </Fragment>
      ))}
    </Container>
  );
};

export default ContactInformation;
