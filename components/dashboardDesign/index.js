import React from "react";
import designTemplate from "../../datas/designTemplate"
import dynamic from 'next/dynamic'
  const AlternateTextContent = dynamic(() => import('../common/alternateTextContent'))
  const SecondaryBanner = dynamic(() => import('../common/secondaryBanner'))
  const TextContent = dynamic(() => import('../common/textContent'))
  const Pagination = dynamic(() => import('../common/pagination'))
  const FileList = dynamic(() => import('../common/viewPage/fileList/index'))

export class DashboardDesignBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            snippet_list :designTemplate.dashboard,
            paginatedList:designTemplate.dashboard[0],
            page_name : "dashboard-design",
            hideArrow:true
        }
    }
    handlePaginationList=(list)=>{
        this.setState({
          paginatedList:list.paginationList
        },()=>{
          
        })
    }
    // componentDidMount

  render() {
      let{snippet_list,hideArrow}=this.state
        const titleText = "Dashboard design";
        const pageTitleText="Dashboard design";
        const subLineText = "";
        const lineText = (<> {"It is all about giving"} <br/> {"We have got more to offer"} </>);
        const pageDescription = `Get an enhanced bird’s eye view with our specially crafted dashboard design. There is no need to build from the ground up anymore. Take an easy and time saving path by choosing our already available designs.`;
        const bannerImg = "DASHBOARD.png";
        const slug="free-design-resources/dashboard-design";
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
export default DashboardDesignBody