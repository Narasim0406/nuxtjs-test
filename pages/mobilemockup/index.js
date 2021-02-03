import Head from 'next/head'
import React from "react";
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('../../components/common/footer'))
const Header = dynamic(() => import('../../components/common/header'))
const MobileMockupsBody = dynamic(() => import('../../components/mobileMockups/index'))

class MobileMockups extends React.Component {

  render() {

    return (
      <>
       <Head>
        <title>Mobile mockup open design resources for download | doodleblue</title>
        <meta property="og:title" content="Mobile mockup open design resources for download | doodleblue" key="title" />
        <meta name="description" content="doodleblue community is providing open resources on mobile mockup design. Download now open mobile outline, android, google pixel xl design" />
        <meta name="keywords" content="Free resources, Free icons, free gifs, free design templates, free mockups, free wireframes, free project documents, free designs"/>
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon/32x32.png" />
      </Head>
          <Header/>
          <MobileMockupsBody className="bg-white"/>
          <Footer/>
      </>
    );
  }
}

export default MobileMockups;
