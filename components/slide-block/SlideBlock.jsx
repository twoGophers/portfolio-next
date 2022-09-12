import React from 'react';
import Link from 'next/link';
import Button from '../ui/button/Button';

import img from '../../public/images/body/Beautiful-sunset-sea-sky-stones-waves-dusk_2560x1600.jpg'

export default function SlideBlock({
  titleOne,
  titleTwo,
  contentOne,
  contentTwo,
  activePortfolio,
  activeImages,
  btn,
  btnActive
  }) {
    console.log(titleOne)
  return (
    <>
        <div className="active-slide">
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
                  <a>
                    <Button text={btn} />
                  </a>
                </Link>: false}
            </div>
          </div>
          <div className="active-slide__illustration illustration" >
            { activeImages ?
              {/* <Image
                width={400}
                height={400}
                src={img}
              /> */} : false
              }              
              {activePortfolio ? 
              <p className='illustration__portfolio'>
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
          </div>
        </div>
    </>
  )
}
