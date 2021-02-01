import React from "react";
import { TextContent, CommunityDownload, TextWithBg, BoxWithButton } from "../../common";
import { AlternateTextContent } from "../../common";
import { CircularForm } from "../../common";
import { Cards } from "../index";
import FileList from "../../common/viewPage/fileList/index";


export class Section extends React.Component {

  state = {
    document_list : {
      'apidocumentation' : {
          'title' : 'API documentation',
          'image' : '/documents/api_documentation.png'
      },
      'technicalarchitecture' : {
          'title' : 'Technical architecture',
          'image' : '/documents/technical_architecture.png'
      },
      'projecthandover' : {
          'title' : 'Project Handover Template',
          'image' : '/documents/project_handover_template.png'
      },
      'scopedocuments' : {
          'title' : 'Scope documents',
          'image' : '/documents/scope_documents.png'
      },
      'golivechecklist' : {
          'title' : 'Golive checklist',
          'image' : '/documents/golive_checklist.png'
      }
  },
    text1:"Popular community download for your to explore.",
    text2:"It could be anything for your digital business needs, even if you were turned down by others.",
    text3:"Tired of Normalcy?",
    text4:"Buckle up! We have all it takes to prove excellence. You don’t believe us?",
    text6:"Browse through our wide range of elements to support your products.",
    text7:"Used by ",
    text8:" 1700+ ",
    text9:"individuals",
    title:"Community Picks",
    
  }

  render() {
    let { text1,text2,text3,text4,text6,text7,text8,text9,title} = this.state
    let {} = this.props

    return (
      <>
      <div className="bg-white">
       <TextContent
        text3={title}
        text6={text1}
        text7={text7}
        text8={text8}
        text9={text9}
       />
       <Cards/>
       <TextWithBg/> 
       {/* <AlternateTextContent/> */}
       {/* <CircularForm/> */}
       <BoxWithButton/>
{/* 
       <TextContent
       text3={title}
       /> */}
       {/* <CommunityDownload /> */}
       </div>
      </>
    )
  }
};
export default Section

