import React from "react";






export class CircularStepperFour extends React.Component {
  step1={}
    constructor(props) {
        super(props);
        this.state = {
          formData: { // set up default form values
            styleGuide:null,
            requimentDoc:null
            },
            type1:{
              placeholder1:"Company Name",
              placeholder2:"Industry Name"
            },
            type2:{
              placeholder1:"Company Name",
              placeholder2:"Industry Name"
            },
            

        }
        

    }
   
    componentDidMount(){
    }
    handleChange=(fileInput, type)=> {
      
      let { formData } = this.state;
        let { target } = fileInput;
        // const target = event.target;

        const name = target.name;
        const value = target.files[0];
        
        this.step1[name] = target.files[0];
        this.setState({ formData: this.step1}
        );
       
      
    }
   
    handleChange1=(event)=> {

      this.setState({
        step1:{[event.target.name]: event.target.value}
      });
    }
    handleClick=()=> {
        let step={
          step:5,
          formData:this.state.formData,
          back:false
        }
        this.props.onSelectLanguage(step);       
            
          

           
    }
    handleClickBack=()=>{

      let step={
        step:3,
        back:true
      }
      this.props.onSelectLanguageBack(step); 
    }
  

  render() {
    // let { } = this.state
    let {category_list,type1,step1,formData} = this.state;
    let {serviceName} = this.props
    const percentage = 15;
    return (
      <>  
                  <h5 className="within-circle-title-Stepper-four mb-0">{serviceName}</h5>
                   <div className="d-flex align-items-start justify-content-center bar-1">
                    <p className="within-circle-sub-title-stepper mb-0">Let us know your challenge</p>
                  </div>
                  <div className="text-center ">
                    <div>
                      <p className=" bg-transparent form-stepper-choices1">Style Guidelines</p>
                    </div>
                    {formData.styleGuide&&<p>{formData.styleGuide.name}</p>}
                    <button className="btn btn-transparent btn-upload" onClick={() => this.refs.logoFile.click()}>Upload
                    </button>
                    {/* {this.validator.message('Style Guidline', formData.styleGuide, 'required',{ className: 'text-danger error-msg' })} */}


                    <input type="file" className="d-none" accept="image/*" onChange={(e) => this.handleChange(e, 'logo')} ref="logoFile" name="styleGuide" />
                    
                    <div>
                      <p className=" bg-transparent form-stepper-choices1">Requirement Documents</p>
                    </div>
                    {formData.requimentDoc&&<p>{formData.requimentDoc.name}</p>}
                    <button className="btn btn-transparent btn-upload" onClick={() => this.refs.logoFile1.click()}>Upload</button>
                    {/* {this.validator.message('Requirement Document', formData.requimentDoc, 'required',{ className: 'text-danger error-msg' })} */}
                    <input type="file" className="d-none" accept="image/*" onChange={(e) => this.handleChange(e, 'logo')} ref="logoFile1" name="requimentDoc" />
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <div onClick={this.handleClickBack} className="d-flex justify-content-center">
                      <img className="right-arrow-btn-step4 back mx-2" src="/arrow-right (1).svg" onClick={this.handleClickBack} />
                      {/* <img className="right-arrow-btn" src="/arrow-right.svg" onClick={this.handleClickBack} /> */}
                    </div> 
                    <div onClick={this.handleClick} className="d-flex justify-content-center">
                      <img className="right-arrow-btn-step4  mx-2" src="/arrow-right.svg" onClick={this.handleClick} />
                    </div>  
                  </div>  
      </>
    )
  }
};
export default CircularStepperFour