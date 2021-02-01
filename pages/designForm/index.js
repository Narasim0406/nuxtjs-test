import Head from 'next/head'
import React from "react";
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('../../components/common/footer'))
const Header = dynamic(() => import('../../components/common/header'))
const Section = dynamic(() => import('../../components/sendItIn/section/index'))


export default function designForm() {
  return (
    <>
      <Head>
            <title>Send it in Design</title>
            <meta property="og:title" content="Animated Icons free download - Unique icons to support your products - doodleblue community" key="title" />
            <meta name="description" content="Delight your users with interactive high definition animated icons that is perfect for your websites, mobile apps and presentations. Download now for free " />
            <meta name="keywords" content="free animated icons,animated icons free download,free gif icons,free animated gif icons,free loading icon,animated gif icons free download,free animated weather icons,gif icons free download,animated icons download,flat animated icons library free download, loading icon gif free download, loading gif icon free download, free animated svg icons,free animated icons after effects,how to make animated icons,animated icons gif,animation icon png,animated icons png,animated icons css,animated icons for website free download"/>
            <meta property="og:type" content="website" />
            <link rel="icon" href="/favicon/32x32.png" />
      </Head>
      {/* <Header className="bg-white"/> */}
      {/* <Banner />   */}
      <Section/>
      {/* <Footer/> */}
        
    </>
  )
}
