import React, {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import Button from '../ui/button/Button';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import Image from 'next/image';
import Slideproject from './Slideproject';
import {skill} from '../../json/db.json';

import aboutMe from '../../public/images/about/IMG_1089MeBg.png';
import aboutMeI from '../../public/images/about/IMG_1089IBg.png';
import aboutMeYellowBg from '../../public/images/about/IMG_1089YellowBg2.png';
import aboutMeBlack from '../../public/images/about/IMG_1089BgBlack.png';

export default function SlideBlock({
  titleOne,
  titleTwo,
  contentOne,
  contentTwo,
  activePortfolio,
  activeImages,
  btn,
  btnActive,
  sliderActive,
  activeSkill,
  sliderAbout,
  sliderProject
  }) {


  return (
    <>
        <div className={sliderActive ? 'active-slide active-slide-two' : 'active-slide '}>
          <div className="active-slide__context context">
            <div className="context__title">
              <span>{titleOne}</span>
              <span className='context__title-last'>{titleTwo}</span>
            </div>
            <div className="context__two-line">
              <span></span>
              <span className='context__two-line-two'></span>
            </div>
            <div className="context__essence">
              <p>{contentOne}</p>
              <p>{contentTwo}</p>
            </div>
            <div className="context__btn-button">
              {btnActive ? 
                <Link href={'/'}>
                  <a style={{ marginLeft: '10px'}}>
                    <Button text={btn} />
                  </a>
                </Link>: false}
            </div>
          </div>
          {sliderAbout ?
            <div className={activeImages ? "active-slide__illustration illustration ilustration-img" : false}>
              { activeImages ?
                  <div className='about-me'>
                    <MouseParallaxContainer
                      className="parallax-about"
                    >
                      <MouseParallaxChild
                        className="parallax-about__item"
                        factorX={0.01}
                        factorY={0.01}
                        updateStyles={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Image src={aboutMe} />
                      </MouseParallaxChild>
                      <MouseParallaxChild
                        className="parallax-about__item"
                        factorX={0.07}
                        factorY={0.07}
                        updateStyles={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Image src={aboutMeI} />
                      </MouseParallaxChild>
                      <MouseParallaxChild
                        className="parallax-about__item"
                        factorX={0.09}
                        factorY={0.09}
                        updateStyles={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Image src={aboutMeYellowBg} />
                      </MouseParallaxChild>
                      <MouseParallaxChild
                          className="parallax-about__item"
                          factorX={0.09}
                          factorY={0.09}
                          updateStyles={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                        <Image src={aboutMeBlack} />
                      </MouseParallaxChild>
                    </MouseParallaxContainer>
                  </div> : false
                }              
            </div> : false}
          { activeSkill ? 
            <div className="skill">
              <Link href="/">
                <a>
                  { skill.map( icon => (
                    <div className='skill__icon' 
                      key = { icon.id} >
                      <Image 
                        src={require('/public/images/skill/' + icon.icon)}   
                      />
                    <p>{ icon.text }</p>
                  </div>
                  )) } 
                </a>
              </Link>
            </div> : false
          }
          { sliderProject ? 
            <div className='project'>
              <Slideproject />
            </div> : false
          }  
        </div>              
        {activePortfolio ? 
          <p className='portfolio'>
            <span>P</span>
            <span>O</span>
            <span>R</span>
            <span>T</span>
            <span>F</span>
            <span>O</span>
            <span>L</span>
            <span>I</span>
            <span>O</span>
        </p> : false}
    </>
  )
}

//Изменить Апи Запрос на сайте https://my-json-server.typicode.com/
// export async function getStaticProps() {
//   const res = await fetch('https://my-json-server.typicode.com/')
//   const skills = await res.json();

//   console.log(skills)

//   return {
//     props: {
//       skills,
//     }
//   }
// }