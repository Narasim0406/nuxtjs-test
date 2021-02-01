import React from "react";

import designTemplate from "../../datas/designTemplate"
import dynamic from 'next/dynamic'
  const AlternateTextContent = dynamic(() => import('../common/alternateTextContent'))
  const SecondaryBanner = dynamic(() => import('../common/secondaryBanner'))
  const TextContent = dynamic(() => import('../common/textContent'))
  const FileList = dynamic(() => import('../common/viewPage/fileList/index'))

export class DesignTemplateBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            snippet_list :designTemplate.default[0],
            page_name : "free-design-resources"
        }
    }

  render() {
        const titleText = "Design Templates";
        const subLineText = null;
        const lineText = (<> {"It is all about giving"} <br/> {"We have got more to offer"} </>);
        const pageDescription = `Access our assemblage of free, unique, and high-quality design Templates such as mobile app mockups, website templates, wireframes, dashboard designs, and much more. Keep yourself updated with the recent design trends and templates and save time building your next product.`;
        const bannerImg = "DESIGNTEMP.png";
        
        return (
            <>
                <div className="document-page">
                    <SecondaryBanner
                        link1={this.state.page_name}
                        currentPage={titleText}
                        lineText={lineText}
                        bannerImg={bannerImg}
                    />
                    
                    <div className="container text-center">
                    <TextContent  
                        title={titleText}
                        text1={pageDescription}
                    />
                        <div className="col-md-10 offset-md-1 col-sm-12">
                            <FileList
                            
                                listData={this.state.snippet_list}
                                pageName={this.state.page_name}
                            
                            />
                            

                        </div>
                    </div>
                    <AlternateTextContent/>

                </div>
            </>
        );
    }
}
export default DesignTemplateBody