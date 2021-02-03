import Head from 'next/head'
import React from "react";
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('../../components/common/footer'))
const Header = dynamic(() => import('../../components/common/header'))
const MobileTemplateBody = dynamic(() => import('../../components/mobileTemplates/index'))

class MobileTemplate extends React.Component {

  render() {

    return (
      <>
      <Head>
        <title>Mobile templates for download | doodleblue innovation</title>
        <meta property="og:title" content="Mobile templates for download | doodleblue innovation" key="title" />
        <meta name="description" content="Download the open mobile design templates which are included budget template, design template including chat design, post design, e Wall home design" />
        <meta name="keywords" content="Free resources, Free icons, free gifs, free design templates, free mockups, free wireframes, free project documents, free designs"/>
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon/32x32.png" />
      </Head>
          <Header/>
          <MobileTemplateBody className="bg-white"/>
          <Footer/>
      </>
    );
  }
}

export default MobileTemplate;
