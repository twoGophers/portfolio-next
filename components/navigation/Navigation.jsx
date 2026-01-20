import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

//ICON
import home from '../../public/images/navigation/216242_home_icon.svg';
import project from '../../public/images/navigation/task_planning_scheduling_roadmap_project_plan_project_management_icon_262962.svg';
import vk from '../../public/images/navigation/vk-svgrepo-com.svg';
import telegram from '../../public/images/navigation/telegram-logo-svgrepo-com.svg';
import mail from '../../public/images/navigation/email-mail-svgrepo-com.svg';

export default function Navigation() {

  //Icon
  const [iconHoverVk, setIconHoverVk] = useState(true);
  const [iconHoverTelegram, setIconHoverTelegram] = useState(true);
  const [iconHoverEmail, setIconHoverEmail] = useState(true);
  const router = useRouter();

  //Close block
  const [burger, setBurgerClose] = useState(true)
  let toogleBurger = () => {
    setBurgerClose(!burger);
    setShowMenuItem(!showMenuItem);
  }

  //Menu
  const [showMenuItem, setShowMenuItem] = useState(false);



  return (
    <>
      <div className="navigation container-block container" style={showMenuItem ? { background: '' } : { background: 'none' }}>
        <Link href={`${router.route === '/' ? '/main' : '/'}`}>
          <a className="navigation__name">
            {router.route === '/' ? 'Projects' : 'Home'}
          </a>
        </Link>
        <div className="navigation__panel panel">
          <Link href={`${router.route === '/' ? '/main' : '/'}`}>
            <a className='home-icon'>
              <div className="panel__icon">
                {
                  router.route !== '/' ? (
                    <Image
                      src={home}
                      width={45}
                      height={40}
                      className="panel__icon"
                      alt='home'
                    >
                    </Image>
                  ) : (
                    <svg height={40} clipRule="evenodd" fillRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 2667 2667" xmlns="http://www.w3.org/2000/svg"><g id="Layer_x0020_1"><circle cx="1333" cy="1333" fill="#1d81ce" r="1333"></circle><path d="m2006 2116c-92 0-168-75-168-168v-958l3-12 141-291c10-20 39-20 48 0l142 291c2 4 3 9 2 13v957c0 93-75 168-168 168zm-356 71h-1060c-54 0-98-44-98-98v-1391c0-53 44-97 98-97h240c14-69 75-121 148-121h284c73 0 133 52 147 121h241c53 0 97 44 97 97v1391c0 54-44 98-97 98zm-822-1533h-238c-25 0-44 20-44 44v1391c0 25 19 44 44 44h1060c24 0 44-19 44-44v-1391c0-24-20-44-44-44h-238v100c0 14-12 26-27 26h-531c-15 0-26-12-26-26zm53 73h477v-97c0-53-43-97-96-97h-284c-54 0-97 44-97 97zm285 183h-465c-35 0-35-53 0-53h465c35 0 35 53 0 53zm-111 150h-354c-35 0-35-53 0-53h354c35 0 35 53 0 53zm-152 160h-202c-35 0-35-54 0-54h202c35 0 35 54 0 54zm190 316c-74-13-131-78-131-156 0-87 71-157 158-157s158 70 158 157c0 78-57 143-132 156v101h308c13 0 26 11 26 27v153h66c15 0 27 12 27 27v122c0 15-12 27-27 27h-186c-15 0-27-12-27-27v-122c0-15 12-27 27-27h66v-127h-280v60c59 13 103 65 103 127 0 71-58 129-129 129-72 0-130-58-130-129 0-62 44-114 103-127v-60h-280v127h66c15 0 27 12 27 27v186c0 15-12 27-27 27h-186c-15 0-27-12-27-27v-186c0-15 12-27 27-27h67v-153c0-15 11-27 26-27h307zm27-260c-58 0-105 47-105 104 0 58 47 105 105 105 57 0 104-47 104-105 0-57-47-104-104-104zm-400 728h133v-134h-133zm666-64h134v-70h-134zm-266-139c-42 0-76 34-76 76s34 76 76 76 76-34 76-76-34-76-76-76zm840-221c-14 0-26-12-26-26v-320c0-35 53-35 53 0v320c0 14-12 26-27 26zm92-72c-14 0-26-12-26-27v-174c0-35 53-35 53 0v174c0 15-12 27-27 27zm-160 325v115c0 63 51 115 114 115 64 0 115-52 115-115v-115zm16-870h197l-99-203zm-16 817h229v-764h-229z" fill="#fff"></path></g></svg>)
                }

              </div>
            </a>
          </Link>
          {/* <a className={ burger ? '' : 'navigation__media'}  href="https://vk.com/id456864977" target="_blank" rel="noopener noreferrer">
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
          </a> */}
          <a className={burger ? '' : 'navigation__media'} href="https://t.me/userName333221" target="_blank" rel="noopener noreferrer">
            <div className={` icon-glow ${iconHoverTelegram ? "panel__icon" : "panel__icon panel__icon-animate-telegram"}`}
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
          <a className={burger ? '' : 'navigation__media'} href="mailto:falinvladimir93md@gmail.com" target="_blank" rel="noopener noreferrer">
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
          <div className={`panel__burger burger ${burger ? 'active' : ''}`}
            onClick={toogleBurger}>
            <span className={burger ? 'burger__line' : 'burger__line burger__line-one'}></span>
            <span className={burger ? 'burger__line' : 'burger__line burger__line-two'}></span>
          </div>
        </div>
      </div>
      {showMenuItem ?
        <div className="menu">
          <div className="menu__list">
            <Link href='/'>
              <a className='menu__list-item' onClick={() => { setBurgerClose(true); setShowMenuItem(false) }}>Home</a>
            </Link>
            <Link href='/main'>
              <a className='menu__list-item' onClick={() => { setBurgerClose(true); setShowMenuItem(false) }}>Profile</a>
            </Link>
            <Link href='/main/#section-skill'>
              <a className='menu__list-item' onClick={() => { setBurgerClose(true); setShowMenuItem(false) }}>Skill</a>
            </Link>
            <Link href='/main/#section-profile'>
              <a className='menu__list-item' onClick={() => { setBurgerClose(true); setShowMenuItem(false) }}>Project</a>
            </Link>
          </div>
        </div> : false
      }
    </>
  )
}
