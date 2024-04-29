'use client'

import React, { ReactNode } from 'react';

import { useState, useEffect } from 'react';

import dynamic from 'next/dynamic';

import '@/Components/Sass/globals.scss';

import Head from '@/app/Head';

import { ThemeProvider } from '@/Components/UI/Theme/Thema';

const Header = dynamic(() => import('@/Components/UI/Header/Header'), { ssr: false });

const Footer = dynamic(() => import('@/Components/UI/Footer/Footer'), { ssr: false });

import { RingLoader } from 'react-spinners'

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {loading ? <RingLoader
            color={'#FFCB71'} loading={loading} size={200} cssOverride={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} /> :
            <main>
              <Head />
              <Header />
              {children}
              <Footer />
            </main>
          }
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;