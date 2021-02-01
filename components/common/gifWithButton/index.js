import React from "react";
import Link from 'next/link'
import CommonMethods from '../commonMethods/index';
import {ImgLazyLoad,SignUpForm,SharePopup} from './../../common/index'
import GIFs from '../../../datas/gifs'
import {
  FacebookShareButton,

  PinterestShareButton,
  
  TwitterShareButton,
 
    FacebookIcon,
   
    PinterestIcon,
   
    TwitterIcon,
  
} from "react-share";
import ScrollAnimation from 'react-animate-on-scroll';



export class GifWithButton extends React.Component {
  
  state = {
    names:this.props.category,
    list:this.names,
    filterList:[],
    setModal:false,
    searchValue : null,
    filterSelected : false,
    checked:false,
    limit:12,
    downloadLink:"src/",
    loggedIn:false,
    popUp:false,
    popUpItem:this.props.category[0],
    downloadBtn:false,
    btnNo:null,
    searchOn:false,
    page_name:'animated-icons'
  }
  
  constructor(props) {
  super(props);
  this.searchDataFromList = this.searchDataFromList.bind(this);
  this.onKeyUp = this.onKeyUp.bind(this);
  this.checkLog=this.checkLog.bind(this)

  }

  toggleFilter = () => {
      var {filterSelected} = this.state;
      // 
      this.setState({
          filterSelected : !filterSelected
      })
  }
  handleClick = (name,index) => {
    // 
    var openList = {
      status:true,
      list:name.list
        }
     this.setState({
       downloadBtn:!this.state.downloadBtn,
       btnNo:index
      })
    // this.props.onSelectLanguage(openList);            
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
        names : CommonMethods.filterData(names, searchValue, 'buttonTxt'),
        searchOn:true
    },()=>{
          this.props.onSearch(this.state.searchOn);            
    });
    
  }
  onKeyUp(event) {
    if (event.key === "Enter") {
      this.searchDataFromList()
    }
  }
  checkLog=()=>{
    if(localStorage.getItem('user')){
      this.setState({loggedIn:true})
    }
  }
  showModal=(name)=>{
    
    this.setState({downloadLink:name,setModal:!this.state.setModal})
  }
  hideModal=(value)=>{
    this.setState({setModal:!this.state.setModal})
    this.checkLog()

  }
  hideModal1=(value)=>{
    this.setState({popUp:!this.state.popUp})
  }
  
