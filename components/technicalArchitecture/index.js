import React from "react";

import dynamic from 'next/dynamic'
import { NavTabs } from "../common";
import SendItIn from "../common/sendItIn";
import LookingParticular from "../common/lookingParticular";
  const AlternateTextContent = dynamic(() => import('../common/alternateTextContent'))
  const SecondaryBanner = dynamic(() => import('../common/secondaryBanner'))
  const TextContent = dynamic(() => import('../common/textContent'))
  const FileList = dynamic(() => import('../common/viewPage/fileList/index'))
export class TechnicalArchitectureBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            snippet_list : {
                'db_schema' : {
                    'title' : 'DB Schema',
                    'image' : '/technical_architecture/db_schema.png'
                },
                'architecture_diagram' : {
                    'title' : 'Architecture diagram',
                    'image' : '/technical_architecture/architecture_diagram.png'
                },
                'database_models' : {
                    'title' : 'Database models',
                    'image' : '/technical_architecture/database_models.png'
                },
                'flow_diagram' : {
                    'title' : 'Flow diagram',
                    'image' : '/technical_architecture/flow_diagram.png'
                }
            },
            page_name : "technical-documentation",
            pageTitleText:"Business",
            titleText : "Technical Documentation",
            lineText : (<> {"EXPLORE. CREATE. SHARE."} <br/> {" DESIGN WITH EASE."} </>),
            subLineText : `Download various technical architecture diagrams for free`,
            pageDescription : `Construct architectural designs and plans with our curated list of technical architecture documents. Technical architecture document is a map or a set of rules governing the technical interaction, arrangement and interdependence of the components to ensure a coherent system that meets a specified set of requirements.`,
            bannerImg : "banner_doc.png",
            slug:"product-documents/download-technical-architecture",
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
        let{titleText,
            lineText, 
            subLineText, 
            pageDescription ,
            pageTitleText,
            bannerImg ,slug,navTabs,
            page_name }=this.state
        const prevPage="Documents"    

        return (
            <>
                <div className="document-page">
                    <SecondaryBanner
                       lineText={lineText}
                       selectData={pageTitleText}
                       bannerImg={bannerImg}
                    //    link0={slug.split('/')[0]}
                    //    prevPage={prevPage}
                    //    link1={slug}
                    //    currentPage={pageTitleText}
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
                                onSelectLanguage={this.handleLanguage}

                                // pageDescription={pageDescription}
                            />
                            {/* <ChallengeUs/> */}
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
export default TechnicalArchitectureBody