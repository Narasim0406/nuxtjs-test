import Head from 'next/head'
import React from "react";
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('../../components/common/footer'))
const Header = dynamic(() => import('../../components/common/header'))
const Section = dynamic(() => import('../../components/icons/section'))


export default function Icons() {
  return (
    <>
      <Head>
            <title>Open Access of Downloadable Unique vector icons | doodleblue community</title>
            <meta property="og:title" content="Open Access of Downloadable Unique vector icons | doodleblue community" key="title" />
            <meta name="description" content="to excitement your users with high interactive animation icons provided by doodleblue that will be perfect for your own websites, mobile apps, and presentations. Download now" />
            <meta name="keywords" content="free icons download,free icons for commercial use,best free icons,free icons no copyright, free icons for website, free graphic icons, free contact icons, free desktop icons, free app icons, download icon png,free icons no attribution, free icons, icons download, download icon png,download button png,free icon finder,free fire icon, free vector icons, royalty free icons, free icons for commercial use, free png icons, free icon set, free flat icons, free app icons, phone vector png, notification bell png, free icon site, icon png free download, flat icon download, flat icon free download, flat icons png, powerpoint free icon"/>
            <meta property="og:type" content="website" />
            <link rel="icon" href="/favicon/32x32.png" />
      </Head>
      <Header className="bg-white"/>
      <Section/>
      <Footer/>
        
    </>
  )
}
