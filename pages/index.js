import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import Spinner from '../components/Loading/Spinner';


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import ParallaxBody from '../components/parallax/ParallaxBody';
import SlideBlock from '../components/slide-block/SlideBlock';
import ScrollDown from '../components/navigation/ScrollDown';

// import required modules
import { Mousewheel, Pagination, Navigation, Scrollbar } from "swiper";
import { useRef, useEffect, useState } from 'react';

export default function App() {

  //Переменные
  const refSlideOne = useRef(null);

  //Опредение наличия класса
  // useEffect(() => {
  //     if (refSlideOne.current.classList.contains('swiper-slide-active')) {
  //     console.log('Element contains class');
  //   } else {
  //     console.log('Element does NOT contain class');
  //   }
  // }, []);

  return (
    <>
      <Head>
        <title>Portfolio Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
          <div className="parallax-body">
            <ParallaxBody />
          </div> 
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={0}
            mousewheel={true}
            pagination={{
              clickable: true
            }}
            scrollbar={{
              hide: true
            }}
            speed={ 1000 }
            modules={[Mousewheel, Pagination, Navigation, Scrollbar]}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            // onReachBeginning={() => { setShowScrollDown(true)}}
          >
            <SwiperSlide ref={refSlideOne} >
            {({ isActive }) => (
              isActive ? 
              <>
                <ScrollDown/> 
                <SlideBlock 
                  titleOne={'vladimir'}
                  titleTwo={'falin'}
                  contentOne={'web designer /'}
                  contentTwo={'markup engineer.'}
                  activePortfolio={true}
                  activeImages={false}
                  btn={''}
                  btnActive={false}
                  sliderActive={false}
                  sliderAbout={false}
                />
              </>  : false
            )}
            
            </SwiperSlide>
            <SwiperSlide>
            {({ isActive }) => (
              isActive ? 
              <> 
                <SlideBlock 
                  titleOne={'Information'}
                  titleTwo={'about me'}
                  contentOne={'I love Design, Technology,'}
                  contentTwo={'and Story.'}
                  activePortfolio={false}
                  activeImages={true}
                  btn={'See more'}
                  btnActive={true}
                  sliderActive={true}
                  sliderAbout={true}
                />
              </>  : false
            )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                isActive ? 
                <> 
                  <SlideBlock 
                    titleOne={'my skill'}
                    titleTwo={''}
                    contentOne={'Life is development'}
                    contentTwo={''}
                    activePortfolio={false}
                    activeSkill={true}
                    btn={'Skill'}
                    btnActive={true}
                    sliderActive={true}
                    sliderAbout={false}
                  />
                </>  : false
              )}
            </SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
      </Layout>
    </>
  );
}
