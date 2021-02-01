import React from 'react';
import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll';



export class SecondaryBanner extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    bannerImg:"/home-page-logo.gif",
    bannerText:"Helping Tech enthusiasts decode problems",
    language: '',
              };
  
  }
render() {
  const {selectData, lineText, prevPage, bannerImg, currentPage ,link1 , link0 } = this.props;
  const bannerText=(<> {"Explore. Create. Share."} <br/> {" Design with ease."} </>);

return (
    <>
        <section class="homeBanner mb-0">
             <div className="banner secondary-banner container-fluid">
                     <div className="bannerOverlay"></div>
                     <div className="">
                     <div className=" row align-items-center">
                       <div className="col-md-7 col-xs-12 banner-content">
                          <div className="block_reveal_effect primary">
                              <p className="secondary-banner-title mb-0 banner-title">
                                <Link href="/">doodleblue community</Link>&nbsp;&nbsp;{selectData!==undefined||selectData==''?<span className="banner-sub-title">{selectData}</span>:''}
                              </p>
                          </div>
                            <div className="d-flex align-items-center banner-breadcrumbs">
                            {prevPage!==undefined?
                              <p className="banner-sub-title">
                                  <a href={`http://community.doodleblue.com/${link0}`}>{prevPage} <i className="fas fa-chevron-right"></i>  </a>
                                  </p>
                            :''}
                              <p className="banner-sub-title"><a href={`http://community.doodleblue.com/${link1}`}> {currentPage}</a></p></div>
                            <h1 className="block_reveal_effect dark">{lineText}</h1>
                        </div>
                       <div className="col-xs-12 col wow fadeInLeft " data-wow-delay="0.5s">
                       <ScrollAnimation animateIn="fadeInLeft" offset="700" animateOnce={true}>  
                         <img className="responsiveImg" src={'/'+bannerImg} alt="doodleblue"/>
                       </ScrollAnimation>  
                       </div>  
                     </div>
                     </div>
             </div>
         </section>
    </>
    );
  }
}
export default SecondaryBanner

