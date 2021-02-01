import React from "react";
import {ImgLazyLoad} from '../index'



export class CircularFormIcons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category_list : {
                "logo_design" : "Logo design",
                "app_design" : "App design",
                "web_design" : "Web design",
                "coding" : "Coding",
                "others" : "Others"
            }
        }
    }

    handleClick=(name)=> {
      let step={
        step:1,
        formData:{service:name}
      }
    this.props.onSelectLanguage(step);            
    }
    componentDidMount(){
    }
  
  

  render() {
    // let { } = this.state
    const {category_list} = this.state;
    let {title,text1,text2,text3,text4,text5} = this.props
    const percentage = 15;
    return (
      <>  
                  <h5 className="within-circle-title">Let's begin</h5>  
                   <div className="d-flex align-items-start justify-content-center bar-1">
                   <div  onClick={() =>this.handleClick('Digital transformation')}>
                    <div className="float-img-circles">
                      <ImgLazyLoad src="/Group 1550.svg"/>
                    </div> 
                    <p className="float-img-title">Digital transformation</p>
                   </div>
                   <p className="within-circle-sub-title">Choose a specific category</p>
                   <div onClick={() =>this.handleClick('Web development')}>
                    <div className="float-img-circles">
                      <ImgLazyLoad src="/coding 1.svg"/>
                    </div> 
                    <p className="float-img-title">Web development</p>
                   </div>
                   </div>
                   <div className="d-flex align-items-start justify-content-center bar-2">
                   <div onClick={() =>this.handleClick('Mobile engineering')}>
                    <div className="float-img-circles">
                      <ImgLazyLoad src="/chat.png"/>
                    </div> 
                    <p className="float-img-title">Mobile engineering</p>
                   </div>
                   <div onClick={() =>this.handleClick('UI/UX Design')}>
                    <div className="float-img-circles middle-circle">
                      <ImgLazyLoad src="/computer.svg"/>
                    </div> 
                    <p className="float-img-title middle-title">UI/UX Design</p>
                   </div>
                   <div onClick={() =>this.handleClick('Enterprise application')}>
                    <div className="float-img-circles">
                      <ImgLazyLoad src="/wholesale 1.svg"/>
                    </div> 
                    <p className="float-img-title">Enterprise application</p>
                   </div>
                   </div>
                   <div className="d-flex align-items-start justify-content-center bar-3">
                   <div onClick={() =>this.handleClick('Innovation')}>
                    <div className="float-img-circles">
                      <ImgLazyLoad src="/idea 1.svg"/>
                    </div> 
                    <p className="float-img-title">Innovation</p>
                   </div>
                   </div>        
      </>
    )
  }
};
export default CircularFormIcons