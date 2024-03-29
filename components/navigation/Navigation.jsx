import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

//ICON
import home from '../../public/images/navigation/216242_home_icon.svg';
import vk from '../../public/images/navigation/vk-svgrepo-com.svg';
import telegram from '../../public/images/navigation/telegram-logo-svgrepo-com.svg';
import mail from '../../public/images/navigation/email-mail-svgrepo-com.svg';

export default function Navigation() {

  //Icon
  const [ iconHoverVk, setIconHoverVk] = useState(true);
  const [ iconHoverTelegram, setIconHoverTelegram] = useState(true);
  const [ iconHoverEmail, setIconHoverEmail] = useState(true);

  //Close block
  const [ burger, setBurgerClose ] = useState(true)
  let toogleBurger = () => {
    setBurgerClose(!burger);
    setShowMenuItem(!showMenuItem);
  }

  //Menu
  const [ showMenuItem, setShowMenuItem ] = useState(false);

  return (
    <>
      <div className="navigation container-block" style={ showMenuItem ? { background : '' } : { background: 'none' } }>
        <Link href={'/'}>
          <a className="navigation__name">
            Home
          </a>
        </Link>     
        <div className="navigation__panel panel">
          <Link href='/'>
            <a className='home-icon'>
            <div className="panel__icon">
              <Image
                src={home} 
                width={45}
                height={40}
                className="panel__icon"
                alt='vk'
                >
              </Image>
            </div>
            </a>
          </Link>
          <a className={ burger ? '' : 'navigation__media'}  href="https://vk.com/id456864977" target="_blank" rel="noopener noreferrer">
            <div className={iconHoverVk ? 'panel__icon' : 'panel__icon panel__icon-animate-vk'}
              onMouseOver={() => setIconHoverVk(false)}
              onMouseOut={() => setIconHoverVk(true)}
            >
              <Image
                src={vk} 
                width={45}
                height={35}
                className="panel__icon"
                alt='vk'
                >
              </Image>
            </div>
          </a>
          <a className={ burger ? '' : 'navigation__media'} href="https://t.me/falinVladimir" target="_blank" rel="noopener noreferrer">
            <div className={iconHoverTelegram ? "panel__icon" : "panel__icon panel__icon-animate-telegram"}
              onMouseOver={() => setIconHoverTelegram(false)}
              onMouseOut={() => setIconHoverTelegram(true)}
            >
              <Image
                src={telegram} 
                width={45}
                height={35}
                alt='telegram'
                >
              </Image>
            </div>
          </a>
          <a className={ burger ? '' : 'navigation__media'} href="mailto:falinvlad93@rambler.ru" target="_blank" rel="noopener noreferrer">
            <div className={iconHoverEmail ? "panel__icon" : "panel__icon panel__icon-animate-email"}
              onMouseOver={() => setIconHoverEmail(false)}
              onMouseOut={() => setIconHoverEmail(true)}>
              <Image
                src={mail} 
                width={45}
                height={40}
                alt='mail'
                >
              </Image>
            </div>
          </a>
          <div className="panel__burger burger"
            onClick={toogleBurger}>
            <span className={burger ? 'burger__line' : 'burger__line burger__line-one'}></span>
            <span className={burger ? 'burger__line' : 'burger__line burger__line-two'}></span>
          </div>
        </div>
      </div>
      { showMenuItem ? 
        <div className="menu">
          <div className="menu__list">
            <Link href='/'>
              <a className='menu__list-item' onClick={() => {setBurgerClose(true); setShowMenuItem(false)}}>Home</a>
            </Link>
            <Link href='/main'>
              <a className='menu__list-item' onClick={() => {setBurgerClose(true); setShowMenuItem(false)}}>Profile</a>
            </Link>
            <Link href='/main/#section-skill'>
              <a className='menu__list-item' onClick={() => {setBurgerClose(true); setShowMenuItem(false)}}>Skill</a>
            </Link>
            <Link href='/main/#section-profile'>
              <a className='menu__list-item' onClick={() => {setBurgerClose(true); setShowMenuItem(false)}}>Project</a>
            </Link>
          </div>
        </div> : false
      }
    </>
  )
}
