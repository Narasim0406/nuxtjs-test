import React from "react";
import SendItIn from "../../common/sendItIn";

import dynamic from 'next/dynamic'
  const AlternateTextContent = dynamic(() => import('../../common/alternateTextContent'))
  const SecondaryBanner = dynamic(() => import('../../common/secondaryBanner'))
  const MiddleContent = dynamic(() => import('../middleContent/index'))
  

export class Section extends React.Component {

  state = {
    text1:"Freebies is a creative approach from doodleblue to give our users the freedom to explore through our variety of items that they can use for their products. You can choose from various options such as icons, wireframes, code snippets, project documents and much more. Browse through our wide range of elements to support your products.",
    text2:"It could be anything for your digital business needs, even if you were turned down by others.",
    text3:"Tired of Normalcy?",
    text4:"Buckle up! We have all it takes to prove excellence. You don’t believe us?",
    text5:"Find out now!"

  }

  render() {
    let { } = this.state
    let {} = this.props
    // const bannerImg = "banner_doc.png";
    const titleText = "GIFs";
    const subLineText = null;
    const lineText = (<> {"It is all about giving"} <br/> {"We have got more to offer"} </>);

    const bannerImg = "GIFSBANNER.png";
    return (
      <>
      <div className="bg-white">
      <SecondaryBanner 
      selectData={titleText}
      lineText={lineText}
      bannerImg={bannerImg}
      />
        <MiddleContent/>
        {/* <AlternateTextContent/> */}
        <SendItIn/>
        {/* <LookingParticular/> */}
      </div>    
       
      </>
    )
  }
};
export default Section
