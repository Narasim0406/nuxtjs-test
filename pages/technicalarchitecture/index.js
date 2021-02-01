import React from "react";
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('../../components/common/footer'))
const Header = dynamic(() => import('../../components/common/header'))
const TechnicalArchitectureBody = dynamic(() => import('../../components/technicalArchitecture/index'))

class TechnicalArchitecture extends React.Component {

  render() {

    return (
      <>
          <Head>
            <title>Download technical Architecture templates  | doodleblue Community</title>
            <meta property="og:title" content="Download technical Architecture templates  | doodleblue Community" key="title" />
            <meta name="description" content="Curated technical architecture documents, best for your products, and create meaningful architectural designs for your website or mobile application. Download it now" />
            <meta name="keywords" content="download technical architecture template,  technical architecture document samples, technical architecture template, download technical architecture document samples for free, download technical architecture document samples"/>
            <meta property="og:type" content="website" />
            <link rel="icon" href="/favicon/32x32.png" />
          </Head>
          <Header/>
          <TechnicalArchitectureBody className="bg-white"/>
          <Footer/>
      </>
    );
  }
}

export default TechnicalArchitecture;
