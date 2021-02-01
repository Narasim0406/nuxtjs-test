import React from "react";
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('../../components/common/footer'))
const Header = dynamic(() => import('../../components/common/header'))
const GoliveChecklistBody = dynamic(() => import('../../components/goliveChecklist/index'))

class GoliveChecklist extends React.Component {

  render() {

    return (
      <>  
          <Head>
            <title>Open Access downloadable Go-live checklist | doodleblue Community</title>
            <meta property="og:title" content="Open Access downloadable Go-live checklist | doodleblue Community" key="title" />
            <meta name="description" content="Download doodleblue developed and meticulously crafted product go-live checklist for a successful launch of your next product development in 2021. Download it Today" />
            <meta name="keywords" content="product launch plan template excel free, product launch checklist template excel, product launch checklist pdf, product checklist template excel, new product checklist, product launch checklist template  product development checklist template, b2b product launch checklist, product go-live checklist, product go-live checklist for free, project go-live checklist for free, project launch checklist for free"/>
            <meta property="og:type" content="website" />
            <link rel="icon" href="/favicon/32x32.png" />
          </Head>
          <Header/>
          <GoliveChecklistBody className="bg-white"/>
          <Footer/>
      </>
    );
  }
}

export default GoliveChecklist;
