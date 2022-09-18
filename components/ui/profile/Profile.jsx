import React from 'react';
import Image from 'next/image';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

import aboutMe from '../../../public/images/about/IMG_1089MeBg.png';
import aboutMeI from '../../../public/images/about/IMG_1089IBg.png';
import aboutMeYellowBg from '../../../public/images/about/IMG_1089YellowBg2.png';
import aboutMeBlack from '../../../public/images/about/IMG_1089BgBlack.png';

export default function Profile() {
  return (
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
        </div>   
  )
}
