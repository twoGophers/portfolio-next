import React, { useEffect, useRef } from 'react';
import   Parallax  from 'parallax-js';

export default function ParallaxBody() {

    const sceneBody = useRef(null);

    useEffect(() => {
      const parallaxInstance = new Parallax(sceneBody.current, {
        relativeInput: true,
        hoverOnly: true
      })
  
      parallaxInstance.enable();
      return () => parallaxInstance.disable();
    }, [])


  return (
    <div>
        <div ref={sceneBody}>
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
