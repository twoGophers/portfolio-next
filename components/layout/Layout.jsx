import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import Navigation from '../navigation/Navigation';
import ParallaxBody from '../parallax/ParallaxBody';
import Image from 'next/image';
import Menu from '../menu/Menu';

import BgMob from '../../public/images/body/h-ygyrw_Mu0.jpg';

export default function layout({title = 'Portfolio', description = '', children, width}) {

  return (
    <>
    <Head>
        <title>{title}</title>
        <link rel="icon" href="/images/icons8-edit-64.ico" />
        <meta 
            content={description || 'Portfolio'} 
            name="description"/>
        <meta   
            content={description || 'Portfolio'}
            property="og:description"/>
    </Head>
    <div className="parallax-body">
      <ParallaxBody />
    </div> 
    <div className="container" style={{ marginTop: '5%' }}>
        {children}
    </div>
  </>
  )
}
