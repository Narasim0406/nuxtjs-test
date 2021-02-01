import React from "react";
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons';
import ScrollAnimation from 'react-animate-on-scroll';

import {
  
  FacebookShareButton,
  
  PinterestShareButton,
  
  TwitterShareButton,
  
  FacebookIcon,
  
  PinterestIcon,
  
  TwitterIcon,
} from "react-share";
import dynamic from 'next/dynamic'
  const SignUpForm = dynamic(() => import('../signUpForm'))
  const SharePopup = dynamic(() => import('../sharePopUp'))
  const EditIconPopup = dynamic(() => import('../editIconPopup'))
export class IconList extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    // names:Icons.notification,
    setModal:false,
    searchValue : null,
    loggedIn:false,
    listData : this.props.listData,
    filterSelected : false,
    popUp:false,
    downloadLink:"src/",
    popUpItem:this.props.list[0],
    popUpItemIndex:1,
    page_name:'free-icons'
    
  }
  this.checkLog=this.checkLog.bind(this)
  this.localpath = "doodleblue_community/public";
}
toggleFilter = () => {
    var {filterSelected} = this.state;
    // 
    this.setState({
        filterSelected : !filterSelected
    })
}

selectedFilter = (value) => {

}
shareData(){
  let {names}=this.state
  var path = window.location.pathname;
  let pathName = window.location.search;
  var path1 = window.location.hash;
  
  var page = window.location.hash.split("#").pop();
  
  if(pathName.includes('?')){
    this.setState({
    popUp:true,
    popUpItem:this.props.list.find((element,index) =>index == page),
    popUpItemIndex:page
    },()=>{
      
    })
  }
  else{
    this.setState({popUp:false})
  }
}
checkLog=()=>{
if(localStorage.getItem('user')){
  this.setState({loggedIn:true})
}

}

searchDataFromList = () => {
    const {searchValue} = this.state;
    const {listData}  = this.props;
    this.setState({
        listData : CommonMethods.filterData(listData, searchValue, 'title')
    });
}
toggleFilter(){
  this.setState({
    filterSelected:!this.filterSelected
  });
}
handleInputChange = (event) => {
    this.setState({
        [event.target.name] : event.target.value
    });
    if(!event.target.value) {
        this.setState({
            listData : this.props.listData
        });
    }
}

  showModal=(name,index)=>{
    let downloadLink={
      id:index,
      link:name
    }
    console.log(downloadLink,"DL")
  this.setState({downloadLink:downloadLink,setModal:!this.state.setModal})
  }
  hideModal=(value)=>{
    this.checkLog()
    this.setState({setModal:!this.state.setModal})
  }
  hideModal1=(value)=>{
    this.setState({popUp:!this.state.popUp})
  }
  // handleClick = () => {
  //   var openList = {
  //     status:true
  //       }
  //   this.props.onSelectLanguage(openList);            
  // }
  
  componentDidMount()      {
    this.shareData()
    this.checkLog()
  }
  

  render() {
    let {names,filterSelected,downloadLink,page_name,loggedIn,setModal,popUp,popUpItem,popUpItemIndex} = this.state
    let {list,listName} = this.props;
    const shareUrl = 'http://community.doodleblue.com/free-icons?';
    const title = 'Community.Doodleblue';
    const subLineText = null;
    // console.log(list,"LIST NAME")
    // let {icon,title,link} = this.props

    return (
      <>
            {(subLineText) ?
                        <p className="w-65 font-weight-normal mt-5">
                            {subLineText}
                        </p>
                        :
                        <div className="search-filter">
                            <div className="input-group col-md-6 col-sm-12 offset-md-3">
                                <input type="text" name="searchValue" className="form-control" onChange={this.handleInputChange}/>
                                <div className="input-group-append">
                                    <button type="button" className="search-btn" onClick={this.searchDataFromList}></button>
                                    <button type="button" className="filter-btn" onClick={this.toggleFilter}></button>
                                    {filterSelected&&<div className="group-append">
                                         <ul className="list-group list-group-flush" >
                                            {
                                            names && names.length>0 ? names.map((name,index) => (
                                              <li>
                                                
                                                <div className="input-group">
                                                  <div className="input-group-append">
                                                    <input type="checkbox" className="custom-control-input" key={index} /> 
                                                    <label className="custom-control-label" >{name}</label>
                                                  </div>
                                                </div>  
                                              </li>
                                            )):""
                                            }
                                        </ul>  
                                    </div>}
                                </div>
                            </div>
                        </div>                    
                    }

            <div className="mx-5 ">
              <p><span className="list-count">{list.length} icons of </span><span className="list-title">{listName. toUpperCase()}</span></p>
            <ul className="d-flex flex-wrap">
                {list.map((name, index)=>{
                    return <li className="col-md-2 col-sm-3  icon-list-box px-0 my-2" onClick={this.handleClick} key={ index }>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                          <div className="icon-card-list">
                            <div className="card-icon-list">
                              <img className="img-icon" src={name.link} />
                              <div className="icon-actions"  >
                              {!loggedIn?<img className="download-list-icon" src="/download.svg" onClick={()=>this.showModal(name,index)} />:<a href={`${name.link}`}  download><img className="download-list-icon" src="/download.svg" /></a>}
                                <div class="tooltip">
                                  <img className="share-list-icon" src="/share-2.svg" />
                                  <span class="tooltiptext">
                                  
                                  <FacebookShareButton
                                    url={`${shareUrl}${listName}#${index}`}
                                    quote={title}
                                    className="Demo__some-network__share-button"
                                  >
                                    <FacebookIcon size={32} round />
                                  </FacebookShareButton>
                                  <PinterestShareButton
                                    url={`${shareUrl}${listName}#${index}`}
                                    media={`${String(window.location)}/${name.link}`}
                                    className="Demo__some-network__share-button"
                                  >
                                    <PinterestIcon size={32} round />
                                  </PinterestShareButton>
                                  
                                  <TwitterShareButton
                                    url={`${shareUrl}${listName}#${index}`}
                                    title={title}
                                    className="Demo__some-network__share-button"
                                  >
                                    <TwitterIcon size={32} round />
                                  </TwitterShareButton>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                     </ScrollAnimation>
                    </li>
                  })}
            </ul>
            </div>
            {/* <SignUpForm showModal={this.state.setModal} downloadLink={downloadLink} onChange={this.hideModal}/> */}
            <SharePopup showModal={this.state.popUp} item={popUpItem} pageName={page_name} onLogged={this.showModal} itemIndex={popUpItemIndex} pageTitle={'icons'} onChange={this.hideModal1} />
            <EditIconPopup showModal={this.state.setModal} list={list} selectedIcon={downloadLink} onChange={this.hideModal}/>
      </>
    )
  }
};
export default IconList