import React from "react";
import {FloatCard} from '../../common'
import ScrollAnimation from 'react-animate-on-scroll';

export class Cards extends React.Component {

  state = {
    card1:{
      pageLink:"design",
      imgIcon:"/Group 1509.png",
      gifIcon:"icons.gif",
      titleText:"Design",
      text1:"Choose from icons, graphics, mockups and a wide range of design elements for all kinds of projects.",
      text2:"Browse through aptly Categorized documents",
      text3:"Edit the documents to match your product",
      text4:"Request for new documents",
      text5:"Share & download effortlessly",
      isSpaceAvailable:true
    },
    card2:{
      pageLink:"code-snippets-download/",
      imgIcon:"/Group 1511.png",
      gifIcon:"/code.gif",
      titleText:"Code",
      text1:"Pick from pre-written code snippets and stay on top of the latest tech trends when working on your new website.",
      text2:"Browse through aptly Categorized gifs",
      text3:"Send to your email",
      text4:"Request for new gifs",
      text5:"Share & download effortlessly",
      isSpaceAvailable:false
    },
    card3:{
      pageLink:"business",
      imgIcon:"/Group 1512.png",
      gifIcon:"/docs.gif",
      titleText:"Business",
      text1:"Access document templates to help you win, manage, monitor and deliver projects with excellent efficiency.",
      text2:"Get access to UI elements",
      text3:"Customize to suit your product",
      text4:"Send to your email",
      text5:"Share & download effortlessly",
      isSpaceAvailable:false
    },
    card4:{
      pageLink:"code-snippets-download",
      imgIcon:"/Group 1513.png",
      gifIcon:"/gifs.gif",
      titleText:"Code Snippets",
      text1:"10+ Code snippets",
      text2:"Stay up to date with new trends",
      text3:"Request for new code snippets",
      text4:"Copy to clipboard",
      text5:"Share & download effortlessly",
      isSpaceAvailable:false
    },
    card5:{
      pageLink:"free-design-resources",
      imgIcon:"/Group 1641.png",
      gifIcon:"/design.gif",
      titleText:"Design Templates",
      text1:"Get inspired with our unique designs",
      text2:"Revamp your product design",
      text3:"Browse and download templates for free",
      text4:"Explore our high-quality templates",
      text5:"Minimize dependencies",
      text6:"Share & download effortlessly",
      isSpaceAvailable:true
    },    
    responsiveHeader:false,
    responsiveMobileView:false,
    language: '',
    scroll:false
  };
  
    mediaWidth=()=>{
    let mql= window.matchMedia('(max-width: 480px)')
      if (mql.matches==true){
      this.setState({
      responsiveMobileView:true,
      });
      }
    else{
      this.setState({
        responsiveMobileView:false,
        });
      }
    }
    componentDidMount() {
      window.addEventListener('resize', this.mediaWidth);
      this.mediaWidth()
    }
    


  render() {
    let {card1,
      card2,
      card3,
      card4,
      card5,
      isSpaceAvailable,
      responsiveMobileView
      } = this.state
    let {} = this.props

    return (
      <>
      <div className="container-fluid custom-space-container">
        <div className={` my-5 justify-content-center ${responsiveMobileView ? " " : "row"}`} >
        
          <div className="col-md-4 col-xs-12 text-center">
          <ScrollAnimation  animateIn="fadeInUp" animateOnce="true">
              <div className="floatcard-wrap">
                <FloatCard
                pageLink={card1.pageLink}
                imgIcon={card1.imgIcon}
                gifIcon={card1.gifIcon}
                titleText={card1.titleText}
                text1={card1.text1}
                // text2={card1.text2}
                // text3={card1.text3}
                // text4={card1.text4}
                // text5={card1.text5}
                // text6={card1.text6}
                isSpaceAvailable={card1.isSpaceAvailable}
                isResponsiveMobile={responsiveMobileView}
                />
              </div>
              </ScrollAnimation>
          </div>
          
          <div className="col-md-4 col-xs-12 text-center">
            <ScrollAnimation delay={300} animateIn="fadeInUp" animateOnce="true">
              <div className="floatcard-wrap">
                <FloatCard
                pageLink={card2.pageLink}
                imgIcon={card2.imgIcon}
                gifIcon={card2.gifIcon}
                titleText={card2.titleText}
                text1={card2.text1}
                // text2={card2.text2}
                // text3={card2.text3}
                // text4={card2.text4}
                // text5={card2.text5}
                // text6={card2.text6}
                isSpaceAvailable={card2.isSpaceAvailable}
                isResponsiveMobile={responsiveMobileView}

                />
              </div>
              </ScrollAnimation>
          </div>
          {/* <div className="col-md-4 col-xs-12 text-center">
            <ScrollAnimation delay={500} animateIn="fadeInUp" animateOnce="true">
              <div className="floatcard-wrap">
                <FloatCard
                pageLink={card3.pageLink}
                imgIcon={card3.imgIcon}
                gifIcon={card3.gifIcon}
                titleText={card3.titleText}
                text1={card3.text1}
                // text2={card3.text2}
                // text3={card3.text3}
                // text4={card3.text4}
                // text5={card3.text5}
                // text6={card3.text6}
                isSpaceAvailable={card3.isSpaceAvailable}
                isResponsiveMobile={responsiveMobileView}

                />
              </div>
              </ScrollAnimation>
          </div> */}
        </div>
      
        <div className={` justify-content-center ${responsiveMobileView ? " " : "row my-5 "}`}>
          {/* <div className="col-2"></div>
          <div className="col-md-4 text-center">
            <ScrollAnimation  animateIn="fadeInUp" animateOnce="true">
              <div className="floatcard-wrap">
                <FloatCard
                pageLink={card4.pageLink}
                imgIcon={card4.imgIcon}
                gifIcon={card4.gifIcon}
                titleText={card4.titleText}
                // text1={card4.text1}
                // text2={card4.text2}
                // text3={card4.text3}
                // text4={card4.text4}
                // text5={card4.text5}
                // text6={card4.text6}
                isSpaceAvailable={card4.isSpaceAvailable}
                isResponsiveMobile={responsiveMobileView}

                />
              </div>
              </ScrollAnimation>
          </div> */}
          {/* <div className="col-md-4 col-xs-12 text-center">
            <ScrollAnimation delay={300} animateIn="fadeInUp" animateOnce="true">
              <div className="floatcard-wrap">
                <FloatCard
                pageLink={card5.pageLink}
                imgIcon={card5.imgIcon}
                gifIcon={card5.gifIcon}
                titleText={card5.titleText}
                // text1={card5.text1}
                // text2={card5.text2}
                // text3={card5.text3}
                // text4={card5.text4}
                // text5={card5.text5}
                // text6={card5.text6}
                isSpaceAvailable={card5.isSpaceAvailable}
                isResponsiveMobile={responsiveMobileView}

                />
              </div>
              </ScrollAnimation>
          </div> */}
          {/* <div className="col-2"></div> */}
        </div>
        
      </div>
      </>
    )
  }
};
