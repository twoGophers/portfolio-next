import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

//ICON
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
  }


  return (
    <div className="navigation container-block">
      <Link href={'/'}>
        <a className="navigation__name">
          Falin Vladimir
        </a>
      </Link>     
      <div className="navigation__panel panel">
        <a href="https://vk.com/id456864977" target="_blank" rel="noreffer">
          <div className={iconHoverVk ? 'panel__icon' : 'panel__icon panel__icon-animate-vk'}
            onMouseOver={() => setIconHoverVk(false)}
            onMouseOut={() => setIconHoverVk(true)}
          >
            <Image
              src={vk} 
              width={45}
              height={35}
              className="panel__icon"
              >
            </Image>
          </div>
        </a>
        <a href="https://t.me/falinVladimir" target="_blank" rel="noreffer">
          <div className={iconHoverTelegram ? "panel__icon" : "panel__icon panel__icon-animate-telegram"}
            onMouseOver={() => setIconHoverTelegram(false)}
            onMouseOut={() => setIconHoverTelegram(true)}
          >
            <Image
              src={telegram} 
              width={45}
              height={35}
              >
            </Image>
          </div>
        </a>
        <a href="mailto:falinvlad93@rambler.ru" target="_blank" rel="noreffer">
          <div className={iconHoverEmail ? "panel__icon" : "panel__icon panel__icon-animate-email"}
            onMouseOver={() => setIconHoverEmail(false)}
            onMouseOut={() => setIconHoverEmail(true)}>
            <Image
              src={mail} 
              width={45}
              height={40}
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
  )
}
