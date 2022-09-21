import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import Navigation from '../navigation/Navigation';
import ParallaxBody from '../parallax/ParallaxBody';
import Image from 'next/image';
import Menu from '../menu/Menu';

import BgMob from '../../public/images/body/h-ygyrw_Mu0.jpg';

export default function layout({title = 'Portfolio', description = '', children, width}) {

  const [ showMenu, setShowMenu] = useState(false)

  const handleShowMenu = (status) => {
    setShowMenu(status);
  }

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
        <Navigation showMenu = { handleShowMenu }  />
    </header>
    { showMenu ? <Menu showMenuBlock = { handleShowMenu } /> : false }
    <div className="parallax-body">
      <ParallaxBody />
    </div> 
    <div className="container">
        {children}
    </div>
  </>
  )
}
