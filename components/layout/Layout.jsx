import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import Navigation from '../navigation/Navigation';
import ParallaxBody from '../parallax/ParallaxBody';

export default function layout({title = 'Portfolio', description = '', children}) {

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
    <div className="parallax-body">
      <ParallaxBody />
    </div> 
    <div className="container">
        {children}
    </div>
  </>
  )
}
