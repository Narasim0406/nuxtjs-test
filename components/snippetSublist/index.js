import React from "react";
import dynamic from 'next/dynamic'

const FileList = dynamic(() => import('../../components/common/viewPage/fileList/index'))
const AlternateTextContent = dynamic(() => import('../../components/common/alternateTextContent'))
const SecondaryBanner = dynamic(() => import('../../components/common/secondaryBanner'))
const TextContent = dynamic(() => import('../../components/common/textContent'))


export class SnippetSublistBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            snippet_list : {
                'animation' : {
                    'title' : 'Animation code',
                    'image' : '/code_snippet/animation_code.png'
                },
                'samplenav' : {
                    'title' : 'Sample nav code',
                    'image' : '/code_snippet/sample_nav_code.png'
                },
                'sampleui' : {
                    'title' : 'Sample UI code',
                    'image' : '/code_snippet/sample_ui_code.png'
                },
                'typograpy' : {
                    'title' : 'Typograpy code',
                    'image' : '/code_snippet/typograpy_code.png'
                },
                'iconreplacement' : {
                    'title' : 'Icon replacement code',
                    'image' : '/code_snippet/icons_placement_code.png'
                },
                'splashscreen' : {
                    'title' : 'Splash screen code',
                    'image' : '/code_snippet/splash_screen_code.png'
                },
                'homescreen' : {
                    'title' : 'Home screen',
                    'image' : '/code_snippet/home_screen.png'
                },
                'navigation' : {
                    'title' : 'Navigation Code',
                    'image' : '/code_snippet/navigation_code.png'
                }
            },
            page_name : "code-snippet-sublist"
        }
    }

  render() {
        const titleText = "Snippet Sub page";
        const subLineText = "Download API documentation template Now";
        const lineText = (<> {"It is all about giving"} <br/> {"We have got more to offer"} </>);
        const pageDescription = `Web design and development can be an extremely long process. Having pre-written code snippets to turn to when you start developing a new website can help curtail the process to a great extent. Code snippets have the ability to reduce your development time for your website. Browse through our library of code snippets for your product development and download them for free.`;
        const bannerImg = "banner_code.png";
        
        return (
            <>
                <div className="document-page">
                    <SecondaryBanner
                        selectData={titleText}
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
export default SnippetSublistBody