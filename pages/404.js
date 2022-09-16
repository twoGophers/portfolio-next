import Link from 'next/link';
import React, { useEffect, useState } from 'react'

import ParallaxBody from '../components/parallax/ParallaxBody';
import Button from '../components/ui/button/Button';
import Image from 'next/image';

import ImgMob from '../public/images/body/h-ygyrw_Mu0.jpg';

export default function Custom404() {

  //Ширина браузера
  const [widthWindow, setWidthWindow] = useState(null);

  useEffect(()=> {
    window.addEventListener('resize', ()=> {
        setWidthWindow(window.innerWidth)
    })
  }, [])

    return (
        <>
            { widthWindow > 998 ? 
                <div className="parallax-body">
                    <ParallaxBody />
                </div> :
                <Image 
                    src={ImgMob}  
                    alt='../../public/images/body/h-ygyrw_Mu0.jpg' 
                    layout='fill' 
                    objectFit='cover' 
                    objectPosition='bottom center'
                />
            }
            <div className="error">
                <div className="error__message">
                    <p className='error__message-404'>404</p>
                    <span className='error__line'></span>
                    <p className='error__message-text'>This page could not be found.</p>
                </div>
                <Link href={'/'}>
                    <a>
                      <Button text={'Back'} /> 
                    </a>
                </Link>
            </div>
        </>
    )
  }