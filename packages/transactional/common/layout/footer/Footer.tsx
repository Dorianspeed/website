import { Column, Img, Link, Row, Section, Text } from '@react-email/components';

import { TEXT_DEFAULT_STYLES } from '../../../constants/defaultStyles';

//TODO adjust img urls
const Footer = () => (
  <Section className='border-t-[1px] border-solid border-gray-200 p-[32px]'>
    <Row>
      <Column align='center'>
        <Text className={`${TEXT_DEFAULT_STYLES} mt-0 mb-[24px]`}>Dorian Garcia EI</Text>
      </Column>
    </Row>
    <Row>
      <Column align='center'>
        <Link
          className='mr-[16px] inline-block'
          href='https://www.linkedin.com/in/garcia-dorian-dev'
        >
          <Img alt='Logo LinkedIn' height={24} src='/static/linkedin.png' width={24} />
        </Link>
        <Link className='mr-[16px] inline-block' href='https://x.com/Dorian_Speed'>
          <Img alt='Logo X' height={24} src='/static/x.png' width={24} />
        </Link>
        <Link className='inline-block' href='https://github.com/Dorianspeed'>
          <Img alt='Logo GitHub' height={24} src='/static/github.png' width={24} />
        </Link>
      </Column>
    </Row>
    <Row>
      <Column align='center'>
        <Text className={`${TEXT_DEFAULT_STYLES} mt-[24px] mb-[12px]`}>
          11 Impasse du Bois Midy, 27400 La Haye-Malherbe
        </Text>
      </Column>
    </Row>
    <Row>
      <Column align='center'>
        <Link className='text-neutral-900' href='mailto:dorian.garcia.dev@gmail.com'>
          dorian.garcia.dev@gmail.com
        </Link>
      </Column>
    </Row>
  </Section>
);

export default Footer;
