import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { AppProps } from 'next/dist/shared/lib/router/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { ColorModeScript } from 'nextjs-color-mode';
import React, { PropsWithChildren } from 'react';

import Footer from 'components/Footer';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import NavigationDrawer from 'components/NavigationDrawer';
import NewsletterModal from 'components/NewsletterModal';
import WaveCta from 'components/WaveCta';
import { NavItems } from 'types';

const navItems: NavItems = [
  { title: 'About Us', href: '/about' },
  { title: 'Our Services', href: '/services' },
  { title: 'Products', href: '/products' },
  { title: 'Partnership', href: '/partnership' },
  { title: 'Contact', href: '/contact', outlined: true },
];


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PT. Mitra Kawan Bersama - Your Trusted Industrial Partner</title>
        <meta name="description" content="PT. Mitra Kawan Bersama adalah perusahaan distribusi produk industri terpercaya sejak 2010. Menyediakan solusi terpadu untuk kebutuhan industri Anda dengan kualitas dan pelayanan terbaik." />
        <meta name="keywords" content="distribusi industri, produk industri, industrial equipment, chemical products, safety equipment, Indonesia" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* <link rel="alternate" type="application/rss+xml" href={EnvVars.URL + 'rss'} title="RSS 2.0" /> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-117119829-1', 'auto');
          ga('send', 'pageview');`,
          }}
        /> */}
        {/* <script async src="https://www.google-analytics.com/analytics.js"></script> */}
      </Head>
      <ColorModeScript />
      <GlobalStyle />

      <Providers>
        {/* <Modals /> */}
        <Navbar items={navItems} />
          <Component {...pageProps} />
        <WaveCta />
        <Footer />
      </Providers>
    </>
  );
}

function Providers<T>({ children }: PropsWithChildren<T>) {
  return (
      <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
  );
}

function Modals() {

  return <NewsletterModal onClose={() => console.log("close")} />;
}

export default MyApp;
