import React from "react";
import Link from 'next/link'
import CommonMethods from '../commonMethods/index';
import {ImgLazyLoad} from './../../common/index'
import ScrollAnimation from 'react-animate-on-scroll';
import Icons from '../../../datas/icons';
import dynamic from 'next/dynamic'
const Arrows = dynamic(() => import('../arrows'))

export class IconWithButton extends React.Component {
  
  state = {
    names:Icons.default,
    list:this.names,
    filterList:[],
    searchValue : null,
    filterSelected : false,
    checked:false
  }
  
  constructor(props) {
  super(props);
  this.searchDataFromList = this.searchDataFromList.bind(this);
  this.onKeyUp = this.onKeyUp.bind(this);


  }

  toggleFilter = () => {
      var {filterSelected} = this.state;
      
      this.setState({
          filterSelected : !filterSelected
      })
  }
  handleClick = (name) => {
    
    var openList = {
      status:true,
      list:name.list
        }
    this.props.onSelectLanguage(openList);            
  }
  handleCheck=()=>{
    this.setState({
      checked: !this.state.checked
    })
  }
  searchDataFromList = () => {
    const {searchValue,names} = this.state;
    // const {listData}  = this.props;
    
    
    this.setState({
        names : CommonMethods.filterData(names, searchValue, 'buttonTxt')
    });
}
onKeyUp(event) {
  if (event.key === "Enter") {
    this.searchDataFromList()
  }
}

handleTextChange = (event) => {
  
    this.setState({
        [event.target.name] : event.target.value
    });
    if(!event.target.value) {
        this.setState({
            names : Icons.default
        });
    }
}
       
    

  render() {
    let {names,filterSelected,checked,filterList} = this.state
    const subLineText = null;

    // let {icon,title,link} = this.props

    return (
      <>
        <div className="container">
        {(subLineText) ?
                        <p className="w-65 font-weight-normal mt-5">
                            {subLineText}
                        </p>
                        :
                        <div className="search-filter">
                            <div className="input-group col-md-6 col-sm-12 offset-md-3">
                                
                                <input type="text" name="searchValue" className="form-control" onKeyUp={this.onKeyUp} onChange={this.handleTextChange}/>
                                <div className="input-group-append">
                                    <button type="button" className="search-btn" onClick={this.searchDataFromList}></button>
                                   
                                </div>
                            </div>
                        </div>                    
                    }
            <div>
              
              <ul className="d-flex flex-wrap">
                 {names.map((name, index)=>{
                    return <li className="col-md-3 col-sm-4 col-xs-5 mb-5" onClick={e=>this.handleClick(name)} key={ index }>
                              <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <div className="icon-card-list2 rounded-top custom-shadow">
                                    <div className="card-icon-list">
                                    <img  src={name.imgIcon} ></img>
                                    </div>
                                  </div>
                                  <button className="mx-0 px-0 py-3 w-100 border-0 custom-shadow rounded-bottom  bg-primary d-flex justify-content-between" >
                                        <span className="pl-3 text-white">{name.buttonTxt}</span>
                                        {/* <a className="px-2">
                                        <svg width="55" height="16" viewBox="0 0 55 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line y1="8.16455" x2="47.4178" id="#arrowLine1" y2="8.16455" stroke="#fff"/>
                                        <rect x="47.4307" y="1.37166" id="#arrowLine2" width="9.6066" height="9.6066" transform="rotate(45 47.4307 1.37166)" stroke="#fff"/>
                                        </svg>
                                        </a> */}
                                        <Arrows className={"text-white"} navigateID="right" color="white"></Arrows>
                                    </button>
                              </ScrollAnimation>
                            </li>
                  })}
                  
            </ul>
            {names.length==0?
            <h5 className="text-center sub-content py-4">
              No data found
            </h5>:''
            }
            
            </div>
        </div>
      </>
    )
  }
};
export default IconWithButton