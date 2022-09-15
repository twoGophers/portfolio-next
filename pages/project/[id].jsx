import React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';

export default function SingleProject({ project }) {
  if(!project) {
    return 'There is no project'
  }
  return (
    <>
        <Layout>
          <div className="project-item">
            sdfsdf
          </div>
        </Layout>
    </>
  )
}

export const getServerSideProps = async ( context ) => {
  const { id } = context.params;
  const resp = await fetch(`${process.env.API_URL}/project/${id}`);
  const data = await resp.json();

  if( !data ) {
    return {
      notFound: true
    }
  }
  
  return {
    props: { project: data }
  }
}