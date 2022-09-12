import Link from 'next/link';

import ParallaxBody from '../components/parallax/ParallaxBody';
import Button from '../components/ui/button/Button';

export default function Custom404() {
    return (
        <>
            <div className="parallax-body">
                <ParallaxBody />
            </div>
            <div className="error">
                <div className="error__message">
                    <p className='error__message-404'>404</p>
                    <span className='error__line'></span>
                    <p className='error__message-text'>This page could not be found.</p>
                </div>
                <Link href={'/'}>
                    <a>
                      <Button text={'Back'} /> 
                    </a>
                </Link>
            </div>
        </>
    )
  }