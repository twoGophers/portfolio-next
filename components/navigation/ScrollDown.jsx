import React from 'react';
import Image from 'next/image';

import arrow from '../../public/images/navigation/4829869_arrow_next_right_icon.svg';

export default function ScrollDown() {
  return (
    <>
        <div className='skroll-down'>
            <div className="scroll-dow__block">
              <p className='scoll-down__text'>scrolldown</p>
              <Image
                src={arrow}
                className='skroll-down__vector'
              />
            </div>
        </div>
    </>
  )
}
