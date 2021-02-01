import React from "react";
import Link from 'next/link'
import {ImgLazyLoad} from './../../common/index'






export class TextWithBg extends React.Component {
  constructor(props) {
  super(props);
  }
  
  

  render() {
    // let { } = this.state
    let {title,text1,text2,text3,text4,text5,text6,text7,text8,text9} = this.props

    return (
      <>
        <div className="container" id="textContent">
            <div className="bg-centered-image"></div>
            <div className="text-center bg-centered-container">  
              <h5 className="bg-centered-text">Paying it forward </h5>
              <p className="bg-centered-subtext">It's something that embodies the Spirit of doodleblue and what better way to do it than by giving back to the community of creatives, technologists and aspiring entrepreneurs that are navigating the sometimes complex avenues of the industry.
                 By creating the doodleblue Community we're working to create a thriving collaborative hub of innovation and creativity</p>
            </div>
        </div>
      </>
    )
  }
};
export default TextWithBg