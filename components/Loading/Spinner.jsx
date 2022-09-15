import React from 'react';
import Image from 'next/image';

import SpinnerSvg from '../../public/images/spinner/spinner.svg';

export default function Spinner() {
  return (
    <>
        <div className='spinner'>
            <div className="spinner-img">
                <Image src={SpinnerSvg} alt='spinner'></Image>
                <div className='spinner-text'>Loading...</div>
            </div>
        </div>
    </>
  )
}
