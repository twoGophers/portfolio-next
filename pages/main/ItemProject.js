import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ItemProject({ item }) {

const [ hoverItemProject,  setHoverItemProject ] = useState(false);

  return (
    <>
        <Link href={`/project/${item.id}`}>
            <a>
                <Image 
                src={'/images/project/'+ item.imgBg}
                layout="responsive"
                width={100}
                height={70}
                onMouseOver={() => setHoverItemProject(true)}
                onMouseOut={() => setHoverItemProject(false)}
                />
            </a>
        </Link>
        {/* { hoverItemProject ? 
            <div className="my-projectts__item-hover">
                <Link href={`/project/${item.id}`}>
                    <a className='my-projectts__item-hover-link'>
                        follow the link
                    </a>
                </Link>
            </div>
        : false} */}
    </>
  )
}
