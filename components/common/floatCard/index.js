import React from "react";
import Link from 'next/link'
import {ImgLazyLoad} from '../imgLazyLoad/index'
import { isConditional } from "@babel/types";
import dynamic from 'next/dynamic'
const Arrows = dynamic(() => import('../arrows'))



export class FloatCard extends React.Component {
  constructor(props) {
  super(props);
  }
  
  

  render() {
    // let { } = this.state
    let {
      pageLink,
      imgIcon,
      gifIcon,
      titleText,
      text1,
      text2,
      text3,
      text4,
      text5,
      text6,
      isSpaceAvailable,
      isResponsiveMobile
    } = this.props

    return (
      <>  
      <div className="float-card customArrow">
          <Link href={`/${pageLink}`}>
          <div className={`custom-card  border-0 card-shadow ${isSpaceAvailable ? " null-space" : "custom-space"}`}>
          <div className="icon-box pt-3">
            <figure className="card-icon ">
              <ImgLazyLoad  src={imgIcon} ></ImgLazyLoad>
            </figure>
            <figure className='gif-icon m-0'>
              <ImgLazyLoad src="/Vector.png" style={'position:absolute'} className='img-bg'></ImgLazyLoad>
              <ImgLazyLoad src={gifIcon} className="gif"></ImgLazyLoad>     
            </figure>       
          </div>
          <div className="title-buttons d-flex justify-content-center align-items-center">
            <h4 className="mr-1 mb-0 p-2">{titleText}</h4>
            <Arrows navigateID="right"></Arrows>
            {/* <a className="arrow-title">
              <svg width={` ${isResponsiveMobile ?"27":"55"}`} height="16" viewBox="0 0 55 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="8.16455" x2="47.4178" id="#arrowLine1" y2="8.16455" stroke="#458CF7"/>
                <rect x="47.4307" y="1.37166" id="#arrowLine2" width="9.6066" height="9.6066" transform="rotate(45 47.4307 1.37166)" stroke="#006ADA"/>
              </svg>
            </a> */}
          </div>
          <div className="ml-0 float-card">
            <p className="d-flex justify-content-center">{text1}</p>
            {/* <ul className={`lightning-icon text-left tile-text ${isSpaceAvailable ? " text-left" : "ml-4"}`} >
              <li className="d-flex align-items-start">
                <svg className="mt-1" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.77778 1L1 10.6H8L7.22222 17L15 7.4H8L8.77778 1Z" stroke="#2F80ED" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
                <div className="ml-1">{text1}</div>
              </li>
              <li className="d-flex align-items-start">
                <svg className="mt-1" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.77778 1L1 10.6H8L7.22222 17L15 7.4H8L8.77778 1Z" stroke="#2F80ED" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
                <div className="ml-1">{text2}</div>
              </li>
              <li className="d-flex align-items-start">
                <svg className="mt-1" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.77778 1L1 10.6H8L7.22222 17L15 7.4H8L8.77778 1Z" stroke="#2F80ED" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
                <div className="ml-1">{text3}</div>
              </li>
              <li className="d-flex align-items-start">
                <svg className="mt-1" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M8.77778 1L1 10.6H8L7.22222 17L15 7.4H8L8.77778 1Z" stroke="#2F80ED" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
                <div className="ml-1">{text4}</div>
              </li>
              <li className="d-flex align-items-start">
                <svg className="mt-1" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.77778 1L1 10.6H8L7.22222 17L15 7.4H8L8.77778 1Z" stroke="#2F80ED" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
                <div className="ml-1">{text5}</div>
              </li>
              {text6!==undefined ? 
              <li className="d-flex align-items-start">
                <svg className="mt-1" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M8.77778 1L1 10.6H8L7.22222 17L15 7.4H8L8.77778 1Z" stroke="#2F80ED" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
                <div className="ml-1">{text6}</div>
              </li>:''}
            </ul> */}
          </div>
        </div>
        </Link>

        
        </div>
      </>
    )
  }
};
