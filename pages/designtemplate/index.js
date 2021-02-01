import React from "react";
import Head from 'next/head'

import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('../../components/common/footer'))
const Header = dynamic(() => import('../../components/common/header'))
const DesignTemplateBody = dynamic(() => import('../../components/designTemplate/index'))


class DesignTemplate extends React.Component {

  render() {

    return (
      <>
          <Head>
            <title>Open Access Design Templates for mobile, website | doodleblue Community</title>
            <meta property="og:title" content="Open Access Design Templates for mobile, website | doodleblue Community" key="title" />
            <meta name="description" content="Explore and download various templates such as mobile app mockup, website mockup, wireframes dashboards, etc. from our open source. Download it now" />
            <meta name="keywords" content="free graphic design templates photoshop,free graphic design templates for word,template design for website,template design online,free design templates for flyers,template design powerpoint,template design word,template design poster, free website templates,free psd templates,website templates free download,free responsive website templates,free web templates,bootstrap website templates,bootstrap admin template free,website templates html,design template free download,free psd website templates,download bootstrap template,responsive ecommerce website templates free download,responsive website templates free download,free template design"/>
            <meta property="og:type" content="website" />
            <link rel="icon" href="/favicon/32x32.png" />
          </Head>
          <Header/>
          <DesignTemplateBody className="bg-white"/>
          <Footer/>
      </>
    );
  }
}

export default DesignTemplate;
