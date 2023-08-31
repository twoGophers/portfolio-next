import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Mousewheel } from "swiper";


export default function Slideproject({ project }) {

const [ screenWidth, setScreenWidth] = useState(window.innerWidth);

useEffect(() => {
  const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        mousewheel={true}
        modules={[EffectCards, Mousewheel]}
        className=" my-swiper-project"
        >
        {/* { project.map(item => (
          <SwiperSlide className='swiper-project__item' key={item.id}>
            <Link href={`/project/${item.id}`}>
              <a>
                { screenWidth < 998 && screenWidth > 460 ?
                  <Image 
                    src={require('/public/images/project/' + item.imgPlan)} 
                    className='swiper-project__img'
                    alt={item.name}
                  /> :
                  <Image 
                    src={require('/public/images/project/' + item.imgBg)} 
                    className='swiper-project__img'
                    alt={item.name}
                  />
                }  
              </a>
            </Link>
          </SwiperSlide>
        ))} */}
      </Swiper>
    </>
  )
}
