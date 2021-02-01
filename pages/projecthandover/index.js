import React from "react";
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('../../components/common/footer'))
const Header = dynamic(() => import('../../components/common/header'))
const ProjectHandoverBody = dynamic(() => import('../../components/projectHandover/index'))


class ProjectHandover extends React.Component {

  render() {

    return (
      <>
        <Head>
          <title>Available Resource Project handover template for Use | doodleblue</title>
          <meta property="og:title" content="Available Resource Project handover template for Use | doodleblue" key="title" />
          <meta name="description" content="Available Resource Project handover template for Use | doodleblue	Save your time, increase your productivity and reliability by using open access, downloadable doodleblue strategically crafted product handover templates." />
          <meta name="keywords" content="project handover template excel, project handover document template free, project handover checklist template excel, construction project handover template word, project handover document pdf, work handover template excel, free handover report template word, project handover plan template, download project handover template for free, free project handover template, free product handover template." />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon/32x32.png" />
        </Head>
        <Header />
        <ProjectHandoverBody className="bg-white" />
        <Footer />
      </>
    );
  }
}

export default ProjectHandover;
