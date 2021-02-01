import {ImgLazyLoad} from '../imgLazyLoad/index'
import React from 'react';
import { ResponsiveMenu } from '../responsiveMenu';


export class Menu extends React.Component {

  state = {isToggleOn: false,
    responsiveHeader:false,
    responsiveMobileView:false,
    language: '',
    scroll:false};

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
    componentWillMount(){
      window.addEventListener('resize', this.mediaWidth);
    }


  handleClick = () => {
    var lang = true;
    this.props.onSelectLanguage(lang);            
}


render() {
    return (
      <>
      <div className="menuPageWrapper bg-white">
      <div className="menuOverlay ">
      {/*{/*<!-- open/close -->*/}
      <div className="overlay overlay-boxes">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="101%"
          viewBox="0 0 1440 806"
          preserveAspectRatio="none"
        >
          <path d="m0.005959,200.364029l207.551124,0l0,204.342453l-207.551124,0l0,-204.342453z" />
          <path d="m0.005959,400.45401l207.551124,0l0,204.342499l-207.551124,0l0,-204.342499z" />
          <path d="m0.005959,600.544067l207.551124,0l0,204.342468l-207.551124,0l0,-204.342468z" />
          <path d="m205.752151,-0.36l207.551163,0l0,204.342437l-207.551163,0l0,-204.342437z" />
          <path d="m204.744629,200.364029l207.551147,0l0,204.342453l-207.551147,0l0,-204.342453z" />
          <path d="m204.744629,400.45401l207.551147,0l0,204.342499l-207.551147,0l0,-204.342499z" />
          <path d="m204.744629,600.544067l207.551147,0l0,204.342468l-207.551147,0l0,-204.342468z" />
          <path d="m410.416046,-0.36l207.551117,0l0,204.342437l-207.551117,0l0,-204.342437z" />
          <path d="m410.416046,200.364029l207.551117,0l0,204.342453l-207.551117,0l0,-204.342453z" />
          <path d="m410.416046,400.45401l207.551117,0l0,204.342499l-207.551117,0l0,-204.342499z" />
          <path d="m410.416046,600.544067l207.551117,0l0,204.342468l-207.551117,0l0,-204.342468z" />
          <path d="m616.087402,-0.36l207.551086,0l0,204.342437l-207.551086,0l0,-204.342437z" />
          <path d="m616.087402,200.364029l207.551086,0l0,204.342453l-207.551086,0l0,-204.342453z" />
          <path d="m616.087402,400.45401l207.551086,0l0,204.342499l-207.551086,0l0,-204.342499z" />
          <path d="m616.087402,600.544067l207.551086,0l0,204.342468l-207.551086,0l0,-204.342468z" />
          <path d="m821.748718,-0.36l207.550964,0l0,204.342437l-207.550964,0l0,-204.342437z" />
          <path d="m821.748718,200.364029l207.550964,0l0,204.342453l-207.550964,0l0,-204.342453z" />
          <path d="m821.748718,400.45401l207.550964,0l0,204.342499l-207.550964,0l0,-204.342499z" />
          <path d="m821.748718,600.544067l207.550964,0l0,204.342468l-207.550964,0l0,-204.342468z" />
          <path d="m1027.203979,-0.36l207.550903,0l0,204.342437l-207.550903,0l0,-204.342437z" />
          <path d="m1027.203979,200.364029l207.550903,0l0,204.342453l-207.550903,0l0,-204.342453z" />
          <path d="m1027.203979,400.45401l207.550903,0l0,204.342499l-207.550903,0l0,-204.342499z" />
          <path d="m1027.203979,600.544067l207.550903,0l0,204.342468l-207.550903,0l0,-204.342468z" />
          <path d="m1232.659302,-0.36l207.551147,0l0,204.342437l-207.551147,0l0,-204.342437z" />
          <path d="m1232.659302,200.364029l207.551147,0l0,204.342453l-207.551147,0l0,-204.342453z" />
          <path d="m1232.659302,400.45401l207.551147,0l0,204.342499l-207.551147,0l0,-204.342499z" />
          <path d="m1232.659302,600.544067l207.551147,0l0,204.342468l-207.551147,0l0,-204.342468z" />
          <path d="m-0.791443,-0.360001l207.551163,0l0,204.342438l-207.551163,0l0,-204.342438z" />
        </svg>
        <button type="button" className="overlay-close woww fadeIn" onClick={this.handleClick} data-wow-delay="1s">
          <img
            className="animated close-btn fadeIn"
            src="/close.svg"
            
            alt="Close"
          />
          {/*<!-- Close -->*/}
        </button>

        <div className="menuFadedText woww fadeInUp">
          <div>Digital</div>
          <div>Strategy</div>
          <div>Consulting</div>
        </div>

        {this.state.responsiveMobileView? <ResponsiveMenu/>:<div className="mt-5 container menuItemsWrapper wwow fadeInUpp">
          <div className="row align-item-center full-hieght" style={{height: "100vh"}}>
            <div className="col-12">
              <div className="menuItems">
                <h2 className="woww fade-in-bottom" data-wow-delay="0.1s">
                  <span>
                    <a href="https://www.doodleblue.com/services" className="link"  >Services</a>
                  </span>
                  <div className="subMenuItems fade-in animated animated-fast fade-in-bottom">
                    <div className="row">
                      <div className="col-4 subMenuItem">
                        <h5>
                          <a href="https://www.doodleblue.com/services/digitaltransformation">Digital Transformation</a>
                        </h5>
                        <p>
                          <a
                            className="link"
                            href="https://www.doodleblue.com/services/digitaltransformation/technology-ecosystem-audit"
                          >Technology & Ecosystem Audit</a>
                        </p>
                        <p>
                          <a
                            className="link"
                            href="https://www.doodleblue.com/services/digitaltransformation/digital-strategy"
                          >Digital Strategy</a>
                        </p>
                        <p>
                          <a
                            className="link"
                            href="https://www.doodleblue.com/services/digitaltransformation/digital-marketing"
                          >Digital Marketing</a>
                        </p>
                        <p>
                          <a
                            className="link"
                            href="https://www.doodleblue.com/services/digitaltransformation/data-analytics"
                          >Data & Analytics</a>
                        </p>
                      </div>
                      <div className="subMenuItem col-4">
                        <h5>
                          <a href="https://www.doodleblue.com/services/uiuxdesign">UI/UX & Design Thinking</a>
                        </h5>
                        <p>
                          <a
                            className="link"
                            href="https://www.doodleblue.com/services/uiuxdesign/branding">Branding</a>
                        </p>
                        <p>
                          <a
                            className="link"
                            href="https://www.doodleblue.com/services/uiuxdesign/ux-strategy">UX Strategy</a>
                        </p>
                        <p>
                          <a
                            className="link"
                            href="https://www.doodleblue.com/services/uiuxdesign/mobile-web-design">Mobile & Web Design</a>
                        </p>
                      </div>
                      <div className="subMenuItem col-4">
                        <h5>
                          <a href="https://www.doodleblue.com/services/mobileengineering">Mobile Engineering</a>
                        </h5>
                        <p>
                          <a
                            className="link"
                            href="https://www.doodleblue.com/services/mobileengineering/android-development">Android Development</a>
                        </p>

        
                        <p>
                          <a
                            className="link"
                            href="https://www.doodleblue.com/services/mobileengineering/ios-development">IOS Development</a>
                        </p>
                        <p>
                          <a
                            className="link"
                            href="https://www.doodleblue.com/services/mobileengineering/react-native-development">React Native Development</a>
                        </p>
                        <p>
                          <a
                            className="link"
                            href="https://www.doodleblue.com/services/mobileengineering/wearable-development">Wearable Development</a>
                        </p>
                        <p>
                          <a
                            className="link"
                            href="https://www.doodleblue.com/services/mobileengineering/hybrid-development">Hybrid Development</a>
                        </p>
                      </div>
                      <div className="subMenuItem col-4">
                        <h5>
                          <a href="https://www.doodleblue.com/services/webtechnology">Web Technology Development</a>
                        </h5>
                        <p>
                          <a
                            className="link"
                            href="https://www.doodleblue.com/services/webtechnology/content-management-systems">Content Management Systems</a>
                        </p>
                        <p>
                          <a
                            className="link"
                            href="https://www.doodleblue.com/services/webtechnology/e-commerce-platforms">e-Commerce Platforms</a>
                        </p>
                        <p>
                          <a
                            className="link"
                            href="https://www.doodleblue.com/services/webtechnology/custom-web-applications">Custom Web Applications</a>
                        </p>
                      </div>
                      <div className="subMenuItem col-4">
                        <h5>
                          <a href="https://www.doodleblue.com/services/innovation">Innovation</a>
                        </h5>
                        <p>
                          <a
                            className="link"
                            href="https://www.doodleblue.com/services/innovation/augmented-virtual-reality">Augumented & Virtual Reality</a>
                        </p>
                        <p>
                          <a
                            className="link"
                            href="https://www.doodleblue.com/services/innovation/machine-learning-ai" >Machine Learning & AI</a>
                        </p>
                        <p>
                          <a
                            className="link"
                            href="https://www.doodleblue.com/services/innovation/internet-of-things">Internet of Things</a>
                        </p>
                        <p>
                          <a
                            className="link"
                            href="https://www.doodleblue.com/services/innovation/blockchain">Blockchain</a>
                        </p>
                        <p>
                          <a
                            className="link"
                            href="https://www.doodleblue.com/services/innovation/cybersecurity">Cybersecurity</a>
                        </p>
                      </div>
                      <div className="subMenuItem col-4">
                        <h5>
                          <a href="https://www.doodleblue.com/services/enterpriseapplications">Enterprise Application Development</a>
                        </h5>
                        <p>
                          <a
                            className="link"
                            href="https://www.doodleblue.com/services/enterpriseapplications/enterprise-resource-planning">Enterprise Resource Planning</a>
                        </p>
                        <p>
                          <a
                            className="link"
                            href="https://www.doodleblue.com/services/enterpriseapplications/point-of-sale">Point of Sale</a>
                        </p>
                        <p>
                          <a
                            className="link"
                            href="https://www.doodleblue.com/services/enterpriseapplications/customer-relation-management" >Customer Relationship Management</a>
                        </p>
                        <p>
                          <a
                            className="link"
                            href="https://www.doodleblue.com/services/enterpriseapplications/data-workflow-automation">Data Warehousing & Workflow Automation</a>
                        </p>
                        <p>
                          <a
                            className="link"
                            href="https://www.doodleblue.com/services/enterpriseapplications/business-intelligence"
                           >Business Intelligence</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </h2>
                <h2 className="woww fade-in-bottom" data-wow-delay="0.2s">
                  <span>
                    <a href="https://www.doodleblue.com/industries" className="link">Industries</a>
                  </span>
                  <div className="subMenuItems fade-in animated animated-fast fade-in-bottom">
                    <div className="row">
                      <div className="subMenuItem col-3">
                        <h5>
                          <a href="https://www.doodleblue.com/industries/education">Education</a>
                        </h5>
                      </div>
                      <div className="subMenuItem col-3">
                        <h5>
                          <a href="https://www.doodleblue.com/industries/finance">Finance</a>
                        </h5>
                      </div>
                      <div className="subMenuItem col-3">
                        <h5>
                          <a href="https://www.doodleblue.com/industries/fashion" >Fashion</a>
                        </h5>
                      </div>
                      <div className="subMenuItem col-3">
                        <h5>
                          <a href="https://www.doodleblue.com/industries/hospitality">Hospitality</a>
                        </h5>
                      </div>
                      <div className="subMenuItem col-3">
                        <h5>
                          <a href="https://www.doodleblue.com/industries/telecom">Telecom</a>
                        </h5>
                      </div>
                      <div className="subMenuItem col-3">
                        <h5>
                          <a href="https://www.doodleblue.com/industries/retail">Retail</a>
                        </h5>
                      </div>
                      <div className="subMenuItem col-3">
                        <h5>
                          <a href="https://www.doodleblue.com/industries/healthcare">Healthcare</a>
                        </h5>
                      </div>
                      <div className="subMenuItem col-3">
                        <h5>
                          <a href="https://www.doodleblue.com/industries/transport">Transport</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </h2>
                <h2 className="woww fade-in-bottom" data-wow-delay="0.0s">
                  <span>
                    <a href="https://www.doodleblue.com/aboutus" className="link" >About Us</a>
                  </span>
                </h2>
                <h2 className="woww fade-in-bottom" data-wow-delay="0.5s">
                  <span>
                    <a href="https://www.doodleblue.com/success-stories" className="link" >Success Stories</a>
                  </span>
                </h2>
                <h2 className="woww fade-in-bottom" data-wow-delay="0.3s">
                  <span>
                    <a href="https://www.doodleblue.com/careers" className="link" >Careers</a>
                  </span>
                </h2>
                <h2 className="woww fade-in-bottom" data-wow-delay="0.4s">
                  <span>
                    <a href="https://www.doodleblue.com/blogs" className="link" >Blogs</a>
                  </span>
                </h2>
                <h2 className="woww fade-in-bottom" data-wow-delay="0.4s">
                  <span>
                    <a href="http://community.doodleblue.com/" className="link" >Community</a>
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
       }
      </div>
    </div>
  </div>
  
       
      </>
   ) 
}
}


