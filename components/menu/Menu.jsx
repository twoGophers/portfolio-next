import React from 'react';
import Link from 'next/link';

export default function Menu({ showMenuBlock }) {

const showMenuActive = () => {
    showMenuBlock(false)
}

  return (
    <>
        <div className="menu">
        <div className="menu__list">
          <Link href='/'>
            <a className='menu__list-item' onClick={ showMenuActive }>Home</a>
          </Link>
          <Link href='/main'>
            <a className='menu__list-item' onClick={ showMenuActive }>Profile</a>
          </Link>
          <Link href='/main'>
            <a className='menu__list-item' onClick={ showMenuActive }>Skill</a>
          </Link>
          <Link href='/main'>
            <a className='menu__list-item' onClick={ showMenuActive }>Project</a>
          </Link>
        </div>
      </div>
    </>
  )
}
