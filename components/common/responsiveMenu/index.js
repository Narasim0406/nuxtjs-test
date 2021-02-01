import {ImgLazyLoad} from '../imgLazyLoad/index'
import { Button,Accordion,Card } from 'react-bootstrap';
import React from 'react';
import Link from 'next/link'



export class ResponsiveMenu extends React.Component {

  state = {isToggleOn: false,
    responsiveHeader:false,
    responsiveMobileView:false,
    language: '',
    menuActive:"",
  scroll:false};

   
    accordionClick=(name)=>{
      
      if(this.state.menuActive==name){
        this.setState({
          menuActive:""
        })  
      }
      else{
      this.setState({
        menuActive:name
      })
      }
    }
  handleClick = () => {
    var lang = true;
    this.props.onSelectLanguage(lang);            
}


render() {
  let {menuActive}=this.state
    return (
      <>
      <div className="menuPageWrapper bg-white">
          <Link href={`/`}>
            <a className="responsive-menu-logo">
               <ImgLazyLoad src={'/logo-dark.svg'} className='logo p-2 m-4 mr-3'></ImgLazyLoad>
            </a>
          </Link>
            <div className="col-12 responsive-menu-link-head mt-5">
            <Accordion >
              <Card className="border-0 responsive-header-card text-dark">
                <Card.Header className="p-0 bg-white border-0">
                 
                    <a href="https://www.doodleblue.com/services" className="responsive-menu-link accordion-menu">Services  </a><Accordion.Toggle as={Button} className="custom-btn" variant="link" onClick={()=>this.accordionClick("services")} eventKey="0">{menuActive=="services"?'-':'+'}</Accordion.Toggle>
                  
                </Card.Header>
                
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                   
                      <p className="responsive-link mx-2" ><a href="https://www.doodleblue.com/services/digitaltransformation">Digital Transformation</a></p>
                      <p className="responsive-link mx-2"><a href="https://www.doodleblue.com/services/uiuxdesign">UI/UX & Design Thinking</a></p>
                      <p className="responsive-link mx-2"><a href="https://www.doodleblue.com/services/mobileengineering">Mobile Engineering</a></p>
                      <p className="responsive-link mx-2"><a href="https://www.doodleblue.com/services/webtechnology">Web Technology Development</a></p>
                      <p className="responsive-link mx-2"><a href="https://www.doodleblue.com/services/innovation">Innovation</a></p>
                      <p className="responsive-link mx-2"><a href="https://www.doodleblue.com/services/enterpriseapplications">Enterprise Application Development</a></p>
                   
                   
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            
              <Card className="border-0 responsive-header-card text-dark">
                <Card.Header className="p-0 bg-white border-0">
                  
                    <a href="https://www.doodleblue.com/industries" className="responsive-menu-link accordion-menu">Industries</a> <Accordion.Toggle as={Button} className="custom-btn" variant="link" eventKey="1" onClick={()=>this.accordionClick("industries")}>{menuActive=="industries"?'-':'+'}</Accordion.Toggle>
                  
                </Card.Header>
                
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                   
                      <p className="mx-2 responsive-link" ><a href="https://www.doodleblue.com/industries/education">Education</a></p>
                      <p className="mx-2 responsive-link"><a href="https://www.doodleblue.com/industries/finance">Finance</a></p>
                      <p className="mx-2 responsive-link"><a href="https://www.doodleblue.com/industries/fashion" >Fashion</a></p>
                      <p className="mx-2 responsive-link"><a href="https://www.doodleblue.com/industries/hospitality">Hospitality & Leisure</a></p>
                      <p className="mx-2 responsive-link"><a href="https://www.doodleblue.com/industries/telecom">Telecommunication</a></p>
                      <p className="mx-2 responsive-link"><a href="https://www.doodleblue.com/industries/transport">Transport & Logistics</a></p>

                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="border-0 p-0 responsive-header-card text-dark">
                <Card.Header className="p-0 bg-white border-0">
                  
                    <a href="https://www.doodleblue.com/aboutus" className="responsive-menu-link accordion-menu">About us </a> <Accordion.Toggle as={Button} className="custom-btn" variant="link" eventKey="2" onClick={()=>this.accordionClick("aboutus")}>{menuActive=="aboutus"?'-':'+'}</Accordion.Toggle>
                  
                </Card.Header>
                
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                   
                  <p className="mx-2 responsive-link"><a href="https://www.doodleblue.com/aboutus">Leadership</a></p>
                  <p className="mx-2 responsive-link"><a href="https://www.doodleblue.com/aboutus">Press</a></p>
                   
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="border-0 p-0 responsive-header-card text-dark">
                <Card.Header className="p-0 bg-white">
                  <Accordion.Toggle as={Button} variant="link" >
                    <a href="https://www.doodleblue.com/success-stories" className="responsive-menu-link">Success</a>
                  </Accordion.Toggle>
                </Card.Header>
                
              </Card>
              <Card className="border-0 responsive-header-card text-dark">
                <Card.Header className="p-0 bg-white">
                  <Accordion.Toggle as={Button} variant="link" >
                    <a href="https://www.doodleblue.com/success-stories" className="responsive-menu-link">Stories</a>
                  </Accordion.Toggle>
                </Card.Header>
                
                
              </Card>
              <Card className="border-0 responsive-header-card text-dark">
                <Card.Header className="p-0 bg-white">
                  <Accordion.Toggle as={Button} variant="link" >
                    <a href="https://www.doodleblue.com/careers" className="responsive-menu-link">Careers</a>
                  </Accordion.Toggle>
                </Card.Header>
                
               
              </Card>
              <Card className="border-0 responsive-header-card text-dark">
                <Card.Header className="p-0 bg-white">
                  <Accordion.Toggle as={Button} variant="link" >
                    <a href="https://www.doodleblue.com/blogs" className="responsive-menu-link">Blogs</a>
                  </Accordion.Toggle>
                </Card.Header>
                
              </Card>
              <Card className="border-0 responsive-header-card text-dark">
                <Card.Header className="p-0 bg-white">
                  <Accordion.Toggle as={Button} variant="link" >
                    <a href="http://community.doodleblue.com/" className="responsive-menu-link">Community</a>
                  </Accordion.Toggle>
                </Card.Header>
                
              </Card>
              </Accordion>
            </div>
          
        </div>
      </>
   ) 
}
}


