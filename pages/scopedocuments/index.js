import React from "react";
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('../../components/common/footer'))
const Header = dynamic(() => import('../../components/common/header'))
const ScopeDocumentsBody = dynamic(() => import('../../components/scopeDocuments/index'))

class ScopeDocuments extends React.Component {

  render() {

    return (
      <>
          <Head>
            <title>Open Access | Release Scope Documents | doodleblue Community</title>
            <meta property="og:title" content="Open Access | Release Scope Documents | doodleblue Community" key="title" />
            <meta name="description" content="Create an IT project scope with doodleblue innovation's open-access downloadable scope document. A straight forward layout for creating a flawless scope." />
            <meta name="keywords" content="simple project scope template word, project scope template excel, simple project scope statement template, software project scope example pdf, simple project scope example, project scope template download for free, scope of work template, website project scope statement example, download product scope document for free, free product scope document, free project scope document template, free project scope document download for free"/>
            <meta property="og:type" content="website" />
            <link rel="icon" href="/favicon/32x32.png" />
          </Head>
          <Header/>
          <ScopeDocumentsBody className="bg-white"/>
          <Footer/>
      </>
    );
  }
}

export default ScopeDocuments;
