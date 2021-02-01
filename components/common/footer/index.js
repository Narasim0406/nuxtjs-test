import {ImgLazyLoad} from '../imgLazyLoad/index'
import { Button } from 'react-bootstrap';
import {Accordion} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import React from 'react';

export class Footer extends React.Component {
constructor(props) {
  super(props);
  
  this.state = {
    responsiveMobileView:false,
    footerSpace:false,
    toggleAccordion:true,
    };
  }
  mediaWidth=()=>{
    let path = window.location.pathname;
    let page = path.split("/").pop();
   
    let mql= window.matchMedia('(max-width: 768px)')
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
  toggleAccordion=(e)=>{
    this.setState({toggleAccordion:!this.state.toggleAccordion})
  }
  componentDidMount() {
    window.addEventListener('resize', this.mediaWidth);
    this.mediaWidth()
    
  }
  


render() {
  let{toggleAccordion}=this.state
    return (
      <>
          <div className="w-100  footer-bg bg-black">

        {this.state.responsiveMobileView? '':

    <div className="page_footer_wrapper">

      <div className="reachOut" >
        <div className="">

          <div  className="">
            <div>
             
              <div className="text-right">
                <a className="link underline-none" href="mailto:sales@doodleblue.com">
                <div className="d-flex justify-content-end mx-3"><div className="point"></div><h5 className="text-white">Reach out to us on<span className="ml-3">sales@doodleblue.com</span></h5></div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      <hr className="border-primary text-primary"/>
      <div >
        <div className="">
          
        <div className="row">      
          <div className="col">
            <div className="footer_column">
              <div className="footer_column_title">
                <a href="https://www.doodleblue.com/industries" className="link1" >Industries</a>
              </div>
              <div className="footer_column_content">
                <ul>
                  <li>
                    <a href="https://www.doodleblue.com/industries/education" className="link1">Education</a>
                  </li>
                  <li>
                    <a href="https://www.doodleblue.com/industries/fashion" className="link1"
                    >Fashion</a>
                  </li>
                  <li>
                    <a href="https://www.doodleblue.com/industries/finance" className="link1"
                    >Financial services</a>
                  </li>
                  <li>
                    <a href="https://www.doodleblue.com/industries/healthcare" className="link1"
                    >Healthcare</a>
                  </li>
                  <li>
                    <a href="https://www.doodleblue.com/industries/hospitality" className="link1"
                    >Hospitality and Leisure</a>
                  </li>
                  <li>
                    <a href="https://www.doodleblue.com/industries/retail" className="link1"
                    >Retail</a>
                  </li>
                  <li>
                    <a href="https://www.doodleblue.com/industries/telecom" className="link1"
                    >Telecommunication</a>
                  </li>
                  <li>
                    <a href="https://www.doodleblue.com/industries/transport" className="link1"
                    >Transport and Logistics</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="footer_column">
              <div className="footer_column_title">
                <a href="https://www.doodleblue.com/services" className="link1">Services</a>
              </div>
              <div className="footer_column_content">
                <ul>
                  <li>
                    <a href="https://www.doodleblue.com/services/digitaltransformation" className="link1"
                    >Digital Transformation</a>
                  </li>
                  <li>
                    <a href="https://www.doodleblue.com/services/uiuxdesign" className="link1"
                    >UI/UX & Design Thinking</a>
                  </li>
                  <li>
                    <a href="https://www.doodleblue.com/services/mobileengineering" className="link1"
                    >Mobile Engineering</a>
                  </li>
                  <li>
                    <a href="https://www.doodleblue.com/services/webtechnology" className="link1"
                    >Web Technology Development</a>
                  </li>
                  <li>
                    <a href="https://www.doodleblue.com/services/innovation" className="link1"
                    >Innovation</a>
                  </li>
                  <li>
                    <a href="https://www.doodleblue.com/services/enterpriseapplications" className="link1"
                    >Enterprise Application Development</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="footer_column">
              <div className="footer_column_title">
                <a href="https://www.doodleblue.com/aboutus" className="link1" >About</a>
              </div>
              <div className="footer_column_content">
                <ul>  <li>
                    
                    <a href="https://www.doodleblue.com/aboutus"
                      className="link1"
                      
                    >Leadership</a>
                  </li>
                  <li>
                    <a href="https://www.doodleblue.com/aboutus" className="link1">Press</a>
                  </li>
                  <li>
                    <a href="" className="link1">Contact Us</a>
                  </li>
                  <li>
                    <a href="https://www.doodleblue.com/success-stories" className="link1">Success Stories</a>
                  </li>
                  <li>
                    <a href="https://www.doodleblue.com/blogs" className="link1">Blogs</a>
                  </li>
                  <li>
                    <a href="https://www.doodleblue.com/terms-and-conditions" className="link1">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="http://community.doodleblue.com/" className="link1">Community</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="footer_column">
              <div className="footer_column_title">
                <a href="https://www.doodleblue.com/careers" className="link1" >Careers</a>
              </div>
              <div className="footer_column_content">
                <ul>
                  <li>
                    <a href="https://www.doodleblue.com/careers/openings" className="link1">View Openings</a>
                  </li>
                  <li>
                    <a href="https://www.doodleblue.com/careers/interns" className="link1">Internship</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>

      <br/>
      <br/>

      <div >
        <div className="row align-items-end justify-content-between">
          <div className="col">
            <div className="footer_logo_wrapper" >
            <img
                src="/doodleblue-footer-logo.svg"
                alt="doodleblue"
                
              />
            </div>

            

            <div className="doodle_caption">
              <span>
                We are a digital strategy consulting boutique that leads digital transformations for global brands,
                leading consultancies, famous startups, fortune 500s and governments.
              </span>
            </div>
          </div>

          <div className="text-right col">
              <div className="footer_social_icons">

              <div className="social_media_wrapper">
                <a target="_blank" href="https://twitter.com/doodleblue7">
                  <span>
                
                  <i class="fab fa-twitter"></i>

                  </span>
                </a>

                <a target="_blank" href="https://www.facebook.com/doodleblue.Innovations/">
                  <span>
                  
                  <i class="fab fa-facebook-f"></i>

                  </span>
                </a>

                <a target="_blank" href="https://www.instagram.com/doodleblue/">
                  <span>
                  <i class="fab fa-instagram"></i>

                  </span>
                </a>

                <a target="_blank" href="https://www.linkedin.com/company/doodleblue/">
                  <span>
                    <i class="fab fa-linkedin-in"></i>
                  </span>
                </a>
              </div>
            </div>

            <div className="footer_tc_wrapper">
              <span
                className="copyrights"
              >&copy; 2020 doodleblue Innovations Pvt. Ltd. | All rights reserved</span>
             
            </div>
          </div>
        </div>
      </div>
      
  </div>
  }
  {this.state.responsiveMobileView? 
  <div className="bg-black">
  <Accordion >
    <Card className="border-0 bg-black">
      <Card.Header>
        <Accordion.Toggle as={Button} className="accord-btn" variant="link" onClick={this.toggleAccordion} eventKey="0">
        Quick Links <span className="ml-2">{toggleAccordion?<i class="fas fa-chevron-down"></i>:<i class="fas fa-chevron-up"></i>}</span>
        
        </Accordion.Toggle>
        <hr className="border w-100"/>
      </Card.Header>
      
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <div className="d-flex justify-content-center">
            <p className="mx-2" >About Us</p>
            <p className="mx-2">Services</p>
            <p className="mx-2">Industries</p>
            <p className="mx-2">Careers</p>
          </div>
          <p className="text-center">Contact Us</p>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
  <div className="bg-black justify-content-between">
     <div className="footer_logo_wrapper" >
     <img
         src="/doodleblue-footer-logo.svg"
         alt="doodleblue"
       />
     </div>
     <div className="doodle_caption">
              <span className="doodle_caption1">
                We are a digital strategy consulting boutique that leads digital transformations for global brands,
                leading consultancies, famous startups, fortune 500s and governments.
              </span>
     </div> 
     <div className="social_media_wrapper pb-4 d-flex justify-content-center">
              <a target="_blank" href="https://twitter.com/doodleblue7">
                <span>
                  <i class="fab fa-twitter"></i>
                </span>
              </a>

              <a target="_blank" href="https://www.facebook.com/doodleblue.Innovations/">
                <span>
                  <i class="fab fa-facebook-f"></i>
                </span>
              </a>

              <a target="_blank" href="https://www.instagram.com/doodleblue/">
                <span>
                  <i class="fab fa-instagram"></i>
                </span>
              </a>
            </div> 
     
  </div>
  </div>
   :''}
   </div>
   
  </>
   ) 
}

}
export default Footer

