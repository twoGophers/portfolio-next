import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Mousewheel } from "swiper";

import { project } from '../../json/db.json';


export default function Slideproject() {

  return (
    <>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        mousewheel={true}
        modules={[EffectCards, Mousewheel]}
        className="mySwiper my-swiper-project"
      >
        { project.map(item => (
          <Link href={'/project/[id]'} as={`/project/${item.id}`} key={item.id}>
            <a>
              <SwiperSlide className='swiper-project__item' >
                <Image 
                  src={require('/public/images/project/' + item.imgBg)} 
                  className='swiper-project__img'
                  />
            </SwiperSlide>
            </a>
          </Link>
        ))}
      </Swiper>
    </>
  )
}
