import React from "react";
import Link from 'next/link'
import {ImgLazyLoad} from '../index'
import {SendItForm}from '../index'





export class SendItIn extends React.Component {
  constructor(props) {
  super(props);
    this.state={
      toggle:true,
    }
  }
  handleShow=()=>{
    let {toggle}=this.state
    this.setState({
      toggle:!toggle
    },()=>{
      console.log(this.state.toggle,"TOGGLESTATE")
    })
    
  }
  
  
  

  render() {
    let {toggle} = this.state
    let {title,text1,text2,text3,text4,text5,text6,text7,text8,text9} = this.props

    return (
      <>
        {toggle?<div className="container senditin-bg px-0 mb-5 " id="textContent">
            <div className="text-center senditin-centered-container">  
                  <h5 className="senditin-centered-text text-white">Got a design you want to share with our community?
                  </h5>
                  <button className="senditin-btn mt-2 rounded-0 text-white text-center senditin-border btn" onClick={this.handleShow}>Send it in</button>
            </div>
            <div className="senditin-centered-image "></div>
        </div>:
        <SendItForm
          handleClose={this.handleShow}
        />}
      </>
    )
  }
};
export default SendItIn