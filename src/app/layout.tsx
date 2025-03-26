import './globals.css';
import type { Metadata } from 'next';
import { Roboto, Roboto_Mono } from 'next/font/google';

import Header from '@/components/common/header/Header';

const robotoSans = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto-sans'
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono'
});

export const metadata: Metadata = {
  description: 'Site vitrine de Dorian Garcia - Développeur web front-end',
  title: 'Dorian Garcia - Développeur web front-end'
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='fr'>
      <body className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
