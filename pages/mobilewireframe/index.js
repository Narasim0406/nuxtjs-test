import React from "react";
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('../../components/common/footer'))
const Header = dynamic(() => import('../../components/common/header'))
const MobileWireframesBody = dynamic(() => import('../../components/mobileWireframes/index'))


class MobileWireframes extends React.Component {

  render() {

    return (
      <>
          <Header/>
          <MobileWireframesBody className="bg-white"/>
          <Footer/>
      </>
    );
  }
}

export default MobileWireframes;
