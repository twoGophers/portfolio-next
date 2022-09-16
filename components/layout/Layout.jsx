import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import Navigation from '../navigation/Navigation';
import ParallaxBody from '../parallax/ParallaxBody';
import Image from 'next/image';

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
    <header>
        <Navigation />
    </header>
      { width > 998 ? 
          <div className="parallax-body">
            <ParallaxBody />
          </div> :
        <Image 
          src={BgMob}  
          alt='../../public/images/body/h-ygyrw_Mu0.jpg' 
          layout='fill' 
          objectFit='cover' 
          objectPosition='bottom center'
          />
      }
    <div className="container">
        {children}
    </div>
  </>
  )
}
