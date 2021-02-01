import React from "react";
import Link from 'next/link'
import {ImgLazyLoad} from '../index'
import {Button,ModalHeader,ModalBody,ModalFooter,ModalTitle,ModalDialog,Modal} from 'react-bootstrap'
import {
  FacebookShareButton,

  PinterestShareButton,
  
  TwitterShareButton,
 
    FacebookIcon,
   
    PinterestIcon,
   
    TwitterIcon,
  
} from "react-share";
export class SharePopup extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    show:false, 
    setShow:false,
    toggle:false,
    downloadBtn:false,
    step1:{
      name:"",
      email:""
    },
    loggedIn:false,
    type1:{
      placeholder1:"Name",
      placeholder2:"Email"
    },
  }
}


openButton = (name,index) => {
  
   this.setState({
     downloadBtn:!this.state.downloadBtn,
    })
  
}
handleClick=(e,name)=>{
  let {type1}=this.state
  let key=e.target.name
  let obj={}
  obj=type1
  obj[key]=''
  this.setState({
    type1 : obj
  })
}
checkLog=()=>{
  if(localStorage.getItem('user')){
    this.setState({loggedIn:true})
  }
}
toggle=()=>{
  
  this.setState({
    toggle:!this.state.toggle
  })
}
handleShow=()=>{
  let show=false
  this.props.onChange(show);  
}
selectedFilter = (value) => {

}
showModal=(item)=>{
  this.props.onLogged(name); 
}


  componentDidMount(){
    this.checkLog()
  }
  

  render() {
    let {numbers,show,loggedIn, setShow,step1,downloadBtn,toggle} = this.state
    let {setModal,pageTitle,item,itemIndex,pageName}=this.props
    const shareUrl = 'http://community.doodleblue.com/';
    const title = 'Community.Doodleblue'; 
    

  return (
    <>
     
      
      <Modal className=""
        show={this.props.showModal}
        onHide={this.handleShow}
        size="sm"
        centered
        aria-labelledby="example-custom-modal-styling-title"
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {pageTitle.toUpperCase()}
        </Modal.Title>
      </Modal.Header>
        <Modal.Body className="bg-transparent border-0">
         <div className="share-modal">
              {pageTitle=='Gifs'?<div className="text-center d-flex justify-content-center">
              <div className="col-md-12 col-sm-12 col-xs-12 " onClick={this.openButton} >
                <div className="icon-card-list2 rounded-top custom-shadow">
                   <div className="card-icon-list">
                   {item.imgIcon!==undefined?<img  src={item.imgIcon} ></img>:''}
                   </div>
                 </div>
                 {downloadBtn ?
                   <button className="mx-0 px-0 py-3 w-100 border-0 custom-shadow rounded-bottom  bg-primary gif-button-bottom" >
                     {item.buttonTxt!==undefined?<p className="pl-3 text-white text-left">{item.buttonTxt}</p>:''}
                     <div className="d-flex justify-content-around">
                     {!loggedIn?<a className=""  onClick={()=>this.showModal(name)}>
                          {/* href={`${name.downloadLink}`} */}
                              <div className="download-btn">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M7 10L12 15L17 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M12 15V3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                </div>
                          </a>
                          :<a href={`${item.link}`} download>
                              <div className="download-btn">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M7 10L12 15L17 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M12 15V3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                </div>
                          </a>}
                     <a>
                         <div className="share-btn tooltip-hover">
                           
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                             <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                             <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                             <path d="M8.59003 13.51L15.42 17.49" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                             <path d="M15.41 6.51001L8.59003 10.49" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                             </svg>
                            
                             {/* <img className="share-list-icon" src="/share-2.svg" /> */}
                             <span class="tooltiptext">
                               
                               <FacebookShareButton
                                 url={`${shareUrl}${pageName}?${name.buttonTxt}#${itemIndex}`}
                                 quote={title}
                                 className="Demo__some-network__share-button"
                               >
                                 <FacebookIcon size={32} round />
                               </FacebookShareButton>
                               <PinterestShareButton
                                 url={`${shareUrl}${pageName}?${name.buttonTxt}#${itemIndex}`}
                                 media={`${String(".location")}/${item.link}`}
                                 className="Demo__some-network__share-button"
                               >
                                 <PinterestIcon size={32} round />
                               </PinterestShareButton>
                               
                               <TwitterShareButton
                                 url={`${shareUrl}${pageName}?${name.buttonTxt}#${itemIndex}`}
                                 title={title}
                                 className="Demo__some-network__share-button"
                               >
                                 <TwitterIcon size={32} round />
                               </TwitterShareButton>
                               </span>
                           
                         </div>
                     </a>
                     </div> 
                   </button>:
                   <button className="mx-0 px-0 py-3 w-100 border-0 custom-shadow rounded-bottom  bg-primary d-flex justify-content-between" >
                   <span className="pl-3 text-white">{item.buttonTxt}</span>
                   <a className="px-2">
                   <svg width="55" height="16" viewBox="0 0 55 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <line y1="8.16455" x2="47.4178" id="#arrowLine1" y2="8.16455" stroke="#fff"/>
                   <rect x="47.4307" y="1.37166" id="#arrowLine2" width="9.6066" height="9.6066" transform="rotate(45 47.4307 1.37166)" stroke="#fff"/>
                   </svg>
                   </a>
                    </button>
                 }
               </div>
              </div>:
              <div className="col-md-12 col-sm-12 my-2" >
                        
              <div className="icon-card-list">
                <div className="card-icon-list">
                  <img className="img-icon" src={item.link} />
                  <div className="icon-actions"  >
                  {!loggedIn?<img className="download-list-icon" src="/download.svg" onClick={()=>this.showModal(item)} />
                    : <a href={`${item.link}`}  download><img className="download-list-icon" src="/download.svg" /></a>}
                    <div class="tooltip">
                      <img className="share-list-icon1" src="/share-2.svg" />
                      <span class="tooltiptext">
                      
                      <FacebookShareButton
                        url={`${shareUrl}${pageName}#${itemIndex}`}
                        quote={title}
                        className="Demo__some-network__share-button"
                      >
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>
                      <PinterestShareButton
                        url={`${shareUrl}${pageName}#${itemIndex}`}
                        media={`${String(window.location)}/${item.link}`}
                        className="Demo__some-network__share-button"
                      >
                        <PinterestIcon size={32} round />
                      </PinterestShareButton>
                      
                      <TwitterShareButton
                        url={`${shareUrl}${pageName}#${itemIndex}`}
                        title={title}
                        className="Demo__some-network__share-button"
                      >
                        <TwitterIcon size={32} round />
                      </TwitterShareButton>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
         
            </div>
            }
              
         </div>
        </Modal.Body>
      </Modal>
    </>
  );
  }
};
export default SharePopup