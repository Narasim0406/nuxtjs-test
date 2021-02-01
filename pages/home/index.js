import Head from 'next/head'
import React from "react";

// import {Banner} from "../../components/common/index";

import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('../../components/common/footer'))
const Header = dynamic(() => import('../../components/common/header'))
const Section = dynamic(() => import('../../components/home/section'))
const Banner = dynamic(() => import('../../components/common/banner'))

export default function Home() {
  return (
    <>
      <Head>
        <title>doodleblue Community | Open resources for product owners and designers</title>
        <meta property="og:title" content="doodleblue Community | Open resources for product owners and designers" key="title" />
        <meta name="description" content="doodleblue community is a novel initiative to give back to the users in the form of product documents and design resources. Explore now and expedite your product journey" />
        <meta name="keywords" content="Free resources, Free icons, free gifs, free design templates, free mockups, free wireframes, free project documents, free designs"/>
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon/32x32.png" />
      </Head>
      <div className="pageRouter">
      <Header className="bg-white"/>
      <Banner />  
      <Section/>
      {/* <Mainlayout/> */}
      <Footer/>
      </div>
        
    </>
  )
}
