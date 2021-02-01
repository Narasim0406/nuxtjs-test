import React from "react";
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('../../components/common/footer'))
const Header = dynamic(() => import('../../components/common/header'))
const MobileMockupsBody = dynamic(() => import('../../components/mobileMockups/index'))

class MobileMockups extends React.Component {

  render() {

    return (
      <>
          <Header/>
          <MobileMockupsBody className="bg-white"/>
          <Footer/>
      </>
    );
  }
}

export default MobileMockups;
