import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import type { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import '@/styles/globals.css';

import Footer from '@/components/common/footer/Footer';
import Header from '@/components/common/header/Header';

const notoSans = Noto_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-noto-sans'
});

export const metadata: Metadata = {
  description: 'Site vitrine de Dorian Garcia - Développeur web front-end',
  title: 'Dorian Garcia - Développeur web front-end'
};

const RootLayout = ({
  children
}: Readonly<{
  children: ReactNode;
}>) => (
  <html className='scroll-smooth' lang='fr'>
    <body
      className={`bg-default-bg-default text-brand-text-secondary font-sans antialiased ${notoSans.variable}`}
    >
      <ToastContainer />
      <Header />
      <main className='mt-[89px] h-full md:mt-0'>{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
