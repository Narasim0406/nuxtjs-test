import React from "react";
import Link from 'next/link'
import {ImgLazyLoad} from '../index'






export class BoxWithButton extends React.Component {
  constructor(props) {
  super(props);
  }
  
  

  render() {
    // let { } = this.state
    let {title,text1,text2,text3,text4,text5,text6,text7,text8,text9} = this.props

    return (
      <>
        <div className="container box-bg px-0 mb-5 " id="textContent">
            <div className="text-left box-centered-container">  
                  <h5 className="box-centered-text text-white">At the heart of the creative and tech industry is a<br/> fundamental need for collaboration.
                  </h5>
                  <p className="box-centered-subtext">It's what drives mutual growth.<br/>And here's your opportunity to do just that?</p>
                  <a href="https://www.doodleblue.com/consultus" className="link bg-white box-btn text-primary mt-2 px-4 py-2 btn">
                    
                      Let's Collaborate
                    
                  </a>
                  {/* <ImgLazyLoad src={'/textwithbg.gif'} className='box-side-img'></ImgLazyLoad> */}
            </div>
            <div className="box-centered-image"></div>
        </div>
      </>
    )
  }
};
export default BoxWithButton