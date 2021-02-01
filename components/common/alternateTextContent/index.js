import React from "react";
import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll';
import {ImgLazyLoad,CircularForm} from './../../common/index'




export class AlternateTextContent extends React.Component {
  constructor(props) {
  super(props);
  }
  
  

  render() {
    // let { } = this.state
    let {title,text1,text2,text3,text4,text5} = this.props

    return (
      <>
            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
           <div className="text-center mid-content pt-6 mt-5">
                <div className="mb-4 mt-custom-2">
                    <p className="mb-4"><b className="color-blue">Tired of Normalcy?</b></p>
                    <p className="w-80 mx-auto">
                        Buckle up! We have all it takes to prove excellence. <br/>Don't believe us?
                    </p>
                </div>
                <div className="mb-4">
                    <p className="mb-4 color-blue">
                        <span className="color-blue">Find out now! Challenge us</span>
                    </p>
                    <p className="w-80 mx-auto">
                        It could be anything for your digital business needs.
                         {/* <br/>even if you were tuned down by others. */}
                    </p>
                </div>
                <div className="mb-4 mt-custom-2 mb-5">
                    <p className="mb-4 color-blue"><b className="color-blue">Challenge us</b></p>
                </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                <CircularForm/>
            </ScrollAnimation>
        </>
    )
  }
};
export default AlternateTextContent

