import React from "react";
import designTemplate from "../../datas/designTemplate"
import dynamic from 'next/dynamic'
  const AlternateTextContent = dynamic(() => import('../common/alternateTextContent'))
  const SecondaryBanner = dynamic(() => import('../common/secondaryBanner'))
  const TextContent = dynamic(() => import('../common/textContent'))
  const Pagination = dynamic(() => import('../common/pagination'))
  const FileList = dynamic(() => import('../common/viewPage/fileList/index'))


export class DesignIdeasBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            snippet_list :designTemplate.designideas,
            paginatedList:designTemplate.designideas[0],
            page_name : "design-ideas",
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
        const titleText = "Design Ideas";
        const pageTitleText="Design Ideas";
        const subLineText = "Download API documentation template Now";
        const lineText = (<> {"It is all about giving"} <br/> {"We have got more to offer"} </>);
        const pageDescription = `Create flawless API documentation for your RESTful API with the help of our predefined format to seamlessly document your API. We have laid out templates you can use to create great docs for your REST API.`;
        const bannerImg = "DESIGNIDEAS.png";
        const slug="free-design-resources/designideas";
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
export default DesignIdeasBody