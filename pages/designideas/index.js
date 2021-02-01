import React from "react";

import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('../../components/common/footer'))
const Header = dynamic(() => import('../../components/common/header'))
const DesignIdeasBody = dynamic(() => import('../../components/designIdeas/index'))

class DesignIdeas extends React.Component {

  render() {

    return (
      <>
          <Header/>
           <DesignIdeasBody className="bg-white"/>
          <Footer/>
      </>
    );
  }
}

export default DesignIdeas;
