import React from "react";
import Link from 'next/link'
import {ImgLazyLoad} from './../../common/index'
import home_list from '../../../datas/community-home'
import ScrollAnimation from 'react-animate-on-scroll';

export class CommunityDownload extends React.Component {
  
  state = {
    names:home_list.default,
    list:this.names,
    filterList:[],
    searchValue : null,
    filterSelected : false,
    checked:false
  }
  
  constructor(props) {
  super(props);
   
  }

  
  handleClick = () => {
    var openList = {
      status:true
        }
    this.props.onSelectLanguage(openList);            
  }
  handleCheck=()=>{
    this.setState({
      checked: !this.state.checked
    })
  }      
    

  render() {
    let {names,filterSelected,checked,filterList} = this.state
    const subLineText = null;

    return (
      <>
        <div className="container">
          <ul className="d-flex flex-wrap">
                 {names.map((name, index)=>{
                    return <Link href={name.downloadLink}>
                       <li className="col-md-3 col-sm-4 col-xs-5 community-cardbox mb-5" key={ index }>
                       <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                        <div className="icon-card-list1  rounded-top custom-shadow" style ={ { backgroundImage: "url("+name.imgIcon+")" } } >
                            <div className="card-icon-list">
                            {/* <img  src={name.imgIcon} ></img> */}
                            </div>
                            
                            <button className="mx-0 px-0 py-3 community-card-btn  border-0 custom-shadow rounded-bottom  bg-primary d-flex justify-content-between" >
                                <span className="pl-3 text-white">{name.buttonTxt}</span>
                                <a className="px-2">
                                <svg width="55" height="16" viewBox="0 0 55 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="8.16455" x2="47.4178" id="#arrowLine1" y2="8.16455" stroke="#fff"/>
                                <rect x="47.4307" y="1.37166" id="#arrowLine2" width="9.6066" height="9.6066" transform="rotate(45 47.4307 1.37166)" stroke="#fff"/>
                                </svg>
                                </a>
                            </button>
                            
                          </div>
                          </ScrollAnimation>
                        </li>
                    </Link>
                  })}
                  
              </ul>
            
            </div>
      </>
    )
  }
};
export default CommunityDownload