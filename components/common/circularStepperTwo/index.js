import React from "react";
import Link from 'next/link'

import SimpleReactValidator from 'simple-react-validator';





export class CircularStepperTwo extends React.Component {
  step1={}
    constructor(props) {
        super(props);
        this.state = {
          
            formData: this.props.data,
            type1:{
              placeholder1:"Company Name",
              placeholder2:"Industry Name"
            },
            type2:{
              placeholder1:"Company Name",
              placeholder2:"Industry Name"
            },
            

        }
        this.validator = new SimpleReactValidator();

    }
   
    componentDidMount(){
    }
   handleChange=(event)=> {
      let { formData } = this.state;
        const target = event.target;
       
        const name = target.name;
        const value = target.value;
        
        this.step1[name] = target.value;
        this.setState({ formData: this.step1},()=>{
          
        });
       
      // 
    }
    handleChange1=(event)=> {
      
      this.setState({
        step1:{[event.target.name]: event.target.value}
      });
    }
    handleClick=()=> {
      if (this.validator.allValid()) {
         
      let step={
        step:3,
        formData:this.state.formData,
        back:false
      }
      
      
        
      this.props.onSelectLanguage(step);                   
          
          } else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            // you can use the autoForceUpdate option to do this automatically`
            this.forceUpdate();
          }
          
    }
    handleClickBack=()=>{
      
      let step={
        step:1,
        back:true
      }
      this.props.onSelectLanguageBack(step); 
    }
  

  render() {
    // let { } = this.state
    let {category_list,type1,formData} = this.state;
    let {serviceName} = this.props
    const percentage = 15;
    return (
      <>  
                  <h5 className="within-circle-title-Stepper">{serviceName}</h5>
                   <div className="d-flex align-items-start justify-content-center bar-1">
                    <p className="within-circle-sub-title-stepper">Let us know your challenge</p>
                  </div>
                  <div className="text-center ">
                    <div>
                      <input className=" bg-transparent border-bottom form-stepper-choices"
                      value={formData.companyName}
                      name="companyName"
                      placeholder={type1.placeholder1}
                      onChange={ this.handleChange } 
                      />
                      {this.validator.message('companyName', formData.companyName, 'required',{ className: 'text-danger error-msg' })}

                    </div>
                    <div>
                    <input className=" bg-transparent border-bottom form-stepper-choices"
                    placeholder={type1.placeholder2}
                    name="industryName"
                    value={formData.industryName}
                    onChange={ this.handleChange } 
                    />
                    {this.validator.message('industryName', formData.industryName, 'required',{ className: 'text-danger error-msg' })}
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                  <div onClick={this.handleClickBack} className="d-flex justify-content-center">
                    <img className="right-arrow-btn back mx-2" src="/arrow-right (1).svg" onClick={this.handleClickBack} />
                    {/* <img className="right-arrow-btn" src="/arrow-right.svg" onClick={this.handleClickBack} /> */}
                  </div> 
                  <div onClick={this.handleClick} className="d-flex justify-content-center">
                    <img className="right-arrow-btn  mx-2" src="/arrow-right.svg" onClick={this.handleClick} />
                  </div> 
                 </div>
      </>
    )
  }
};
export default CircularStepperTwo