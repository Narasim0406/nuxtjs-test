import React from "react";
import Head from 'next/head'
// import { CodeSnippetBody } from "../../components/codeSnippet/index.js";
// import {Header} from "../../components/common/index";
// import {Footer,CircularForm} from "../../components/common/index";
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('../../components/common/footer'))
const Header = dynamic(() => import('../../components/common/header'))
const CodeSnippetBody = dynamic(() => import('../../components/codeSnippet/index'))

class CodeSnippet extends React.Component {

  render() {

    return (
      <>
           <Head>
            <title>Opne Access Downloadable Code Snippets | doodleblue Community</title>
            <meta property="og:title" content="Opne Access Downloadable Code Snippets | doodleblue Community" key="title" />
            <meta name="description" content="Get a Curated library of pre-written code snippets developed by the experts of doodlblue innovation to support your business and enhance the quality of your product." />
            <meta name="keywords" content="free code snippets, display code snippets, code snippet website, code snippet example, bootstrap snippets, code snippets, code snippets for free, code snippets free download, download code snippets for free"/>
            <meta property="og:type" content="website" />
            <link rel="icon" href="/favicon/32x32.png" />
          </Head>
          <Header/>
          <CodeSnippetBody className="bg-white"/>
          <Footer/>
      </>
    );
  }
}

export default CodeSnippet;
