import '../styles/global/Imports.scss';

import Router from 'next/router';
import React, { useState } from 'react';
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

  return (
    <>
      {loading && <Loader />}
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
