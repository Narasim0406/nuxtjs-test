import React from "react";
import Link from 'next/link'
import { ImgLazyLoad } from '../index'
import dynamic from 'next/dynamic'
const Arrows = dynamic(() => import('../arrows'))

export class LookingParticular extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let { navigateID } = this.props;
    const text1 = "Looking for something in particular, but can't find it?"
    return (
      <>
        <div className="container looking-particular-container pb-5 mb-5 " id="textContent">
          <h4 className="mr-1 mb-0 p-2">{text1}</h4>
          <div className="d-flex my-2 justify-content-center">
            <h5 className="mr-2">Let us know</h5>
            <Arrows navigateID="right"></Arrows>
            {/* <div className="customArrow" id={`${navigateID}Right`} style={{ marginLeft: "10px" }}>
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="51.056px" height="32.495px" viewBox="0 -23 132.056 93.495"
                xmlSpace="preserve" style={{ verticalAlign: "baseline" }} >
                <line x1="5.775" y1="35.392" x2="129.923" y2="35.392" className="st1 one" data-v-64e9bd8e=""></line>
                <polyline points="130.695,35.748 129.923,34.942 97.085,0.711 97.447,0.358 85.099,12.462 61.345,35.748 " className="st1 two" data-v-64e9bd8e=""></polyline>
                <polyline points="130.695,35.202 129.923,36.019 97.085,70.778 97.447,71.137 85.099,58.846 61.345,35.202 " className="st1 three" data-v-64e9bd8e=""></polyline>
              </svg>
            </div> */}
          </div>
        </div>
      </>
    )
  }
};
export default LookingParticular