import React from "react";
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('../../components/common/footer'))
const Header = dynamic(() => import('../../components/common/header'))
const MobileTemplateBody = dynamic(() => import('../../components/mobileTemplates/index'))

class MobileTemplate extends React.Component {

  render() {

    return (
      <>
          <Header/>
          <MobileTemplateBody className="bg-white"/>
          <Footer/>
      </>
    );
  }
}

export default MobileTemplate;