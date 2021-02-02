import React from "react";
import Link from 'next/link'
import {ImgLazyLoad} from '../index'
import {Button,ModalHeader,Container,Row,Col,Dropdown,ButtonGroup,ModalBody,ModalFooter,ModalTitle,ModalDialog,Modal} from 'react-bootstrap'
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';
import {
  
  FacebookShareButton,
  
  PinterestShareButton,
  
  TwitterShareButton,
  
  FacebookIcon,
  
  PinterestIcon,
  
  TwitterIcon,
} from "react-share";
// import { SketchPicker } from 'react-color';
import { ChromePicker } from 'react-color'
import {IconShowcaseDownload} from '../index'
import dynamic from 'next/dynamic'
const SignUpForm = dynamic(() => import('../signUpForm'))
// import dynamic from 'next/dynamic'
// const IconShowcaseLeft = dynamic(() => import('../iconShowcaseDownload'))


export class EditIconPopup extends React.Component {
  step1={}
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.state = {
      // numbers:[1,2,3,4,5,6],
      displayColorPicker: false,
      show:false, 
      sharePopUp:false,
      setShow:false,
      toggle:false,
      background:'#333',
      loggedIn:false,
      downloadState:false,
      downloadLink:"src/",
      formData: { // set up default form values
        name:"",
        email:""
      },
      type1:{
        placeholder1:"Name",
        placeholder2:"Email"
      },
      dropDownValue: "256px",
      dropDownType: "SVG",
      

    
  }
  this.validator = new SimpleReactValidator();
  // this.checkAttribute = this.checkAttribute.bind(this);

}

handleInputChange=(e,name)=>{

}
openColorPicker = () => {
  this.setState({ displayColorPicker: !this.state.displayColorPicker })
};
handleChangeComplete = (color) => {
  this.setState({ background: color.hex });
};
handleClose = () => {
  this.setState({ displayColorPicker: false })
};


