import '../styles/global/Imports.scss';

import Head from 'next/head';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import Loader from '../components/Loading/Spinner';
import NProgress from 'nprogress';
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', (url) => {
    setLoading(true);
    NProgress.start();
  })
  Router.events.on('routeChangeComplete', (url) => {
    NProgress.done();
    setLoading(false);
  })

  //Вправки для мобильного устройства
  const handleResize = () => {
    const windowInnerHeight = window.innerHeight;
    document.documentElement.style.setProperty('--windowInnerHeight', `${windowInnerHeight}px`);
  };

  //Определение мобтльного устройства
  useEffect(() => {
    const isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);

    if(isMobile) {
      window.addEventListener("resize", handleResize);
    }
    
    return () => {
      if(isMobile) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {loading && <Loader />}
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
