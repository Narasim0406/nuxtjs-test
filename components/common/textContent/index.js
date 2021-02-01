import React from "react";
import Link from 'next/link'
import {ImgLazyLoad} from './../../common/index'






export class TextContent extends React.Component {
  constructor(props) {
  super(props);
  }
  
  

  render() {
    // let { } = this.state
    let {title,text1,text2,text3,text4,text5,text6,text7,text8,text9,text10} = this.props

    return (
      <>
        <div className="container" id="textContent">
            <div>
                {title!==''&&title!==undefined ? <h5  className="mb-2 community_title text-center">{title}</h5>:''}
            </div>
            {text1!==''&&text1!==undefined ? <h5  className="mb-0  normal-content text-center">{ text1 }</h5>:''}
            <div>
                {text2!==''&&text2!==undefined ? <h2  className="mb-0 dt_starter">{text2 }</h2>:''}
            </div>
            {text3!==undefined ? <h2  className="mb-0 text-center normal-title">{text3}</h2>:''}
            
            
        </div>
            {text4!==undefined ? <h2  className="mb-0  mx-0  text-center normal-paragraph">{text4}</h2>:''}
        <div className="container">
            {text5!==undefined ? <h2  className="mb-0   text-center lighter-title">{text5}</h2>:''}
        </div>
        {text6!==undefined ? <h5  className="mb-0  mx-0 sub-content text-center ">{text6}</h5>:''}
        {text7!==undefined&&<h5  className="mb-0 pt-4 mx-0 sub-content text-center ">{text7}<span className="bigger-blue-text">{text8}</span>{text9}</h5>}
        {text10!==undefined ?<h5  className="mb-0  normal-content text-center p-50">{ text10 }</h5>:''}

        
        
      </>
    )
  }
};
export default TextContent