import React from "react";
import Link from 'next/link'
import {ImgLazyLoad} from '../index'
// import { CircularStepperOne } from "../circularStepperOne";
// import { CircularStepperTwo } from "../circularStepperTwo";
// import { CircularStepperThree } from "../circularStepperThree";
// import { CircularStepperFour } from "../circularStepperFour";
// import { CircularStepperFive } from "../circularStepperFive";
// import { CircularFormIcons } from "../circularFormIcons";
import dynamic from 'next/dynamic'

const CircularStepperOne = dynamic(() => import('../circularStepperOne'))
const CircularStepperTwo = dynamic(() => import('../circularStepperTwo'))
const CircularStepperThree = dynamic(() => import('../circularStepperThree'))
const CircularStepperFour = dynamic(() => import('../circularStepperFour'))
const CircularStepperFive = dynamic(() => import('../circularStepperFive'))
const CircularFormIcons = dynamic(() => import('../circularFormIcons'))

export class StepperCircle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep:0,
            serviceName:'',
            data:{
              
            },
            step0:{
              service:null
            },
            step1:{
              name:null,
              email:null
            },
            step2:{
              
              companyName:null,
              industryType:null
            },
            step3:{
              
              location:null,
              desDetails:null
            },
            step4:{
              
              styleGuide:null,
              requimentDoc:null
            }
        }
    }
    handleBackLanguage = (step) => {
      let{step0,step1,step2,step3,step4}=this.state
      this.props.onSelectLanguage(step.step);  
      if(step.step==0&&!!step.back){

        this.setState(
          {
            step0:null,
            step1:{},
            step2:{},
            step3:{},
            stpe4:{},
            data:{},
           serviceName:null,

          }
        ,()=>{})
      }
      else if(step.step==1&&!!step.back){
        
        this.setState(
          {
            data:step1
          }
        ,()=>{})
      }
      else if(step.step==2&&!!step.back){
        this.setState(
          {
            data:step2
          }
        ,()=>{})
      }
      else if(step.step==3&&!!step.back){
      this.setState(
        {
          data:step3
        }
        ,()=>{})
      }
      else if(step.step==4&&!!step.back){
        this.setState(
          {
            data:step4
          }
          ,()=>{})
        }
      
      this.setState(
        {currentStep:step.step}
      )            
    }
    handleLanguage = (step) => {
      
      this.props.onSelectLanguage(step.step);  
      if(step.step==1&&!step.back){
        
        this.setState(
          {step0:step.formData,
           serviceName:step.formData.service 
          }
        ,()=>{})
      }
      if(step.step==2&&!step.back){
        this.setState(
          {step1:step.formData}
        ,()=>{})
      }
      else if(step.step==3&&!step.back){
      this.setState(
        {step2:step.formData}
        ,()=>{})
      }
      else if(step.step==4&&!step.back){
        this.setState(
          {step3:step.formData}
          ,()=>{})
        }
      else if(step.step==5&&!step.back){
        this.setState(
          {step4:step.formData}
          ,()=>{})
        }
      else if(step.step==0&&!step.back){
        let{step0,step1,step2,step3,step4}=this.state
        if(step3.location!==null){
        let obj=Object.assign(step0,step1,step2,step3,step4)
        this.props.onSubmit(obj); 
        } 
      }    
      this.setState(
        {currentStep:step.step}
      )            
    }
    componentDidMount(){
    }
  
  

  render() {
    let { currentStep,percentage,serviceName,data} = this.state
    let {title,text1,text2,text3,text4,text5} = this.props
    
    return (
      <>  
                 {currentStep==0?<CircularFormIcons  onSelectLanguage={this.handleLanguage} onSelectLanguageBack={this.handleBackLanguage} />:''}
                 {currentStep==1?<CircularStepperOne data={data} serviceName={serviceName}  onSelectLanguage={this.handleLanguage} onSelectLanguageBack={this.handleBackLanguage}/> :''}  
                 {currentStep==2?<CircularStepperTwo data={data} serviceName={serviceName} onSelectLanguage={this.handleLanguage} onSelectLanguageBack={this.handleBackLanguage}/> :''}  
                 {currentStep==3?<CircularStepperThree data={data} serviceName={serviceName} onSelectLanguage={this.handleLanguage} onSelectLanguageBack={this.handleBackLanguage}/> :''}  
                 {currentStep==4?<CircularStepperFour data={data} serviceName={serviceName} onSelectLanguage={this.handleLanguage} onSelectLanguageBack={this.handleBackLanguage}/> :''}  
                 {currentStep==5?<CircularStepperFive   onSelectLanguage={this.handleLanguage} onSelectLanguageBack={this.handleBackLanguage}/> :''} 
      </>
    )
  }
};
