import React, {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import Button from '../ui/button/Button';
import Image from 'next/image';
import Slideproject from './SlideProject';
import Profile from '../ui/profile/Profile';

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
  sliderProject,
  skills,
  projects
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
                <Link href={'/main'}>
                  <a style={{ marginLeft: '10px'}} className="link-item">
                    <Button text={btn} />
                  </a>
                </Link>: false}
            </div>
          </div>
          {sliderAbout ?
            <div className={activeImages ? "active-slide__illustration illustration ilustration-img" : false}>
              { activeImages ?
                  <Profile /> : false
                }              
            </div> : false}
          { activeSkill ? 
            <div className="skill">
              <Link href="/main/#section-skill">
                <a className="link-item">
                  { skills && skills.map( icon => (
                    <div className='skill__icon' 
                      key = { icon.id} >
                      <Image 
                        src={require('/public/images/skill/' + icon.icon)}  
                        alt={icon.icon}
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
              <Slideproject project = { projects } />
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