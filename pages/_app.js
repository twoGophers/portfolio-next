import '../styles/global/Imports.scss';

import Head from 'next/head';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import Loader from '../components/Loading/Spinner';
import NProgress from 'nprogress';
NProgress.configure({ showSpinner: false });

let wndowInnerWidth = 0;

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);

useEffect(() => {
  const start = () => {
    setLoading(true);
    NProgress.start();
  };

  const done = () => {
    setLoading(false);
    NProgress.done();
  };

  Router.events.on('routeChangeStart', start);
  Router.events.on('routeChangeComplete', done);
  Router.events.on('routeChangeError', done);

  return () => {
    Router.events.off('routeChangeStart', start);
    Router.events.off('routeChangeComplete', done);
    Router.events.off('routeChangeError', done);
  };
}, []);

  //Вправки для мобильного устройства
  const handleResize = () => {
    const currentWindowInnerWidth = window.innerHeight;
    if (currentWindowInnerWidth !== wndowInnerWidth) {
      wndowInnerWidth = currentWindowInnerWidth;
      const windowInnerHeight = window.innerHeight;
      document.documentElement.style.setProperty('--windowInnerHeight', `${windowInnerHeight}px`);
    }
  };


  //Определение мобтльного устройства
  useEffect(() => {
    const isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);

    if (isMobile) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (isMobile) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
        <meta name="viewport" content="width=device-width, minimal-ui"></meta>
      </Head>
      {loading && <Loader />}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