handleChange=(event)=> {
  let { formData } = this.state;
    const target = event.target;
   
    const name = target.name;
    const value = target.value;
    
    this.step1[name] = target.value;
    this.setState({ formData: this.step1},()=>{
    });
   
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
openPopUp=()=>{
  let{downloadState}=this.state
  this.setState({downloadState: !downloadState})
  console.log(this.state.downloadState,"dState")
}

handleShow=()=>{
  let show=false
  this.props.onChange(show);  
}
changeValue(text) {
  this.setState({dropDownValue: text})
}
changeType(text) {
  this.setState({dropDownType: text})
}




downloadIcon=()=>{
  
  this.refs.child.downloadSVG()
}

checkLog=()=>{
  if(localStorage.getItem('user')){
    this.setState({loggedIn:true})
  }
}

showModal=(name)=>{
  console.log("fdhgfhgdfrtyrt", this.props, this.state, name)
  this.setState({downloadLink:name})
    if(localStorage.getItem('user')){
      this.downloadIcon()
    } else {
    this.setState({setModal:!this.state.setModal})

  }
}
hideModal=(value)=>{
  this.setState({setModal:!this.state.setModal})
  this.checkLog()

}


componentDidMount(){
  // this.checkAttribute()
  // window.addEventListener('load', this.checkAttribute());

}
  

  render() {
    // let {numbers,show, setShow,step1,formData,type1,toggle} = this.state
    // let {setModal,downloadLink}=this.props
    const popover = {
      position: 'absolute',
      zIndex: '2',
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }
    
    let {background,downloadState,loggedIn}=this.state
    let {list,selectedIcon}=this.props
    
  return (
    <>
     
      
      <Modal
        show={this.props.showModal}
        onHide={this.handleShow}
        size="xl"
        centered
        aria-labelledby="example-custom-modal-styling-title"
      >
       
        <Modal.Body>
            
            <Row className="p-3">
              <Col className="border"> 
                <IconShowcaseDownload mainIcon={selectedIcon} iconSize={this.state.dropDownValue} iconType={this.state.dropDownType}  ref="child" list={list} />
              </Col>
              <Col className="p-2 px-4">
                  <div className="">
                    <div className="mb-4 d-flex justify-content-between">
                      <h3 className="mb-2">{selectedIcon.link.name}</h3>
                      {/* <iframe className="close-btn-1" id="svgEl" src="/arrow-right.svg"/> */}
                      {/* <object id="svg-object" data="/close.svg" type="image/svg+xml"></object> */}
                      <img onClick={this.handleShow} src="/close.svg" className="close-btn-1" />
                    </div>
                    <Row>
                      <Col className="pr-0" md={4}>
                      <Dropdown as={ButtonGroup} className="border  shadow-sm rounded w-100">
                            <Dropdown.Toggle className="w-100 d-flex align-items-center justify-content-between py-3  bg-white" split variant="white" id="dropdown-custom-1">{this.state.dropDownType}</Dropdown.Toggle>
                              <Dropdown.Menu > 
                                <Dropdown.Item as="button"><div onClick={(e) => this.changeType(e.target.textContent)}>SVG</div></Dropdown.Item>
                                <Dropdown.Item as="button"><div onClick={(e) => this.changeType(e.target.textContent)}>PNG</div></Dropdown.Item>
                                <Dropdown.Item as="button"><div onClick={(e) => this.changeType(e.target.textContent)}>JPEG</div></Dropdown.Item>
                              </Dropdown.Menu>  
                          </Dropdown>  
                      </Col>
                      <Col className="pr-0" md={4}>
                        {/* <Button className="bg-white border shadow-sm text-dark py-3 w-100"  active>SVG</Button>{' '} */}
                        <Dropdown as={ButtonGroup} className="border shadow-sm rounded w-100">
                           <Dropdown.Toggle className="w-100 d-flex align-items-center justify-content-between py-3 bg-white" split variant="grey" id="dropdown-custom-2">{this.state.dropDownValue}</Dropdown.Toggle>
                            <Dropdown.Menu > 
                              <Dropdown.Item as="button"><div onClick={(e) => this.changeValue(e.target.textContent)}>256px</div></Dropdown.Item>
                              <Dropdown.Item as="button"><div onClick={(e) => this.changeValue(e.target.textContent)}>128px</div></Dropdown.Item>
                              <Dropdown.Item as="button"><div onClick={(e) => this.changeValue(e.target.textContent)}>64px</div></Dropdown.Item>
                              <Dropdown.Item as="button"><div onClick={(e) => this.changeValue(e.target.textContent)}>32px</div></Dropdown.Item>
                              <Dropdown.Item as="button"><div onClick={(e) => this.changeValue(e.target.textContent)}>24px</div></Dropdown.Item>
                              <Dropdown.Item as="button"><div onClick={(e) => this.changeValue(e.target.textContent)}>16px</div></Dropdown.Item>
                            </Dropdown.Menu>                    
                      </Dropdown>  
                      </Col>
                      <Col md={2}>
                        <Button className="bg-white shadow-sm text-primary border add-button" active>+</Button>{' '}
                      </Col>
                    </Row>
                    <Row className="my-3 ">
                      <Col md={8} className="pr-0">
                        <Button onClick={loggedIn?this.downloadIcon:()=>this.showModal(selectedIcon.link.name)} className="bg-primary shadow-sm text-white w-100 py-3" active>Download</Button>
                        {/* <Button onClick={this.downloadIcon} className="bg-primary shadow-sm text-white w-100 py-3" active>Download</Button>{' '} */}
                      </Col>  
                      <Col xl={2} lg={3} md={3} className="pr-0">
                        <Button className="bg-white border shadow-sm text-white py-3 w-75" onClick={this.openPopUp} active>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M8.59003 13.51L15.42 17.49" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M15.41 6.51001L8.59003 10.49" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </Button>{' '}
                        {downloadState?<div className="shadow-sm p-1 border rounded popup-button d-flex align-items-center">
                                  <FacebookShareButton
                                    // url={`${shareUrl}${listName}#${index}`}
                                    // quote={title}
                                    className="Demo__some-network__share-button"
                                  >
                                    <FacebookIcon size={32} round />
                                  </FacebookShareButton>
                                  <PinterestShareButton
                                    // url={`${shareUrl}${listName}#${index}`}
                                    // media={`${String(window.location)}/${name.link}`}
                                    className="Demo__some-network__share-button"
                                  >
                                    <PinterestIcon size={32} round />
                                  </PinterestShareButton>
                                  
                                  <TwitterShareButton
                                    // url={`${shareUrl}${listName}#${index}`}
                                    // title={title}
                                    className="Demo__some-network__share-button"
                                  >
                                    <TwitterIcon size={32} round />
                                  </TwitterShareButton>
                        </div>:''}
                      </Col>  
                    </Row> 
                    {/* <p className="text-black">License</p> 
                    <p className="text-black">Lorem ipsum generator dummy text as of now is placed for a dummy license usage</p>  */}
                    <p className="color-blue">Notification Icon in Other Styles</p>
                  </div>
                  <Container fluid className="py-3 ">
                      <Row xl={4} lg={2} sm={1} xs={1} className="justify-content-md-center" >
                      {(list.slice(selectedIcon.id+1,selectedIcon.id+5)).map((name, index)=>{
                          return <Col className="text-center">
                                  <img src={name.link}/>
                                  <p>{name.name}</p>    
                                </Col>
                            })}
                      </Row>    
            </Container> 
              </Col>
            </Row>
          
        </Modal.Body>
      </Modal>
      <SignUpForm showModal={this.state.setModal} downloadLink={this.downloadIcon} onChange={this.hideModal}/>
    </>
  );
  }
};
export default EditIconPopup