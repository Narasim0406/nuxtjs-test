import React from "react";
import Link from 'next/link'
import {ImgLazyLoad} from '../index'
import {Button,ModalHeader,ModalBody,ModalFooter,ModalTitle,ModalDialog,Modal} from 'react-bootstrap'
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';



export class SignUpForm extends React.Component {
  step1={}
  constructor(props) {

    super(props);
  this.state = {
    // numbers:[1,2,3,4,5,6],
    
    show:false, 
    setShow:false,
    toggle:false,
    
    formData: { // set up default form values
      name:"",
      email:""
    },
    type1:{
      placeholder1:"Name",
      placeholder2:"Email"
    },
    
    
  }
  this.validator = new SimpleReactValidator();

}

handleInputChange=(e,name)=>{

}
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
toggle=()=>{

}
handleSubmit=()=>{
  if (this.validator.allValid()) {
let data=this.state.formData
    axios.post(`http://apicommunity.doodlebluedemo.in/mail/downloader`,data)
        .then(res => {
          localStorage.setItem('user', data.name);
          this.refs.logoFile.click()
          this.setState({
            toggle:!this.state.toggle
          })
        })
} else {
    this.validator.showMessages();
    // rerender to show messages for the first time
    // you can use the autoForceUpdate option to do this automatically`
    this.forceUpdate();
  }
  
         
}
handleShow=()=>{
  let show=false
  this.props.onChange(show);  
}
selectedFilter = (value) => {

}
componentDidMount(){
  this.setState({
    toggle:false
  })
}
  
  
  

  render() {
    let {numbers,show, setShow,step1,formData,type1,toggle} = this.state
    let {setModal,downloadLink}=this.props

  return (
    <>
     
      
      <Modal
        show={this.props.showModal}
        onHide={this.handleShow}
        size="lg"
        centered
        aria-labelledby="example-custom-modal-styling-title"
      >
       
        <Modal.Body>
         <div className="signUpForm-modal">
         <div className="text-right">
                <img onClick={this.handleShow} src="/close.svg" className="close-btn-1" />
                </div>
              <div className="text-center">
                <img className="bg-Gif" src="/gifs2.gif"/>
                <div>
                  <img className="signup-Gif" src="/thanks.gif"/>
                </div>
                <div className="text-content">
                  <h4 className="color-blue title"> Download for Free</h4>
                  {!toggle?<p className="sub-description">Please enter the details below. Your contacts are safe with us.</p>:''}
                </div>
                
                {!toggle?<><div>
                      <input className="mt-0 py-4 bg-transparent border-bottom form-stepper-choices"
                      value={formData.name}
                      name="name"
                      placeholder={type1.placeholder1}
                      onClick={ e =>this.handleClick(e,type1.placeholder1)} 
                      onChange={ this.handleChange} 
                      />
                      {this.validator.message('name', formData.name, 'required',{ className: 'text-danger error-msg' })}

                </div>
                <div>
                    <input className="mt-0 py-4 bg-transparent border-bottom form-stepper-choices"
                    placeholder={type1.placeholder2}
                    name="email"
                    value={formData.email}
                    onClick={ e =>this.handleClick(e,type1.placeholder1)} 
                    onChange={ this.handleChange} 
                    />
                    {this.validator.message('Email', formData.email, 'required|email',{ className: 'text-danger error-msg' })}
                </div>
                <button className="btn download-form-btn" onClick={this.handleSubmit} >DOWNLOAD</button></>:<p className="sub-description1 my-5">Thank you for downloading. Please support by attributing us on your projects.</p>}
                <a href={`${downloadLink.link}`}  download ref="logoFile" ></a>
                <img className="bg-Gif-bottom" src="/gifs2.gif"/>
              </div>
              
         </div>
        </Modal.Body>
      </Modal>
    </>
  );
  }
};
export default SignUpForm