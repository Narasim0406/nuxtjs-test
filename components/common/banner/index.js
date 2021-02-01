import {ImgLazyLoad} from '../imgLazyLoad/index'
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


export class Banner extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    bannerImg:"/home-page-logo.gif",
    bannerText:"GRAPHICS. CODE. TEMPLATES.",
    subBannerText1:"We're paying it forward with free resources",
    subBannerText2:"built using our years of experience and expertise.",
    subBannerText3:"Helping creatives, developers and businesses work more efficiently.",
    language: '',
              };
  
  }


render() {
  // let {
  //   bannerImg,bannerText
  // } = this.props;
  let {
    bannerImg,bannerText,
    subBannerText1,
    subBannerText2,
    subBannerText3
  } = this.state
  
    return  (

      <>
     <section class="homeBanner mb-0">
          <div className="banner container-fluid">
                  <div className="bannerOverlay"></div>
                  <div className="">
                  <div className="row align-items-center">
                    <div className="col-md-7 col-xs-12 banner-content  ">
                      

                          <div className="\">
                          <p className="banner-title ">doodleblue community</p>
                          </div>
                          
                          <h1 className="block_reveal_effect dark">{bannerText}</h1>
                          <p className="banner-sub-text">{subBannerText1}</p>
                          <p className="banner-sub-text">{subBannerText2}</p>
                          <p className="banner-sub-text">{subBannerText3}</p>
                    </div>
                    <div className="col-xs-12 col overflowHidden wow fadeInRight" v-if="bannerLogoShow" >
                    <ScrollAnimation animateIn="fadeInLeft" delay={500} offset="300"  animateOnce={true} >
                        {/* <ImgLazyLoad  src={bannerImg} ></ImgLazyLoad> */}
                        <img className="responsiveImg" src={bannerImg} alt="doodleblue"/>
                    </ScrollAnimation>    
                    </div>  
                  </div>
                  </div>
          </div>
      </section>
   </>
   ) 
}
}
export default Banner



