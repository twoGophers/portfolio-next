
import Layout from '../../components/layout/Layout';
import Head from 'next/head';

export default function SingleProject({ project }) {
  if(!project) {
    return 'There is no project'
  }
  return (
    <>
      <Head>
        <title>{project.name}</title>
      </Head>
      <Layout>
        <div className="project-item">
          {project.name}
        </div>
      </Layout>
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