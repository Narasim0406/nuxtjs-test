import React from "react";
import Link from 'next/link'
import {ImgLazyLoad} from '../index'
import {Button,ModalHeader,ModalBody,ModalFooter,ModalTitle,ModalDialog,Modal} from 'react-bootstrap'
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';



export class SendItForm extends React.Component {
  step1={}
  constructor(props) {

    super(props);
  this.state = {
    // numbers:[1,2,3,4,5,6],
    
    show:false, 
    setShow:false,
    toggle:false,
    
    formData: { // set up default form values
      serviceName:'',
      name:"",
      email:"",
      companyName:"",
      industryType:"",
      location:"",
      desDetails:"",
      styleGuide:"",
      requimentDoc:""
    },
    type1:{
      placeholder1:"Name",
      placeholder2:"Email"
    },
    serviceList:[
      {name:"Digital Transformation",
       icon:"/Group 1550.svg"},
      {name:"Web Development",
      icon:"/coding 1.svg"},
      {name:"UI/UX Design",
      icon:"/chat.png"},
      {name:"Mobile Engineering",
      icon:"/computer.svg"},
      {name:"Enterprise Application",
      icon:"/wholesale 1.svg"},
      {name:"Innovation",
      icon:"/idea 1.svg"},
      ]
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
handleFileChange=(fileInput, type)=> {
      
  let { formData } = this.state;
    let { target } = fileInput;
    // const target = event.target;

    const name = target.name;
    const value = target.files[0];
    
    this.step1[name] = target.files[0];
    this.setState({ formData: this.step1}
    );
   
  
}
handleSrvcButton=(e,name)=>{
  this.setState({
   serviceName:name 
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
toggle=()=>{

}
handleSubmit=()=>{
  if (this.validator.allValid()) {
let data=this.state.formData
const formData = new FormData();
formData.append("name", data.name);
formData.append("service", data.service);
formData.append("companyName", data.companyName);
formData.append("desDetails", data.desDetails);
formData.append("email", data.email);
formData.append("industryName", data.industryName);
formData.append("location", data.location);
formData.append("requimentDoc", data.requimentDoc);
formData.append("styleGuide", data.styleGuide);
axios.post(`http://apicommunity.doodlebluedemo.in/mail/challengeUs`, formData )
.then(res => {
  
})
} else {
    this.validator.showMessages();
    // rerender to show messages for the first time
    // you can use the autoForceUpdate option to do this automatically`
    this.forceUpdate();
  }
  
         
}
handleClose=()=>{
  console.log("THIS HITS")
  this.props.handleClose();
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
    let {numbers,show, setShow,step1,formData,type1,toggle,serviceList,serviceName} = this.state
    let {setModal,downloadLink}=this.props

  return (
    <>
     
         <div className="send-it-formbox">
                <div className="d-flex justify-content-between">
                  <ImgLazyLoad className="logo-consult-icon" src="/logo-dark.svg"/>                  
                  
                  <div onClick={this.handleClose}><ImgLazyLoad className="close-icon"  src="/close.svg"/></div>
                  
                </div>
             <div>
                {!toggle?<>
                <h5 className="normal-title p-0 mt-4">Choose a service</h5>
                <div className="row">
                  {serviceList.map((name, index)=>{
                    return  <div className="col-md-4 mt-4">
                            <button className={`${serviceName==name.name?"srvc-active":""} btn shadow-sm w-100 d-flex`} onClick={e =>this.handleSrvcButton(e,name.name)}>
                              <ImgLazyLoad className="d-flex align-items-start service-btn-icon  mr-3" src={name.icon}/> {name.name}
                            </button>
                         </div>
                  })}    
                  
                  <div className="col-md-6 mt-4">
                        <label htmlFor="name">Name</label>
                        <input className="mt-0 w-100 py-0 bg-transparent border-bottom sendit-formbox"
                        value={formData.name}
                        name="name"
                        id="name"
                        // placeholder={type1.placeholder1}
                        onClick={ e =>this.handleClick(e,type1.placeholder1)} 
                        onChange={ this.handleChange} 
                        />
                        {this.validator.message('name', formData.name, 'required',{ className: 'text-danger error-msg' })}

                  </div>
                  <div className="col-md-6 mt-4">
                      <label htmlFor="email">Email</label>
                      <input className="mt-0 w-100 py-0 bg-transparent border-bottom sendit-formbox"
                      // placeholder={type1.placeholder2}
                      name="email"
                      id="email"
                      value={formData.email}
                      onClick={ e =>this.handleClick(e,type1.placeholder1)} 
                      onChange={ this.handleChange} 
                      />
                      {this.validator.message('Email', formData.email, 'required|email',{ className: 'text-danger error-msg' })}
                  </div>
                  <div className="col-md-6 mt-4">
                      <label htmlFor="companyName">Company Name</label>
                      <input className="mt-0 w-100 py-0 bg-transparent border-bottom sendit-formbox"
                      // placeholder={type1.placeholder2}
                      name="companyName"
                      id="companyName"
                      value={formData.companyName}
                      onClick={ e =>this.handleClick(e,type1.placeholder1)} 
                      onChange={ this.handleChange} 
                      />
                      {this.validator.message('Company name', formData.email, 'required',{ className: 'text-danger error-msg' })}
                  </div>
                  <div className="col-md-6 mt-4">
                      <label htmlFor="industryType">Industry Name</label>
                      <input className="mt-0 w-100 py-0 bg-transparent border-bottom sendit-formbox"
                      // placeholder={type1.place|industryTypeholder2}
                      name="industryType"
                      id="industryType"
                      value={formData.industryType}
                      onClick={ e =>this.handleClick(e,type1.placeholder1)} 
                      onChange={ this.handleChange} 
                      />
                      {this.validator.message('Industry type', formData.industryType, 'required',{ className: 'text-danger error-msg' })}
                  </div>
                  <div className="col-md-6 mt-4">
                      <label htmlFor="location">Location</label>
                      <input className="mt-0 w-100 py-0 bg-transparent border-bottom sendit-formbox"
                      // placeholder={type1.placeholder2}
                      name="location"
                      id="location"
                      value={formData.location}
                      onClick={ e =>this.handleClick(e,type1.placeholder1)} 
                      onChange={ this.handleChange} 
                      />
                      {this.validator.message('location', formData.location, 'required',{ className: 'text-danger error-msg' })}
                  </div>
                  <div className="col-md-6 mt-4">
                      <label htmlFor="desDetails">Describe details</label>
                      <input className="mt-0 w-100 py-0 bg-transparent border-bottom sendit-formbox"
                      // placeholder={type1.placeholder2}
                      name="desDetails"
                      id="desDetails"
                      value={formData.desDetails}
                      onClick={ e =>this.handleClick(e,type1.placeholder1)} 
                      onChange={ this.handleChange} 
                      />
                      {this.validator.message('desDetails', formData.desDetails, 'required',{ className: 'text-danger error-msg' })}
                  </div>
                  <div className="col-md-6 mt-4">
                      
                      <div className="d-flex align-items-center">
                        <label htmlFor="styleGuide">Style Guides</label>
                          <button className="btn btn-transparent sendit-upload-btn" onClick={() => this.refs.logoFile.click()}>Upload</button>
                          {/* {this.validator.message('Requirement Document', formData.requimentDoc, 'required',{ className: 'text-danger error-msg' })} */}
                          <input type="file" className="d-none" accept="image/*" onChange={(e) => this.handleFileChange(e, 'logo')} ref="logoFile" name="styleGuide" />
                      </div>
                      {formData.styleGuide&&<p>{formData.styleGuide.name}</p>}                     
                  
                      {this.validator.message('styleGuide', formData.styleGuide, 'required',{ className: 'text-danger error-msg' })}
                  </div>
                  <div className="col-md-6 mt-4">
                      
                      <div className="d-flex align-items-center">
                        <label htmlFor="email">Required Docs</label>
                          <button className="btn btn-transparent sendit-upload-btn" onClick={() => this.refs.logoFile1.click()}>Upload</button>
                          {/* {this.validator.message('Requirement Document', formData.requimentDoc, 'required',{ className: 'text-danger error-msg' })} */}
                          <input type="file" className="d-none" accept="image/*" onChange={(e) => this.handleFileChange(e, 'logo')} ref="logoFile1" name="requimentDoc" />
                      </div>
                      {formData.requimentDoc&&<p>{formData.requimentDoc.name}</p>}

                      {this.validator.message('Email', formData.requimentDoc, 'required',{ className: 'text-danger error-msg' })}
                  </div>
                </div>                
                <button className="btn sendit-download-form-btn" onClick={this.handleSubmit} >
                  Send it in
                </button>
                
                </>:<p className="sub-description1 my-5">Thank you for downloading. Please support by attributing us on your projects.</p>}
                {/* <a href={`${downloadLink.link}`}  download ref="logoFile" ></a> */}
              </div>
              
         </div>
        
    </>
  );
  }
};
export default SendItForm