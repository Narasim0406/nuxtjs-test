import React from "react";

import dynamic from 'next/dynamic'
import { NavTabs } from "../common";
import SendItIn from "../common/sendItIn";
import LookingParticular from "../common/lookingParticular";
  const AlternateTextContent = dynamic(() => import('../common/alternateTextContent'))
  const SecondaryBanner = dynamic(() => import('../common/secondaryBanner'))
  const TextContent = dynamic(() => import('../common/textContent'))
  const FileList = dynamic(() => import('../common/viewPage/fileList/index'))

export class ApiDocumentationBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            snippet_list : {
                'login_api' : {
                    'title' : 'Login API',
                    'image' : '/api_documentation/login_api.png'
                },
                'logout_api' : {
                    'title' : 'Logout API',
                    'image' : '/api_documentation/logout_api.png'
                },
                'payment_api' : {
                    'title' : 'Payment API',
                    'image' : '/api_documentation/payment_api.png'
                },
                'profile_api' : {
                    'title' : 'Profile API',
                    'image' : '/api_documentation/profile_api.png'
                },
                'service_api' : {
                    'title' : 'Service API',
                    'image' : '/api_documentation/service_api.png'
                },
                'driver_temperature_api' : {
                    'title' : 'Driver Temperature API',
                    'image' : '/api_documentation/driver_temperature_api.png'
                },
                'vehicle_sanitation_api' : {
                    'title' : 'Vehicle Sanitation API',
                    'image' : '/api_documentation/vehical_sanitation_api.png'
                },
                'status_update_api' : {
                    'title' : 'Status Update API',
                    'image' : '/api_documentation/status_update_api.png'
                },
                'payment_success_api' : {
                    'title' : 'Payment Success API',
                    'image' : '/api_documentation/payment_success_api.png'
                },
                'time_api' : {
                    'title' : 'Time API',
                    'image' : '/api_documentation/time_api.png'
                },
                'location_api' : {
                    'title' : 'Location API',
                    'image' : '/api_documentation/location_api.png'
                },
                'update_api' : {
                    'title' : 'Update API',
                    'image' : '/api_documentation/update_api.png'
                }
            },
            titleText : "API documentation",
            pageTitleText:"Business",
            lineText : (<> {"EXPLORE. CREATE. SHARE."} <br/> {" DESIGN WITH EASE."} </>),
            subLineText : `Download API documentation template Now`,
            pageDescription : `Create flawless API documentation for your RESTful API with the help of our predefined format to seamlessly document your API. We have laid out templates you can use to create great docs for your REST API.`,
            bannerImg : "banner_doc.png",
            page_name : "api-documentation",
            
            slug:"product-documents/download-api-documentation",
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
            bannerImg,slug,hideArrow ,navTabs,
            page_name }=this.state
        const prevPage="Documents"    
        return (
            <>
                <div className="document-page">
                    <SecondaryBanner
                        lineText={lineText}
                        bannerImg={bannerImg}
                        // link0={slug.split('/')[0]}
                        // prevPage={prevPage}
                        // link1={slug}
                        // currentPage={pageTitleText}
                        lineText={lineText}
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
                                onSelectLanguage={this.handleLanguage}
                                slug={slug}
                                
                                // pageDescription={pageDescription}
                            />
                            {/* <ChallengeUs/> */}
                            
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
export default ApiDocumentationBody
