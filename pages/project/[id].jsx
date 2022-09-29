import { useState } from 'react';
import Navigation from '../../components/navigation/Navigation';
import Head from 'next/head';
import Link from 'next/link';
import Button from '../../components/ui/button/Button';
import Menu from '../../components/menu/Menu';

export default function SingleProject({ project }) {
  if(!project) {
    return 'There is no project'
  }

  return (
    <>
      <Head>
        <title>{project.name}</title>
      </Head>

      <header style={{ position: 'sticky', background: '#181818'}}>
        <Navigation  />
      </header>
        <div className="project-item id-project">  
          <div className="id-project__item">
              {/* <div className="id-project__item-block id-project__item-block-one">
                <img 
                    src={'/images/project/' + project.imgBg}
                    alt={project.name}
                    className='id-project__item-img-native-bg'
                    />
              </div>
              <div className="id-project__item-block id-project__item-block-two">
                <img 
                    src={'/images/project/' + project.imgPlan}
                    alt={project.name}
                    className='id-project__item-img-native-plan'
                  />
              </div>
              <div className="id-project__item-block id-project__item-block-three">
                <img 
                  src={'/images/project/' + project.imgMob}
                  alt={project.name}
                  className='id-project__item-img-native-mob'
                />
              </div> */}
              <div className="id-project__item-block id-project__item-block-text">
                <p className='project-item-description'>Name: {project.name}</p>
                <p className='project-item-description'>Tools: {project.proectInstrumen}</p>
                <p className='project-item-description'>Comments: {project.project}</p>
                <div>
                  <a href={project.proectAddress} style={{ margin: '0 auto'}} target="_blank" rel="noopener noreferrer">
                    <Button text={'Follow the link'} />
                  </a>
                </div>
              </div>
          </div>
          <Link href={ '/main' }>
            <a style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Button text={'See more'} />
            </a>
          </Link>
        </div>
    </>
  )
}

export const getServerSideProps = async ( context ) => {
  try {
    const { id } = context.params;
    const resp = await fetch(`https://my-json-server.typicode.com/twoGophers/portfolio-next/project/${id}`);
    const data = await resp.json();

    if( !data ) {
      return {
        notFound: true
      }
    }
    
    return {
      props: { project: data }
    }
  } catch {
    return {
      props: { project: null }
    }
  }
}