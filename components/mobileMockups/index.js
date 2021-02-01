import React from "react";
import designTemplate from "../../datas/designTemplate"
import dynamic from 'next/dynamic'
import { NavTabs } from "../common";
import SendItIn from "../common/sendItIn";
import LookingParticular from "../common/lookingParticular";

const FileList = dynamic(() => import('../../components/common/viewPage/fileList/index'))
const AlternateTextContent = dynamic(() => import('../../components/common/alternateTextContent'))
const Pagination = dynamic(() => import('../../components/common/pagination'))
const SecondaryBanner = dynamic(() => import('../../components/common/secondaryBanner'))
const TextContent = dynamic(() => import('../../components/common/textContent'))

export class MobileMockupsBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            snippet_list :designTemplate.mobile_mockups,
            paginatedList:designTemplate.mobile_mockups[0],
            page_name : "mobile-mockups",
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
        const titleText = "Mobile Mockups";
        const pageTitleText="Mobile Mockups";
        const subLineText = "Download API documentation template Now";
        const lineText = (<> {"It is all about giving"} <br/> {"We have got more to offer"} </>);
        const pageDescription = `Download from a variety of PSD mobile mockups to showcase your app/website designs, give life to your ideas to your products with various mockups such as android device, Apple device web page etc. `;
        const bannerImg = "MOBILEMOCKUPS.png";
        const slug="free-design-resources/mobilemockup";
        const prevPage='Design Templates'
        
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
                            <div className="col-md-10 offset-md-1 col-sm-12">
                                    <FileList
                                        listData={this.state.snippet_list}
                                        paginatedList={this.state.paginatedList}
                                        pageName={this.state.page_name}
                                        hideArrow={hideArrow}
                                    />
                                </div>
                                <Pagination itemList={snippet_list} onPageChange={this.handlePaginationList}/>
                            </div>    
                    </div>
                    <SendItIn/>
                    <LookingParticular/>
                    {/* <AlternateTextContent/> */}
                </div>
            </>
        );
    }
}
export default MobileMockupsBody