// import React from "react";
import dynamic from 'next/dynamic';
// import Header from '../../components/common';
import React from "react";
import {Header} from "../../components/common/index";

// const Header = dynamic(() => import('../../components/common/header'))
const Footer = dynamic(() => import('../../components/common/footer'))


class MainLayout extends React.Component {

  state = {}

  render() {
    let { } = this.state
    let { children } = this.props

    return (
      <>
        
        {children}
        {/* <Footer/> */}
      </>
    )
  }
};

export default MainLayout
