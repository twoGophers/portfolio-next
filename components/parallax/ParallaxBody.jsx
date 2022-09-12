import React, { useEffect } from 'react';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import Parallax from 'parallax-js';

export default function ParallaxBody() {

    useEffect (() => {
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax (scene);
    })


  return (
    <div>
        <div id="scene">
            <div data-depth="0.02">
                <div className='parallax-bg'></div>
            </div>
            <div data-depth="0.09">
                <div className='parallax-cup'></div>
            </div>
            <div data-depth="0.05">
                <div className='parallax-laptop'></div>
            </div>
        </div>
    </div>
  )
}
