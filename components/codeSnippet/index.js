import React from "react";
import codeSnippet from "../../datas/codeSnippet"
import dynamic from 'next/dynamic'
import SendItIn from "../common/sendItIn";
import LookingParticular from "../common/lookingParticular";
import { NavTabs } from "../common";
  const AlternateTextContent = dynamic(() => import('../common/alternateTextContent'))
  const SecondaryBanner = dynamic(() => import('../common/secondaryBanner'))
  const TextContent = dynamic(() => import('../common/textContent'))
  const Pagination = dynamic(() => import('../common/pagination'))
  const FileList = dynamic(() => import('../common/viewPage/fileList/index'))



export class CodeSnippetBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            snippet_list : codeSnippet.default,
            paginatedList:codeSnippet.default[0],
            page_name : "code-snippets-download",
            hideArrow:true,
            searchOn:false,
            navTabs:[
                {
                  name:"CSS/ HTML",
                  link:"/code-snippets-download"
                },
                {
                  name:"FLASH",
                  link:"/free-icons"
                },
                {
                  name:"LAYOUT & STYLING",
                  link:"/animated-icons"
                },
                {
                  name:"NAVIGATION",
                  link:"/free-design-resources/mobilemockup"
                },
                
              ]
        }
    }
    hidePagination=(data)=>{
        this.setState({
          searchOn:data
        })
      }
    handlePaginationList=(list)=>{
        this.setState({
          paginatedList:list.paginationList
        },()=>{
        })
    }
  render() {
      let{snippet_list,hideArrow,navTabs,searchOn,page_name}=this.state
        const titleText = "Code Snippets";
        const subLineText = null;
        const lineText = (<> {"EXPLORE. CREATE. SHARE."} <br/> {" DESIGN WITH EASE."} </>);
        const pageDescription = `Web design and development can be an extremely long process. Having pre-written code snippets to turn to when you start developing a new website can help curtail the process to a great extent. Code snippets have the ability to reduce your development time for your website. Browse through our library of code snippets for your product development and download them for free.`;
        const bannerImg = "banner_code.png";
        const page_title='Code'

        
        return (
            <>
                <div className="document-page bg-white">
                    <SecondaryBanner
                        link1={page_name} 
                        // currentPage={titleText}
                        lineText={lineText}
                        selectData={page_title}
                        bannerImg={bannerImg}
                    />
                    {/* <TextContent  
                        title={titleText}
                        text1={pageDescription}
                    /> */}
                    {/* <NavTabs 
                    navTabs={navTabs}
                    /> */}
                    <div className="container text-center">
                        
                        <div className="col-md-10 offset-md-1 col-sm-12">
                            <FileList
                                // titleText={titleText}
                                // subLineText={subLineText}
                                listData={this.state.snippet_list}
                                paginatedList={this.state.paginatedList}
                                hideArrow={hideArrow}
                                onSearch={this.hidePagination}
                                // pageName={this.state.page_name}
                                // pageDescription={pageDescription}
                            />
                            {/* {snippet_list.length} */}
                            {!searchOn&&<Pagination itemList={snippet_list} onPageChange={this.handlePaginationList}/>}
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
export default CodeSnippetBody
