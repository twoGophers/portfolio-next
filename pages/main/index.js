import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navigation from '../../components/navigation/Navigation';
import Image from 'next/image';
import { Link, animateScroll as scroll } from "react-scroll";
import LinkItem from 'next/link';
import { ComparisonSlider } from 'react-comparison-slider';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

//img
import MyProfile from '../../public/images/about/IMG_1089Bg.png';
import MyProfile1 from '../../public/images/about/IMG_1089Bg1.png';

const Chart = dynamic(() => import('../../components/chart/Chart'), {
  ssr: false, 
});

export default function Main( {skills, projects, testProjects} ) {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [ projectHover, setPrrojectHover] = useState(true);
  const [ showMenu, setShowMenu] = useState(false);
  const [ showSkills, setShowSkills ] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);

  const handleShowMenu = (status) => {
    setShowMenu(status);
  };

  

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);

      // Attach an event listener to the window to listen for resize events
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
  });

  const fadeInVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
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

                <AnimateH3 title="Vladimir" />

                <p className='my-profile__content-my-paragraph'>Age: 30 years old</p>
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
            <ComparisonSlider
              defaultValue={50}
              itemOne={ <Image src={MyProfile} /> }
              itemTwo={ <Image src={MyProfile1} /> }
              aspectRatio={16 / 9}
              orientation="horizontal"
            />
            </div>
          </div>
        </section>
      <hr className='hr-text' />
      {
        skills && 
          <section className='basic basic-block' id='section-skill'>

              <AnimateH3 title="Skills" />

            {
              !showSkills ?
                <button className='btn-skill' onClick={() => setShowSkills(true)}>All skills</button>
              :
                <button className='btn-skill' onClick={() => setShowSkills(false)}>Chart</button>
            }
            {
              showSkills ? 
              <>
                <motion.div 
                    className="my-skill"
                >
                  <AnimatePresence>
                    {skills
                      .filter(item => item.filter)
                      .slice()
                      .sort((a, b) => a.filter.localeCompare(b.filter))
                      .map((item, index) => (
                        <motion.div 
                          className="my-skill__block" 
                          key={item.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.1 * index,
                          }}
                        >
                          <span>{item.text}</span>
                          <div className="my-skill__block-progress">
                            <motion.div 
                              className="my-skill__block-progress-percent" 
                              initial={{ width: 0 }}
                              animate={{ width: `${item.persent}%` }}
                              transition={{
                                duration: 0.5,
                                delay: 0.1 * index,
                              }}
                              
                            ></motion.div>
                            <span>{item.persent}%</span>
                          </div>
                        </motion.div>
                      ))}
                  </AnimatePresence>
                </motion.div>
              </> 
              :
              <div className='my-skill-chart'>
                <div className='my-skill-chart-block'>
                  <p className='my-skill-chart__title'>Style</p>
                  <Chart data={skills.filter((item => item.filter === 'style'))} width={ windowWidth < 500 ? 400 : 500 } height={windowWidth < 500 ? 200 : 250}  />
                </div>
                <div className='my-skill-chart-block'>
                  <p className='my-skill-chart__title'>Data base</p>
                  <Chart data={skills.filter((item => item.filter === 'db'))} width={ windowWidth < 500 ? 400 : 500 } height={windowWidth < 500 ? 200 : 250}  />
                </div>
                <div className='my-skill-chart-block'>
                  <p className='my-skill-chart__title'>Language</p>
                  <Chart data={skills.filter((item => item.filter === 'language'))} width={ windowWidth < 500 ? 400 : 500 } height={windowWidth < 500 ? 200 : 250}  />
                </div>
                <div className='my-skill-chart-block'>
                  <p className='my-skill-chart__title'>Backend</p>
                  <Chart data={skills.filter((item => item.filter === 'backend'))} width={ windowWidth < 500 ? 400 : 500 } height={windowWidth < 500 ? 200 : 250}  />
                </div>
              </div>
            }
          </section>
      }

      <hr className='hr-text' />
      {
        projects &&
          <section className='basic basic-block' id='section-profile'>
            
            <AnimateH3 title="Projects" />

            <div className="my-projects">
                { projects.map( item => (
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
          <section className='basic basic-block' id='section-profile'>

            <AnimateH3 title="Test projects" />

            <div className="my-projects">
                { testProjects.map( item => (
                  <AnimateItem item={item} key={item.id} />
                ))}
            </div>
          </section>
        }

    </motion.div>
  )


  
  function AnimateH3({ title }) {
    const [ref, inView] = useInView({
      triggerOnce: true, // Trigger the animation only once
    });

    const fadeInVariants = {
      hidden: { opacity: 0, x: -200 },
      visible: { opacity: 1, x: 0 },
    };

    return (
      <motion.h3
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{
          duration: 0.5,
        }}
      >
        {title}
      </motion.h3>
    );
  }


  function AnimateItem({ item }) {
    const [ref, inView] = useInView({
      triggerOnce: true, // Trigger the animation only once
    });

    const fadeInVariants = {
      hidden: { opacity: 0, y: 0 },
      visible: { opacity: 1, y: 0 },
    };

    return (
      <motion.div 
        className='my-projectts__item'  
        key={item.id}
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{
          duration: 0.5,
        }}
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
      </motion.div>
    );
  }
}


//Изменить Апи Запрос на сайте https://my-json-server.typicode.com/
export async function getStaticProps() {
  try {
    // const skill = await fetch(`${process.env.API_HOST}/skill`)
    const skill = await fetch('https://my-json-server.typicode.com/twoGophers/portfolio-next/skill')
    const skills = await skill.json()

    // const project = await fetch(`${process.env.API_HOST}/project`)
    const project = await fetch('https://my-json-server.typicode.com/twoGophers/portfolio-next/project')
    const projects = await project.json()

    // const testProject = await fetch(`${process.env.API_VERCEL}/item-test`)
    const testProject = await fetch('https://portfolio-next-pi.vercel.app/api/item-test')
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