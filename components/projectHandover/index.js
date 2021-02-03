import React from "react";
import dynamic from 'next/dynamic'
import { NavTabs } from "../common";
import SendItIn from "../common/sendItIn";
import LookingParticular from "../common/lookingParticular";

const FileList = dynamic(() => import('../../components/common/viewPage/fileList/index'))
const AlternateTextContent = dynamic(() => import('../../components/common/alternateTextContent'))
const SecondaryBanner = dynamic(() => import('../../components/common/secondaryBanner'))
const TextContent = dynamic(() => import('../../components/common/textContent'))

export class ProjectHandoverBody extends React.Component {
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
            page_name : "project-handover",
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
        const titleText = "Project Handover";
        const pageTitleText="Business";
        const lineText = (<> {"EXPLORE. CREATE. SHARE."} <br/> {" DESIGN WITH EASE."} </>);
        const subLineText = `Access our product handover template and download it for free.`;
        const pageDescription = `Set clear expectations and provide definitive communication of task-relevant information when there is a change or when the project is complete. Handover document is used to confirm the delivery of the work or performance to the customer. It is a piece of signatory evidence to the actual physical delivery of the end project/product that the client can access. Handover report is one of the vital business reports written by product managers while transferring the product to another product manager or company. It should summarize all the tasks, responsibilities and duties. Getting help from the handover template will not only save your time but will also increase your productivity.`;
        const bannerImg = "banner_doc.png";
        const slug="product-documents/download-project-handover-template";
        const prevPage='Documents'
        let {navTabs}=this.state
        
        return (
            <>
                <div className="document-page">
                    <SecondaryBanner
                       lineText={lineText}
                       bannerImg={bannerImg}
                       selectData={pageTitleText}
                       bannerImg={bannerImg}
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
                                listData={this.state.snippet_list}
                                pageName={this.state.page_name}
                                onSelectLanguage={this.handleLanguage}
                            />
                            
                        </div>
                    </div>
                    {/* <AlternateTextContent/> */}
                    <SendItIn/>
                    {/* <LookingParticular/> */}
                </div>
            </>
        );
    }
}
export default ProjectHandoverBody