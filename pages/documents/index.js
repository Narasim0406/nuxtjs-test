import React from "react";
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('../../components/common/footer'))
const Header = dynamic(() => import('../../components/common/header'))
const DocumentBody = dynamic(() => import('../../components/documents/index'))




class Documents extends React.Component {

  render() {

    return (
      <>
      <Head>
        <title>Open Product documents for download | doodleblue Community | Chennai, USA</title>
        <meta property="og:title" content="Open Product documents for download | doodleblue Community | Chennai, USA" key="title" />
        <meta name="description" content="Explore our wide range of useful product documents that are tailored to suit your needs and ease your documentation efforts. Download it now" />
        <meta name="keywords" content="download technical documents for free, download product documents for free, download product documents, template free, download free documents, download product documents, download technical documents"/>
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon/32x32.png" />
      </Head>
          <Header/>
          <DocumentBody className="bg-white"/>
          <Footer/>
      </>
    );
  }
}

export default Documents;
