import React from "react";

import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('../../components/common/footer'))
const Header = dynamic(() => import('../../components/common/header'))
const DashboardDesignBody = dynamic(() => import('../../components/dashboardDesign/index'))

class DashboardDesign extends React.Component {

  render() {

    return (
      <>
          <Header/>
          <DashboardDesignBody className="bg-white"/>
          <Footer/>
      </>
    );
  }
}

export default DashboardDesign;
