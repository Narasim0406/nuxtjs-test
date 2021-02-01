import React from "react";
import dynamic from 'next/dynamic'

const FileList = dynamic(() => import('../../components/common/viewPage/fileList/index'))
const AlternateTextContent = dynamic(() => import('../../components/common/alternateTextContent'))
const SecondaryBanner = dynamic(() => import('../../components/common/secondaryBanner'))
const TextContent = dynamic(() => import('../../components/common/textContent'))


export class ScopeDocumentsBody extends React.Component {
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
            page_name : "scope-documents"
        }
    }
    handleLanguage = (open) => {
        this.setState({titleText: open.name.toUpperCase()});
    }
  render() {
        const titleText = "Scope Documents";
        const pageTitleText="Scope Documents";
        const lineText = (<> {"It is all about giving"} <br/> {"We have got more to offer"} </>);
        const subLineText = `Download our successful product scope templates here.`;
        const pageDescription = `Create an IT project scope be it for a large or a small project, our scope document provides a straightforward layout for creating a scope. A Scope document, or product scope statement, is a document used to report the major deliverables of a product including the pivotal milestones, assumptions, constraints and high-level requirements. A product scope document is a constructive tool for further decision making when new change requests are considered to modify the product scope or identify scope-creep.`;
        const bannerImg = "banner_doc.png";
        const slug="product-documents/download-scope-documents";
        const prevPage='Documents'
        
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
                                titleText={titleText}
                                subLineText={subLineText}
                                listData={this.state.snippet_list}
                                pageName={this.state.page_name}
                                pageDescription={pageDescription}
                                onSelectLanguage={this.handleLanguage}

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
export default ScopeDocumentsBody