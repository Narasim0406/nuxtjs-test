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
        // {
        //   title:"GRAPHICS",
        //   subTitleText:"Explore unique graphics that can used for social media, websites or any design project.",
        //   icon:"designIcon.svg",
        //   link:"/free-icons"
        // },
        {
          title:"ICONS",
          subTitleText:"Choose from a range of icons to design distinctive infographics, logos and much more.",
          icon:"designIcon.svg",
          link:"/free-icons"
        },
        {
          title:"GIFS",
          subTitleText:"Add a little extra pizazz to your project with unique and specially designed GIFS.",
          icon:"gif 1.svg",
          link:"/animated-icons"
        },
        {
          title:"MOCK UPS",
          subTitleText:"Sift through our range of pixel-perfect mockups for any design presentation.",
          icon:"app 1.svg",
          link:"/free-design-resources/mobilemockup"
        },
        {
          title:"TEMPLATES",
          subTitleText:"Use our selection of templates to design presentations, infographics, webpages and more.",
          icon:"artboard 1.svg",
          link:"/free-design-resources/mobiletemplate"
        }
      ]

    }
  }
  render() {
    let { categoryList} = this.state
    // let {categoryList} = this.props
    // console.log(this.props.categoryList,"CategoryList")
    const bannerImg = "ICONBANNER.png";
    const titleText = "Design";
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

