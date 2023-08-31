import React, { useState } from 'react';
import Head from 'next/head';
import Navigation from '../../components/navigation/Navigation';
import Image from 'next/image';
import { Link, animateScroll as scroll } from "react-scroll";
import LinkItem from 'next/link';

import MyProfile from '../../public/images/about/IMG_1089Bg.png';

export default function Main( {skills, projects, testProjects} ) {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [ projectHover, setPrrojectHover] = useState(true);
  const [ showMenu, setShowMenu] = useState(false);

  const handleShowMenu = (status) => {
    setShowMenu(status);
  }

  return (
    <div>
      <Head>
        <title>basic information</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header style={{ position: 'fixed', background: '#181818'}}>
        <Navigation />
      </header>
        <section className='basic'>
          <div className="my-profile">
            <div className="my-profile__content" >
              <div className="my-profile__content-my">
                <h3>Vladimir</h3>
                <p className='my-profile__content-my-paragraph'>Age: 29 years old</p>
                <p style={{ fontSize: `20px` }}>Frontend - developer</p>
              </div>
              <div className="my-profile__content-about">
                <span className='my-profile__content-my-paragraph'>About me:</span>
                <span>
                  I am engaged in the development of single-page turnkey websites. Whenever possible, I study English and a new introduction to web development, practicing the acquired knowledge. I make a rubber, adaptive Flex layout for mobile devices and tablets.
                </span>
                <span className='my-profile__content-my-paragraph'>Hobby: </span>
                <span>
                  In my free time I play guitar, play online games, walk with cats, watch movies (fantasy, horror, historical and mystical films).
                </span>
              </div>
            </div>
            <div className="my-profile__my-foto">
              <Image 
                src={MyProfile} 
                />
            </div>
          </div>
        </section>

      <hr className='hr-text' />
        { skills &&
            <section className='basic' id='section-skill'>
            <h3>Skills</h3>
            <div className="my-skill">
              { skills && skills.map( item => (
                <div className="my-skill__block" key={item.id}>
                  <span>{item.text}</span>
                  <div className="my-skill__block-progress">
                    <div className="my-skill__block-progress-percent" style={{ width: `${item.persent}%` }}></div>
                    <span>{item.persent}%</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        }

      <hr className='hr-text' />
        { projects &&
          <section className='basic' id='section-profile'>
            <h3>Projects</h3>
            <div className="my-projects">
                { projects && projects.map( item => (
                  <div className='my-projectts__item'  
                    key={item.id}
                    >
                      <LinkItem href={`/project/${item.id}`}>
                        <a>
                        <Image 
                          src={'/images/project/'+ item.imgBg}
                          layout="responsive"
                          width={100}
                          height={70}
                          alt={item.name}
                        />
                        </a>
                      </LinkItem>
                  </div>
                ))}
            </div>
          </section>
        }

      <hr className='hr-text' />
      { testProjects &&
          <section className='basic' id='section-profile'>
          <h3>Test projects</h3>
          <div className="my-projects">
              { testProjects && testProjects.map( item => (
                <div className='my-projectts__item'  
                  key={item.id}
                  >
                    <LinkItem href={item.link}>
                      <a>
                      <Image 
                        src={'/images/projectItem/'+ item.images}
                        layout="responsive"
                        width={100}
                        height={70}
                        alt={item.name}
                      />
                      </a>
                    </LinkItem>
                </div>
              ))}
          </div>
        </section>
      }
 
    </div>
  )
}


//Изменить Апи Запрос на сайте https://my-json-server.typicode.com/
export async function getStaticProps() {
  try {
    const skill = await fetch(`${process.env.API_HOST}/skill`)
    const skills = await skill.json()

    const project = await fetch(`${process.env.API_HOST}/project`)
    const projects = await project.json()

    const testProject = await fetch(`${process.env.API_VERCEL}/item-test`)
    const testProjects = await testProject.json()

    //Если нет ответа, вернет 404
    if(!skills || !projects || !testProjects) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        skills,
        projects,
        testProjects
      },
    }
  } catch {
    return {
      props: {
        skills: null,
        projects: null,
        testProjects: null
      }
    }
  }
}
