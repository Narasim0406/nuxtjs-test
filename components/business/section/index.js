import React from "react";
import dynamic from 'next/dynamic'

  const AlternateTextContent = dynamic(() => import('../../common/alternateTextContent'))
  const SecondaryBanner = dynamic(() => import('../../common/secondaryBanner'))
  const MiddleContent = dynamic(() => import('../middleContent/index'))

export class Section extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    text1:"Freebies is a creative approach from doodleblue to give our users the freedom to explore through our variety of items that they can use for their products. You can choose from various options such as icons, wireframes, code snippets, project documents and much more. Browse through our wide range of elements to support your products.",
    text2:"It could be anything for your digital business needs, even if you were turned down by others.",
    text3:"Tired of Normalcy?",
    text4:"Buckle up! We have all it takes to prove excellence. You don’t believe us?",
    text5:"Find out now!",
    categoryList:[
        {
          title:"ONBOARDING DOCUMENTATION",
          subTitleText:"Access our collection of documentation templates to help you create a detailed project scope",
          icon:"computer-4 1.svg",
          link:"/product-documents/download-api-documentation"
        },
        {
          title:"PROJECT CHECKLISTS",
          subTitleText:"Access our collection of documentation templates to help you create a detailed project scope",
          icon:"computer-4 1.svg",
          link:"/product-documents/download-product-go-live-checklist"
        },
        {
          title:"TECHNICAL DOCUMENTATION",
          subTitleText:"Access our collection of documentation templates to help you create a detailed project scope",
          icon:"landing-page 1.svg",
          link:"/product-documents/download-technical-architecture"
        },
        {
          title:"HANDOVER TEMPLATES",
          subTitleText:"Access our collection of documentation templates to help you create a detailed project scope",
          icon:"coding 1 (1).svg",
          link:"/product-documents/download-project-handover-template"
        },
        
      ]

    }
  }
  render() {
    let { categoryList} = this.state
    // let {categoryList} = this.props
    // console.log(this.props.categoryList,"CategoryList")
    const bannerImg = "ICONBANNER.png";
    const titleText = "Business";
    const subLineText = null;
    const lineText = (<> {"EXPLORE. CREATE. SHARE."} <br/> {" DESIGN WITH EASE."} </>);

    return (
      <>
      <div className="bg-white">
      <SecondaryBanner 
      selectData={titleText}
      lineText={lineText}
      bannerImg={bannerImg}
      />
      
        <MiddleContent categoryList={categoryList}/>
        {/* <AlternateTextContent/> */}
      </div>    
       
      </>
    )
  }
};
export default Section

