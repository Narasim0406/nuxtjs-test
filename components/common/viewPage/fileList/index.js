
import React from "react";
import CommonMethods from '../../commonMethods/index';
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
  const SignUpForm = dynamic(() => import('../../signUpForm'))
  const TextContent = dynamic(() => import('../../textContent'))
  

class FileList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchState:false,
            searchValue : null,
            listData : this.props.listData,
            filterSelected : false,
            comingSoon:false,
            loggedIn:false,
            downloadLink:"src/",
            downloadBtn:false,
           
        }
        
        this.localpath = "doodleblue_community/public";
        this.searchDataFromList = this.searchDataFromList.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
    }
    toggleFilter = () => {
        var {filterSelected} = this.state;
        this.setState({
            filterSelected : !filterSelected
        })
    }
    onKeyUp(event) {
        if (event.key === "Enter") {
          this.searchDataFromList()
        }
      }
    selectedFilter = (value) => {

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

    redirectPage(page) {
        if(this.props.pageName === 'product-documents' || this.props.pageName.includes('free-design-resources'))
          { 

              window.location.href = "/"+page;
            }
        // if(this.props.pageName === 'code-snippets-download') {
            
        // }
        // else if(page.indexOf('product-documents')&&page.indexOf('free-design-resources')&&page.indexOf('code-snippets-download')&&-1){
        //     var openList = {
        //         // status:true,
        //         name:page
        //         }
        //     this.props.onSelectLanguage(openList); 
        //     {
        //         this.setState({comingSoon:true},(console.log(this.state.comingSoon,"ComingSoon")))
        //     }   
        // }
            // window.location.href = "/codesnippet";
        if(this.props.pageName!=='product-documents'&&this.props.pageName !== 'free-design-resources'&&this.props.pageName !== 'code-snippets-download')
        {
            var openList = {
                // status:true,
                name:page
                }
            this.props.onSelectLanguage(openList); 
            {
                this.setState({comingSoon:true})
            }   
        }    
    }

    searchDataFromList = () => {
        const {searchValue} = this.state;
        const {listData}  = this.props;
        debugger
        this.setState({
            listData : CommonMethods.filterData(listData, searchValue, 'title'),
            searchState:true
        },()=>{
            if(window.location.pathname=='/code-snippets-download/'){
                this.props.onSearch(this.state.searchState);     }
        });
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
        if(!event.target.value) {
            this.setState({
                listData : this.props.listData,
                searchState:false 
                       },()=>{
                           if(window.location.pathname=='/code-snippets-download/'){
                        this.props.onSearch(this.state.searchState);     }
                    });
        }
    }
    downloadImage = (value) => {
        window.open(this.localpath + value, 'Download')    
    }

    componentDidMount()      {
        // this.shareData()
        this.checkLog()
      }

    render() {
        const {pageName, titleText,paginatedList, pageDescription, subLineText,hideArrow} = this.props;
        const {listData,comingSoon,loggedIn,downloadLink,downloadBtn,searchState} = this.state;
        const shareUrl = 'http://community.doodleblue.com/gifs?';
        const title = 'Community.Doodleblue';
                      
        return (
            <> 
                <div className="document-content">
                    {/* <h2 className="text-uppercase"><b>{titleText}</b></h2>
                    <p className="w-65">
                        {pageDescription}
                    </p> */}
                    {(subLineText) ?
                        <p className="w-65 font-weight-normal mt-5">
                        {!comingSoon?<>    {subLineText}</>:''}
                        </p>
                        :
                        <div className="search-filter">
                            <div className="input-group col-md-8 col-sm-12 offset-md-2">
                                <input type="text" name="searchValue" className="form-control" onKeyUp={this.onKeyUp} onChange={this.handleInputChange}/>
                                <div className="input-group-append">
                                    <button type="button" className="search-btn" onClick={this.searchDataFromList}></button>
                                    {/* <button type="button" className="filter-btn" onClick={this.toggleFilter}></button>
                                    <div className="group-append">
                                        <FilterDropDown 
                                            filterSelected={this.state.filterSelected}
                                        />
                                    </div> */}
                                </div>
                            </div>
                        </div>                    
                    }
                </div>
                {paginatedList!==undefined&&searchState==false?<div className={`documents-card mb-4 ${paginatedList!==undefined&&paginatedList>12?'paginated-content':''}`}>
                    <div className="row">
                        {Object.keys(paginatedList).map((index, key) => {
                            return (
                                <div className={`${(pageName === 'product-documents') ? "col-md-4" : "col-md-3 no-document-page"}  col-custom-sm`}  key={key}>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                    <div className={`${(pageName === 'product-documents') ? "card1" : "card"} `}
                                    //   onClick={() => {this.redirectPage(index)}}
                                      >
                                        <img className="card-img-top" src={paginatedList[index].image} alt="Card image cap"/>
                                        <div className="card-body text-left">
                                            <div className={`arrow-bg ${hideArrow?'arrow-hide':''}`}>{paginatedList[index].title}</div>
                                            <div className="row d-flex justify-content-around file-btn ">
                                           <>
                                            {loggedIn? <a className="" href={`${paginatedList[index].link}`} download>
                                                        <div className="download-btn">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                            <path d="M7 10L12 15L17 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                            <path d="M12 15V3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                            </svg>
                                                        </div>
                                                        </a>
                                                        :
                                                        <a className=""  onClick={()=>this.showModal(paginatedList[index])}>
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
                                                            url={`${shareUrl}${encodeURI(paginatedList[index].title)}#${index}`}
                                                            quote={title}
                                                            className="Demo__some-network__share-button"
                                                        >
                                                            <FacebookIcon size={32} round />
                                                        </FacebookShareButton>
                                                        <PinterestShareButton
                                                            url={String(".location")}
                                                            media={`${String(".location")}/${shareUrl}`}
                                                            className="Demo__some-network__share-button"
                                                        >
                                                            <PinterestIcon size={32} round />
                                                        </PinterestShareButton>
                                                        
                                                        <TwitterShareButton
                                                            url={`${shareUrl}${encodeURI(paginatedList[index].title)}#${index}`}
                                                            title={title}
                                                            className="Demo__some-network__share-button"
                                                        >
                                                            <TwitterIcon size={32} round />
                                                        </TwitterShareButton>
                                                        </span>
                                                    
                                                    </div>
                                                </a>
                                                </>
                                            </div>
                                        </div>
                                    </div> 
                                    </ScrollAnimation>                           
                                </div>
                            )
                        })}
                    </div>
                    
                </div>:
                <div className={`documents-card mb-4 ${paginatedList!==undefined&&listData.length>12?'paginated-content':''}`}>
                    {!comingSoon?<div className="row">
                        {Object.keys(listData).map((index, key) => {
                            return (
                                <div className={`${(pageName === 'document') ? "col-md-4" : "col-md-3 no-document-page"} col-custom-sm`}  key={key}>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                    <div className={`${(pageName === 'document') ? "card1" : "card"} `}
                                      onClick={() => {this.redirectPage(index)}}
                                      >
                                        <img className="card-img-top" src={listData[index].image} alt="Card image cap"/>
                                        <div className="card-body text-left">
                                            <div className={`arrow-bg ${hideArrow?'arrow-hide':''}`}>{listData[index].title}</div>

                {paginatedList!==undefined?<div className="row d-flex justify-content-around file-btn ">
                                            {loggedIn?<a className="" href={`${listData[index].link}`} download>
                                                    <div className="download-btn">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M7 10L12 15L17 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M12 15V3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </svg>
                                                    </div>
                                                </a>:
                                                <a className="" onClick={()=>this.showModal(paginatedList[index])}>
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
                                                                url={`${shareUrl}${encodeURI(shareUrl)}#${index}`}
                                                                quote={title}
                                                                className="Demo__some-network__share-button"
                                                            >
                                                                <FacebookIcon size={32} round />
                                                            </FacebookShareButton>
                                                            <PinterestShareButton
                                                                url={String(".location")}
                                                                media={`${String(".location")}/${shareUrl}`}
                                                                className="Demo__some-network__share-button"
                                                            >
                                                                <PinterestIcon size={32} round />
                                                            </PinterestShareButton>
                                                            
                                                            <TwitterShareButton
                                                                url={`${shareUrl}${encodeURI(shareUrl)}#${index}`}
                                                                title={title}
                                                                className="Demo__some-network__share-button"
                                                            >
                                                                <TwitterIcon size={32} round />
                                                            </TwitterShareButton>
                                                            </span>
                                                        
                                                        </div>
                                                </a>
                                            </div> :'' }
                                        </div>
                                    </div> 
                                    </ScrollAnimation>                           
                                </div>
                            )
                        })}
                    </div>:''}
                    {Object.keys(listData).length === 0 && 
                        <div className="document-content mid-content pt-6 mt-5 justify-content-center">
                            <div className="mb-4 mt-custom-2">
                                 <h5 className="text-center sub-content py-4">
                                    No data found
                                </h5>
                            </div>
                        </div>
                    }
                    {!!comingSoon&& <div className="document-content mid-content pt-6 mt-5 justify-content-center">
                            <div className="mb-4 mt-custom-2">
                            <TextContent
                             text2="Coming Soon"
                             text3="Work in Progress"
                             text6={`We are working to provide you with the best possible ${titleText}s`}
                             />
                                {/* <p className="w-80 mx-auto">
                                    Your data will be coming soon...
                                </p> */}
                            </div>
                        </div>}

                </div>}
                {/* {window.location.pathname} */}
                <SignUpForm showModal={this.state.setModal} downloadLink={downloadLink} onChange={this.hideModal}/>
            </>
        );
    }
}

export default FileList;

