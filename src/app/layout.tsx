'use client'

import React, { ReactNode } from 'react';

import dynamic from 'next/dynamic';

import '@/Components/Sass/globals.scss';

import Head from '@/app/Head';

import { ThemeProvider } from '@/Components/UI/Theme/Thema';

const Header = dynamic(() => import('@/Components/UI/Header/Header'), { ssr: false });

const Footer = dynamic(() => import('@/Components/UI/Footer/Footer'), { ssr: false });

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {

  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <main>
            <Head />
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;