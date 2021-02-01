import React from "react";
import designTemplate from "../../datas/designTemplate"
import dynamic from 'next/dynamic'
import SendItIn from "../common/sendItIn";
import LookingParticular from "../common/lookingParticular";
import NavTabs from "../common/navTabs";


const FileList = dynamic(() => import('../common/viewPage/fileList/index'))
const AlternateTextContent = dynamic(() => import('../common/alternateTextContent'))
const Pagination = dynamic(() => import('../common/pagination'))
const SecondaryBanner = dynamic(() => import('../common/secondaryBanner'))
const TextContent = dynamic(() => import('../common/textContent'))



export class MobileThemesBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            snippet_list :designTemplate.mobile_templates,
            paginatedList:designTemplate.mobile_templates[0],
            page_name : "mobile-theme",
            hideArrow:true,
            navTabs:[
                // {
                //   name:"GRAPHICS",
                //   link:""
                // },
                {
                  name:"ICONS",
                  link:"/free-icons"
                },
                {
                  name:"GIFS",
                  link:"/animated-icons"
                },
                {
                  name:"MOCK UPS",
                  link:"/free-design-resources/mobilemockup"
                },
                {
                  name:"TEMPLATES",
                  link:"/free-design-resources/mobiletemplate"
                },
                // {
                //   name:"THEMES",
                //   link:"/free-design-resources/designthemes"
                // },
              ]
        }
    }
    handlePaginationList=(list)=>{
        this.setState({
          paginatedList:list.paginationList
        },()=>{
        })
    }

  render() {
        let{snippet_list,hideArrow,navTabs}=this.state
        const titleText = "Mobile Themes";
        const pageTitleText="Mobile Themes";
        const subLineText = "Download now ";
        const lineText = (<> {"It is all about giving"} <br/> {"We have got more to offer"} </>);
        const pageDescription = `Explore our exquisite list of mobile themes to build your dream app. Impressive mobile themes and transform your product to drive more engagement and sales. `;
        const bannerImg = "MOBILETEMPLATES.png";
        const slug="free-design-resources/mobilethemes";
        const prevPage='Design Themes'
        
        return (
            <>
                <div className="document-page">
                    <SecondaryBanner
                       lineText={lineText}
                       bannerImg={bannerImg}
                       link0={slug.split('/')[0]}
                       prevPage={prevPage}
                       link1={slug}
                       currentPage={pageTitleText}
                    />
                    <div className="text-center">
                        {/* <TextContent  
                            title={titleText}
                            text1={pageDescription}
                        /> */}
                        <NavTabs
                          navTabs={navTabs}
                        />
                    <div className="container">
                        {/* <div className="col-md-10 offset-md-1 col-sm-12">
                                <FileList
                    
                                    listData={this.state.snippet_list}
                                    paginatedList={this.state.paginatedList}
                                    pageName={this.state.page_name}
                                    hideArrow={hideArrow}
                    
                                />
                                
                            </div>
                            <Pagination itemList={snippet_list} onPageChange={this.handlePaginationList}/> */}
                        </div>    
                        
                    </div>
                    {/* <AlternateTextContent/> */}
                    <SendItIn/>
                    <LookingParticular/>
                </div>
                
            </>
        );
    }
}
export default MobileThemesBody