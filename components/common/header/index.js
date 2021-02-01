import {ImgLazyLoad} from '../imgLazyLoad/index';
import {Menu} from '../index';
import React from 'react';
import Link from 'next/link'
import { throwStatement } from '@babel/types';



export class Header extends React.Component {
constructor(props) {
  super(props);
  this.state = {isToggleOn: false,
                responsiveHeader:false,
                responsiveMobileView:false,
                language: '',
                footerSpace:false,
                hideContact:true,
              scroll:false};
              
  this.handleClick = this.handleClick.bind(this);
  }
  mediaWidth=()=>{
  var path = window.location.pathname;
  // 
  var page = path.split("/").pop();
  if(path=='/'){
    this.setState({
    footerSpace:true
    })
  }
    let mql= window.matchMedia('(max-width: 1024px)')
    
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
  listenToScroll = () => {
    
    const winScroll= document.body.scrollTop || document.documentElement.scrollTop
  
    const height =document.documentElement.scrollHeight -
      document.documentElement.clientHeight
  
    const scrolled = winScroll / height
  // 
    console.log(scrolled,"SCROLLED")
    if(scrolled>=0.03){
      
      this.setState({
        responsiveHeader:true,
      });
    }
    else{
      this.setState({
        responsiveHeader:false,
      });
    }
    if(scrolled>=0.60){
      this.setState({
        hideContact:false,
      });
    }else{
      this.setState({
        hideContact:true,
      });
    }

  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      scroll:true
    }));
    }
  handleLanguage = (langValue) => {
      this.setState({isToggleOn: !this.state.isToggleOn,scroll:false});
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);
    window.addEventListener('resize', this.mediaWidth);
    this.mediaWidth();
    this.listenToScroll()
  }
  
  
  

render() {
    return (
      <>
      <header className="headerLogoContainer bg-white justify-content-center">
        {/* <Link href="/">
                    <a> */}
         {this.state.responsiveMobileView ?'':<div className="d-flex mx-5 py-4 align-items-center justify-content-between">
          
            <a href="https://www.doodleblue.com/" >
          <ImgLazyLoad src={'/logo-dark.svg'} className='logo mr-3'></ImgLazyLoad>
          <h5>{this.state.responsiveHeader}</h5>
          </a>
          
          
              <div className=" d-flex align-tems-center">
                <ul className="nav">
                  <li className="nav-item">
                    <a href="https://www.doodleblue.com/services" className="link nav-link" ces>Services</a>
                  </li>
                  
                  
                  <li className="nav-item">
                    <a href="https://www.doodleblue.com/industries" className="link nav-link" >Industries</a>
                    
                  </li>
                  
                  <li className="nav-item">
                    <a href="https://www.doodleblue.com/aboutus" className="link nav-link" >About Us</a>
                    
                  </li>
                  
                  <li className="nav-item">
                    <a href="https://www.doodleblue.com/success-stories" className="link nav-link" >Success Stories</a>
                    
                  </li>
                  
                  <li className="nav-item">
                    <a href="https://www.doodleblue.com/careers" className="link nav-link" >Careers</a>
                    
                  </li>
                  
                  <li className="nav-item">
                    <a href="https://www.doodleblue.com/blogs" className="link nav-link" >Blogs</a>
                    
                  </li>
                  <li className="nav-item">
                    <a href="http://community.doodleblue.com/" className="link nav-link active" >Community</a>
                  </li> 
                  <li onClick={this.handleClick} > 
                  {/* <img src="/assets/images/menu-icon-blue.png" alt="menu" />*/}
                  <ImgLazyLoad src={'/menu-icon-blue.png'} ></ImgLazyLoad>
                   </li> 
                </ul>  
              </div>
          </div>
         }
        </header>
        
        {!this.state.responsiveMobileView?
          <header className="responsiveHeader">
          
            <a id={`${this.state.responsiveHeader?'slide-left':'slide-left-reverse'}`}  href="https://www.doodleblue.com/">
              <div className="logoWrapper ">
                <img src="/logo.png" alt="doodleblue" />
              </div>
            </a>
            <div id={`${this.state.responsiveHeader?'slide-right':'slide-right-reverse'}`} className={`logoWrapper menuWrapper in-right" `} onClick={this.handleClick} >
              <img src="/menu-icon-white.png" alt="menu" />
            </div>
          
          </header>:''}    
          
        
         {/* {this.state.responsiveMobileView&& !this.state.responsiveHeader ? */}
         <header class="responsiveHeader">
         <a id={`${this.state.responsiveMobileView&& !this.state.responsiveHeader ?'slide-left':'slide-left-reverse'}`} href="https://www.doodleblue.com/">
         
           <div class="logoWrapper ">
             <img src="/logo.png" alt="doodleblue" />
           </div>
         
         </a>
         <div id={`${this.state.responsiveMobileView&& !this.state.responsiveHeader?'slide-right':'slide-right-reverse'}`} class="logoWrapper menuWrapper in-right " onClick={this.handleClick} >
           <img src="/menu-icon-white.png" alt="menu" />
         </div>
       </header>    
       
       {/* :''} */}
        {this.state.hideContact?<div className="contact-us wow fadeInRight">
          <a id="slide-right" href="https://www.doodleblue.com/contactus"> 
        {this.state.responsiveMobileView ?<img className="mob" src="/82e8502.png"/> :<img className="desk" src="/1617fc0.png"/>}
          </a>
        </div>:''}
        {this.state.isToggleOn ? <Menu  onSelectLanguage={this.handleLanguage}/> : ''}
        {this.state.scroll?
        <style jsx>

                        {`
                        html {
                          overflow-y: hidden;
                         }
                         
                        `}
        </style>:''}
        {this.state.footerSpace?
        <style jsx>

                        {`
                        .footer-bg {
                          margin-top: 0 !important;
                        }
                         
                        `}
        </style>:''}
        {this.state.hideContact?
        <style jsx>

                        {`
                        .footer-bg .page_footer_wrapper {
                          background-color:#fff !important
                        }
                         
                        `}
        </style>:''}
   </>
   ) 
}
}
export default Header



