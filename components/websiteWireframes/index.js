import React from "react";

import designTemplate from "../../datas/designTemplate"
import dynamic from 'next/dynamic'

const FileList = dynamic(() => import('../../components/common/viewPage/fileList/index'))
const AlternateTextContent = dynamic(() => import('../../components/common/alternateTextContent'))
const SecondaryBanner = dynamic(() => import('../../components/common/secondaryBanner'))
const Pagination = dynamic(() => import('../../components/common/pagination'))
const TextContent = dynamic(() => import('../../components/common/textContent'))



export class WebsiteWireframesBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            snippet_list :designTemplate.website_wireframes,
            paginatedList:designTemplate.website_wireframes[0],
            page_name : "website-wireframes",
            hideArrow:true
        }
    }
    handlePaginationList=(list)=>{
        this.setState({
          paginatedList:list.paginationList
        },()=>{
        })
    }

  render() {
        let{snippet_list,hideArrow}=this.state
        const titleText = "Website Wireframes";
        const pageTitleText="Website Wireframes";
        const subLineText = "Download from our list of compelling wireframes.";
        const lineText = (<> {"It is all about giving"} <br/> {"We have got more to offer"} </>);
        const pageDescription = `Visualize your product structure through an effective iterative process to communicate the informational hierarchy effectively to arrive at the optimum design for your product. `;
        const bannerImg = "WEBSITEWIREFRAMES.png";
        const slug="free-design-resources/websitewireframe";
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

                    <div className="container text-center">
                       <TextContent  
                            title={titleText}
                            text1={pageDescription}
                        />
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
                    <AlternateTextContent/>
                </div>
            </>
        );
    }
}
export default WebsiteWireframesBody