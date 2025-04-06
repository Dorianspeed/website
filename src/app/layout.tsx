import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import type { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import '@/styles/globals.css';

import Footer from '@/components/common/footer/Footer';
import Header from '@/components/common/header/Header';

const notoSans = Noto_Sans({
  display: 'swap',
  subsets: ['latin']
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
  <html lang='fr'>
    <body className={`${notoSans.className} antialiased`}>
      <ToastContainer />
      <Header />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
