import React from "react";

import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('../../components/common/footer'))
const Header = dynamic(() => import('../../components/common/header'))
const MaterialDesignBody = dynamic(() => import('../../components/materialDesign/index'))

class MaterialDesign extends React.Component {

  render() {

    return (
      <>
          <Header/>
          <MaterialDesignBody className="bg-white"/>
          <Footer/>
      </>
    );
  }
}

export default MaterialDesign;
