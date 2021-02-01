import React from "react";

import dynamic from 'next/dynamic'
import { NavTabs } from "../common";
import SendItIn from "../common/sendItIn";
import LookingParticular from "../common/lookingParticular";
  const AlternateTextContent = dynamic(() => import('../common/alternateTextContent'))
  const SecondaryBanner = dynamic(() => import('../common/secondaryBanner'))
  const TextContent = dynamic(() => import('../common/textContent'))
  const FileList = dynamic(() => import('../common/viewPage/fileList/index'))

export class GoliveChecklistBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            snippet_list : {
                'telecom' : {
                    'title' : 'Telecom',
                    'image' : '/scope_documents/telecom.png'
                },
                'bfsi' : {
                    'title' : 'BFSI',
                    'image' : '/scope_documents/bfsi.png'
                },
                'gaming' : {
                    'title' : 'Gaming',
                    'image' : '/scope_documents/gaming.png'
                },
                'retail' : {
                    'title' : 'Retail',
                    'image' : '/scope_documents/retail.png'
                },
                'transport' : {
                    'title' : 'Transport',
                    'image' : '/scope_documents/transport.png'
                }
            },
            page_name : "golive-checklist",
            navTabs:[
                {
                  name:"ONBOARDING DOCUMENTATION",
                  link:"/product-documents/download-api-documentation"
                },
                {
                  name:"PROJECT CHECKLISTS",
                  link:"/product-documents/download-product-go-live-checklist"
                },
                {
                  name:"TECHNICAL DOCUMENTATION",
                  link:"/product-documents/download-technical-architecture"
                },
                {
                  name:"HANDOVER TEMPLATES",
                  link:"/product-documents/download-project-handover-template"
                },
              ]
        }
    }
    handleLanguage = (open) => {
        this.setState({titleText: open.name.toUpperCase()});
    }
    render() {
        let{navTabs}=this.state
        const titleText = "GoLive Checklist";
        const pageTitleText="Business";
        const lineText = (<> {"EXPLORE. CREATE. SHARE."} <br/> {" DESIGN WITH EASE."} </>);
        const subLineText = `Download our checklist template for various industry products`;
        const pageDescription = `Don’t let even a miniscule detail that hinder your product launch. We have curated a product go-live checklist for a successful launch of your next product development.`;
        const bannerImg = "banner_doc.png";
        const slug="product-documents/download-product-go-live-checklist";
        const prevPage='Documents'
        
        return (
            <>
                <div className="document-page">
                    <SecondaryBanner
                        lineText={lineText}
                        bannerImg={bannerImg}
                        // link0={slug.split('/')[0]}
                        // prevPage={prevPage}
                        // link1={slug}
                        selectData={pageTitleText}
                    />
                    <NavTabs
                        navTabs={navTabs}
                    />
                    <div className="container text-center">
                        {/* <TextContent  
                            title={titleText}
                            text1={pageDescription}
                        /> */}
                        <div className="col-md-10 offset-md-1 col-sm-12">
                            <FileList
                                titleText={titleText}
                                // subLineText={subLineText}
                                listData={this.state.snippet_list}
                                pageName={this.state.page_name}
                                pageDescription={pageDescription}
                                onSelectLanguage={this.handleLanguage}

                            />
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
export default GoliveChecklistBody