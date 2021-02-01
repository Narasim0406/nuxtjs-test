import React from "react";

import dynamic from 'next/dynamic'
  const AlternateTextContent = dynamic(() => import('../common/alternateTextContent'))
  const SecondaryBanner = dynamic(() => import('../common/secondaryBanner'))
  const TextContent = dynamic(() => import('../common/textContent'))
  const FileList = dynamic(() => import('../common/viewPage/fileList/index'))

  

export class DocumentBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            document_list : {
                'product-documents/download-api-documentation' : {
                    'title' : 'API documentation',
                    'image' : '/documents/api_documentation.png',
                },
                'product-documents/download-technical-architecture' : {
                    'title' : 'Technical architecture',
                    'image' : '/documents/technical_architecture.png'
                },
                'product-documents/download-project-handover-template' : {
                    'title' : 'Project Handover Template',
                    'image' : '/documents/project_handover_template.png'
                },
                'product-documents/download-scope-documents' : {
                    'title' : 'Scope documents',
                    'image' : '/documents/scope_documents.png'
                },
                'product-documents/download-product-go-live-checklist' : {
                    'title' : 'Golive checklist',
                    'image' : '/documents/golive_checklist.png'
                }
            },
            page_name : "product-documents",
            blogs:[],
            slug:'documents'
        }
    }
    data(){
        
        
    }
    componentDidMount(){
        // this.data()
    }

    render() {
    const {slug,page_name}=this.state
    const titleText = "Documents";
    const subLineText = null;
    const lineText = (<> {"It is all about giving"} <br/> {"We have got more to offer"} </>);
    const pageDescription = `Gain access to a collection of essential business documents to suit your product that creates very detailed work breakdown structures which results in drafting realistic product schedules, point out risks, track progress etc. Download business documents templates such as Scope documents, Technical architecture Product handover template, Go-live checklist, API documentation and much more.`;
    const bannerImg = "banner_doc.png";
    return (
      <>
        <div className="document-page bg-white">
            <SecondaryBanner
                link1={page_name}
                currentPage={titleText}
                lineText={lineText}
                bannerImg={bannerImg}
                
                // breadCrumbs={page_name}
            />
                        <div className="container text-center">
                <TextContent  
                    title={titleText}
                    text1={pageDescription}
                />
            
                <div className="col-md-10 offset-md-1 col-sm-12">
                    <FileList
                        // onLang={onSearch}
                        listData={this.state.document_list}
                        pageName={this.state.page_name}
                        slug={slug}
                    />
                    {/* <ChallengeUs/> */}
                    
                </div>
            </div>
            <AlternateTextContent/>
        </div>
        
      </>
    );
  }
}
export default DocumentBody