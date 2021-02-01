import React from "react";
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('../../components/common/footer'))
const Header = dynamic(() => import('../../components/common/header'))
const MobileThemesBody = dynamic(() => import('../../components/mobileThemes/index'))

class DesignThemes extends React.Component {

  render() {

    return (
      <>
          <Header/>
          <MobileThemesBody className="bg-white"/>
          <Footer/>
      </>
    );
  }
}

export default DesignThemes;
