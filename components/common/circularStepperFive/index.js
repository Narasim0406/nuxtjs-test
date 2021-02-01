import React from "react";
import Link from 'next/link'
import {ImgLazyLoad} from '../index'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';

export class CircularStepperFive extends React.Component {
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
            type1:{
              placeholder1:"Company Name",
              placeholder2:"Industry Name"
            },
            type2:{
              placeholder1:"Company Name",
              placeholder2:"Industry Name"
            },
            step1:{
              companyName:"",
              industryName:""
            }

        }

    }
   
    componentDidMount(){
    }
    handleChange=(event)=> {
      this.setState({
        step1:{[event.target.name]: event.target.value}
      });
    }
    handleChange1=(event)=> {
      this.setState({
        step1:{[event.target.name]: event.target.value}
      });
    }
    handleClick=()=> {
      let step={
        step:0
      }
      this.props.onSelectLanguage(step);            
    }
  

  render() {
    let {category_list,type1,step1} = this.state;
    let {} = this.props
    const percentage = 15;
    return (
      <>  
                  <div>
                    <img className="thanks-Gif" src="/thanks.gif"/>
                  </div>
                  <h5 className="within-circle-title-Step5">Great!</h5>
                   <div className="d-flex align-items-start justify-content-center bar-1">
                    <p className="within-circle-sub-title-stepper ">Let us come back and surpise you!</p>
                  </div>
                  <button onClick={this.handleClick} className="btn btn-upload btn-transparent">Keep Challenging</button>
      </>
    )
  }
};
export default CircularStepperFive