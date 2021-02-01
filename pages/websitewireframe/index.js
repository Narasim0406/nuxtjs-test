import React from "react";
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('../../components/common/footer'))
const Header = dynamic(() => import('../../components/common/header'))
const WebsiteWireframesBody = dynamic(() => import('../../components/websiteWireframes/index'))


class WebsiteWireframes extends React.Component {

  render() {

    return (
      <>
          <Header/>
          <WebsiteWireframesBody className="bg-white"/>
          <Footer/>
      </>
    );
  }
}

export default WebsiteWireframes;
