import React from "react";
import Link from 'next/link'
import {ImgLazyLoad} from './../../common/index'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import { CircularFormIcons } from "../circularFormIcons";
import { CircularStepperOne } from "../circularStepperOne";
import { StepperCircle } from "../stepperCircle";
import axios from 'axios';






export class CircularForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category_list : {
                "logo_design" : "Logo design",
                "app_design" : "App design",
                "web_design" : "Web design",
                "coding" : "Coding",
                "others" : "Others"
            },
            percentage:10
        }
    }
    formSubmit=(data)=>{
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
    }
    handleLanguage = (langValue) => {
      let percentage=null 
      if(langValue==1){
       this.percentage=20
      }else if(langValue==2)
      {
        this.percentage=40
      }else if(langValue==3){
        this.percentage=60
      }else if(langValue==4){
        this.percentage=80
      }
      else if(langValue==5){
        this.percentage=100
      }
      else{
        this.percentage=0
      }
      this.setState(
        {percentage:this.percentage}
      )
    }
    componentDidMount(){
    }
  
  

  render() {
    let {category_list,percentage} = this.state;
    let {title,text1,text2,text3,text4,text5} = this.props
    return (
      <>
          <div className="text-center pb-5">
              <div className="content-within-circle">
                <StepperCircle onSelectLanguage={this.handleLanguage} onSubmit={this.formSubmit}/>                  
              </div>
                <CircularProgressbar className="circular-bar" width="821px" value={percentage} strokeWidth='2' styles={buildStyles({
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'butt'})} />
            </div>
        </>
    )
  }
};