handleTextChange = (event) => {

    this.setState({
        [event.target.name] : event.target.value
    });
    if(!event.target.value) {
        this.setState({
            names : GIFs.default,
            searchOn:false
        },()=>{
          this.props.onSearch(this.state.searchOn);            
      })
    }
  }
  shareData(){
    let {names}=this.state
    let path = window.location.pathname;
    let pathName = window.location.search;
    
    let path1 = window.location.hash;
    let page = window.location.hash.split("#").pop();
  // 
  if(pathName.includes('?')){
    this.setState({
    popUp:true,
    popUpItem:names.find((element,index) =>index == page)
    },()=>{
      
    })
  }
  else{
    this.setState({
      popUp:false
    })
  }
  }
  handleInputChange=(e,name,index)=>{
    debugger
    let {names,filterList}=this.state
    const target = event.target;
    const value = target.checked;
    let listNames=names
    let filterNames=filterList
    let list={}
    list = listNames.filter(listName=>listName.buttonTxt==name.buttonTxt)
    list[0].checked=value
    if (value==true) {
                filterNames.push(list[0])
    } 
    else{
      var index = filterNames.indexOf(name);
      if (index !== -1) {
                      filterNames.splice(index, 1);
        }
      }
        this.setState({ filterList: filterNames })
    }  
    componentDidMount()      {
      this.shareData()
      this.checkLog()
    }
    

  render() {
    let {names,filterSelected,page_name,checked,loggedIn,downloadLink,searchOn,btnNo,popUpItem,limit,filterList,downloadBtn} = this.state
    let {category}=this.props
    const subLineText = null;
    const shareUrl = 'http://community.doodleblue.com/animated-icons?';
    const title = 'Community.Doodleblue';

    return (
      <>
        <div className="container-fluid gif-Box text-center">
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
             
              {!searchOn?<ul className="d-flex justify-content-center flex-wrap">
                 {category.map((name, index)=>{
                    return <li key={index} className="col-md-2 col-sm-6 col-xs-6 mb-5 mx-0 px-0 gif-card-box" onClick={e=>this.handleClick(name,index)} key={ index }>
                              <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                     <div className="icon-card-list3 rounded-top custom-shadow">
                        <div className="card-icon-list">
                        <img  src={name.imgIcon} ></img>
                        </div>
                        <button className="mx-0 px-0 py-3  border-0 button-hidden custom-shadow rounded-bottom  bg-primary gifButton " >
                          <p className="pl-3 text-white text-left">{name.buttonTxt}</p>
                          <div className="d-flex justify-content-around">
                          {!loggedIn?<a className=""  onClick={()=>this.showModal(name)}>
                          {/* href={`${name.downloadLink}`} */}
                              <div className="download-btn">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M7 10L12 15L17 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M12 15V3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                </div>
                          </a>
                          :<a href={`${name.link}`} download>
                              <div className="download-btn">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M7 10L12 15L17 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M12 15V3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                </div>
                          </a>}
                          <a>
                              <div className="share-btn tooltip-hover">
                                
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M8.59003 13.51L15.42 17.49" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M15.41 6.51001L8.59003 10.49" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                 
                                  {/* <img className="share-list-icon" src="/share-2.svg" /> */}
                                  <span class="tooltiptext">
                                    
                                    <FacebookShareButton
                                      url={`${shareUrl}${encodeURI(name.buttonTxt)}#${index}`}
                                      quote={title}
                                      className="Demo__some-network__share-button"
                                    >
                                      <FacebookIcon size={32} round />
                                    </FacebookShareButton>
                                    <PinterestShareButton
                                      url={String(".location")}
                                      media={`${String(".location")}/${name.link}`}
                                      className="Demo__some-network__share-button"
                                    >
                                      <PinterestIcon size={32} round />
                                    </PinterestShareButton>
                                    
                                    <TwitterShareButton
                                      url={`${shareUrl}${encodeURI(name.buttonTxt)}#${index}`}
                                      title={title}
                                      className="Demo__some-network__share-button"
                                    >
                                      <TwitterIcon size={32} round />
                                    </TwitterShareButton>
                                    </span>
                                
                              </div>
                          </a>
                          </div> 
                        </button>
                        <button className="mx-0 px-0 py-3 button-initial border-0 custom-shadow rounded-bottom  bg-primary d-flex justify-content-between gifButton " >
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
                  })}
                  
            </ul>:
            <ul className="d-flex justify-content-center flex-wrap">
            {names.map((name, index)=>{
               return <li key={index} className="col-md-2 col-sm-6 mx-0 px-0 gif-card-box col-xs-6 mb-5" onClick={e=>this.handleClick(name,index)} key={ index }>
              <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                <div className="icon-card-list3 rounded-top custom-shadow">
                   <div className="card-icon-list">
                   <img  src={name.imgIcon} ></img>
                   </div>
                   <button className="mx-0 px-0 py-3 button-hidden border-0 custom-shadow rounded-bottom  bg-primary " >
                     <p className="pl-3 text-white text-left">{name.buttonTxt}</p>
                     <div className="d-flex justify-content-around">
                     {!loggedIn?<a className=""  onClick={()=>this.showModal(name)}>
                          {/* href={`${name.link}`} */}
                              <div className="download-btn">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M7 10L12 15L17 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M12 15V3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                </div>
                          </a>
                          :<a href={`${name.link}`} download>
                              <div className="download-btn">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M7 10L12 15L17 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M12 15V3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                </div>
                          </a>}
                     <a>
                         <div className="share-btn tooltip-hover">
                           
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                             <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                             <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                             <path d="M8.59003 13.51L15.42 17.49" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                             <path d="M15.41 6.51001L8.59003 10.49" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                             </svg>
                            
                             {/* <img className="share-list-icon" src="/share-2.svg" /> */}
                             <span class="tooltiptext">
                               
                               <FacebookShareButton
                                 url={`${shareUrl}${encodeURI(name.buttonTxt)}#${index}`}
                                 quote={title}
                                 className="Demo__some-network__share-button"
                               >
                                 <FacebookIcon size={32} round />
                               </FacebookShareButton>
                               <PinterestShareButton
                                 url={String(".location")}
                                 media={`${String(".location")}/${name.link}`}
                                 className="Demo__some-network__share-button"
                               >
                                 <PinterestIcon size={32} round />
                               </PinterestShareButton>
                               
                               <TwitterShareButton
                                 url={`${shareUrl}${encodeURI(name.buttonTxt)}#${index}`}
                                 title={title}
                                 className="Demo__some-network__share-button"
                               >
                                 <TwitterIcon size={32} round />
                               </TwitterShareButton>
                               </span>
                           
                         </div>
                     </a>
                     </div> 
                   </button>
                   <button className="mx-0 px-0 py-3  border-0 custom-shadow button-initial rounded-bottom  bg-primary d-flex justify-content-between gifButton " >
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
             })}
             
       </ul>
          }
            {names.length==0&&  <h5 className="text-center sub-content py-4">
              No data found
            </h5>}
            
            </div>
        </div>
        <SignUpForm showModal={this.state.setModal} downloadLink={downloadLink} onChange={this.hideModal}/>
        <SharePopup showModal={this.state.popUp} item={popUpItem} pageName={page_name} pageTitle={'Gifs'} onLogged={this.showModal} onChange={this.hideModal1} />
      </>
    )
  }
};
export default GifWithButton