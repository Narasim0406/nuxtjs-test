import React from "react";
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('../../components/common/footer'))
const Header = dynamic(() => import('../../components/common/header'))
const SnippetSublistBody = dynamic(() => import('../../components/snippetSublist/index'))


class SnippetSublist extends React.Component {

  render() {

    return (
      <>
          <Header/>
          <SnippetSublistBody className="bg-white"/>
          <Footer/>
      </>
    );
  }
}

export default SnippetSublist;
