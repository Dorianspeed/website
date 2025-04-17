import { Button, Column, Img, Row, Section } from '@react-email/components';

//TODO add website url
const Header = () => (
  <Section className='border-b-[1px] border-solid border-gray-200 p-[32px]'>
    <Row>
      <Column>
        <Img alt='Logo website' height={32} src='/static/laptop.png' width={32} />
      </Column>
      <Column align='right'>
        <Button className='rounded-[8px] bg-neutral-900 p-[12px] text-white' href='/'>
          Voir le site web
        </Button>
      </Column>
    </Row>
  </Section>
);

export default Header;
