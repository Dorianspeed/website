import { Body, Head, Html, Tailwind } from '@react-email/components';
import type { PropsWithChildren } from 'react';

import Footer from './footer/Footer';
import Header from './header/Header';

export type LayoutProps = {
  metaTitle: string;
};

const Layout = ({ children, metaTitle }: PropsWithChildren<LayoutProps>) => (
  <Html lang='fr'>
    <Head>
      <title>{metaTitle}</title>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100..900&display=swap');

          * {
            font-family: 'Noto Sans', Helvetica, sans-serif;
          }
        `}
      </style>
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
