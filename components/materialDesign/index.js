import React from "react";
import designTemplate from "../../datas/designTemplate"
import dynamic from 'next/dynamic'

// const FileList = dynamic(() => import('../../components/common/viewPage/fileList/index'))
const AlternateTextContent = dynamic(() => import('../../components/common/alternateTextContent'))
// const Pagination = dynamic(() => import('../../components/common/pagination'))
const SecondaryBanner = dynamic(() => import('../../components/common/secondaryBanner'))
const TextContent = dynamic(() => import('../../components/common/textContent'))

export class MaterialDesignBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            snippet_list :designTemplate.mobile_templates,
            paginatedList:designTemplate.mobile_templates[0],
            page_name : "material-design",
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
        const titleText = "Material design";
        const pageTitleText="Material design";
        const subLineText = "Download API documentation template Now";
        const lineText = (<> {"It is all about giving"} <br/> {"We have got more to offer"} </>);
        const pageDescription = `Access from our unique range of sleek, simplified and engaging interfaces to maintain consistency and create virtual flexibility, clear design and usability guidelines. `;
        const bannerImg = "MATERIALDESIGNS.png";
        const slug="free-design-resources/materialdesign";
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
                        <TextContent
                             text2="Coming Soon"
                             text3="Work in Progress"
                             text6={`We are working to provide you the best possible ${titleText}s`}
                             />
                            {/* <FileList
                                // titleText={titleText}
                                // subLineText={subLineText}
                                listData={this.state.snippet_list}
                                paginatedList={this.state.paginatedList}
                                pageName={this.state.page_name}
                                // pageDescription={pageDescription}
                            /> */}
                            
                        </div>
                        {/* <Pagination itemList={snippet_list} onPageChange={this.handlePaginationList}/> */}
                    </div>
                    <AlternateTextContent/>
                </div>
            </>
        );
    }
}
export default MaterialDesignBody
