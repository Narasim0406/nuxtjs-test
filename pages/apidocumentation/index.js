import React from "react";
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('../../components/common/footer'))
const Header = dynamic(() => import('../../components/common/header'))
const ApiDocumentationBody = dynamic(() => import('../../components/apiDocumentation/index'))

class ApiDocumentation extends React.Component {

  render() {

    return (
      <>
        <Head>
          <title>Download API documentation | doodleblue Community | doodleblue innovaton</title>
          <meta property="og:title" content="Download API documentation | doodleblue Community | doodleblue innovaton" key="title" />
          <meta name="description" content="Easy implementation of API documentation and increase your API adoption to get the best functional products that give great value to your clients. download now " />
          <meta name="keywords" content="download API documentation, download swagger documentation, java api documentation download
, javadoc download, dropbox api download file, rest download file, download file rest api
, java api doc download, download API documentation for free."/>
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon/32x32.png" />
        </Head>
        <Header />
        <ApiDocumentationBody className="bg-white" />
        <Footer />
      </>
    );
  }
}

export default ApiDocumentation;
