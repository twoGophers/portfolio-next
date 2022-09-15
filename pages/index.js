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

export default function App({skills, projects}) {

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
                    skills={skills}
                  />
                </>  : false
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                  isActive ? 
                  <> 
                    <SlideBlock 
                      titleOne={'my developed'}
                      titleTwo={'projects'}
                      contentOne={'projects that I have'}
                      contentTwo={'been developing'}
                      btn={'See more'}
                      btnActive={true}
                      sliderActive={true}
                      sliderProject={true}
                      projects={projects}
                    />
                  </>  : false
                )}
            </SwiperSlide>
          </Swiper>
      </Layout>
    </>
  );
}


//Изменить Апи Запрос на сайте https://my-json-server.typicode.com/
export async function getStaticProps() {
  const skill = await fetch(`${process.env.API_URL}/skill`)
  const skills = await skill.json()

  const project = await fetch(`${process.env.API_URL}/project`)
  const projects = await project.json()

  //Если нет ответа, вернет 404
  if(!skills || !projects) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      skills,
      projects
    },
  }
}
