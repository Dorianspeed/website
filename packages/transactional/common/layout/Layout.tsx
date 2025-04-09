import Footer from './footer/Footer';
import Header from './header/Header';
import { Body, Head, Html, Tailwind } from '@react-email/components';
import type { FC, PropsWithChildren } from 'react';

export type LayoutProps = {
  metaTitle: string;
} & PropsWithChildren;

const Layout: FC<LayoutProps> = ({ children, metaTitle }) => (
  <Html lang='fr'>
    <Head>
      <title>{metaTitle}</title>
    </Head>
    <Tailwind>
      <Body>
        <Header />
        {children}
        <Footer />
      </Body>
    </Tailwind>
  </Html>
);

export default Layout;
