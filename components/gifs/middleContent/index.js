import React from "react";

import Gifs from '../../../datas/gifs'
import dynamic from 'next/dynamic'
import { NavTabs } from "../../common";
const GifWithButton = dynamic(() => import('../../common/gifWithButton/index'))
const Pagination = dynamic(() => import('../../common/pagination'))
const TextContent = dynamic(() => import('../../common/textContent'))

export class MiddleContent extends React.Component {

  state = {
    gifsCategory:Gifs.default,
    categoryList:[],
    gifsList:Gifs.notification,
    isToggleOn:false,
    title:"GIFs",
    searchOn:false,
    text1:"Do you want to connect with your users with an astounding design appeal? Our Attractive gifs/animations will make all your messages stay in the reader's head longer, and attract more prospects to your content. You can use gifs on your website, landing pages, social media marketing, eBooks, presentations etc.,",
    text2:"Download our gifs to support your product and increase your conversion rate.",
    navTabs:[
      // {
      //   name:"GRAPHICS",
      //   link:""
      // },
      {
        name:"ICONS",
        link:"/free-icons"
      },
      {
        name:"GIFS",
        link:"/animated-icons"
      },
      {
        name:"MOCK UPS",
        link:"/free-design-resources/mobilemockup"
      },
      {
        name:"TEMPLATES",
        link:"/free-design-resources/mobiletemplate"
      },
      // {
      //   name:"THEMES",
      //   link:"/free-design-resources/designthemes"
      // },
    ]
  }
  constructor(props) {
    super(props);
     
    }
    handlePaginationList=(list)=>{
      this.setState({
        categoryList:list.paginationList
      },()=>{
      })
      
    }
    
    handleLanguage = () => {
      this.setState({isToggleOn: !this.state.isToggleOn});
    }

    hidePagination=(data)=>{
      this.setState({
        searchOn:data
      })
    }

  render() {
    let { isToggleOn,title,text1,text2,searchOn,categoryList,numbers,gifsCategory,gifsList,navTabs} = this.state
    let {} = this.props

    return (
      <>
       {/* <TextContent  
        title={title}
        text1={text1}
       />
       <TextContent   
        text6={text2}
       /> */}
       <NavTabs 
        navTabs={navTabs}
       />
      {categoryList.length>0?
        <>{isToggleOn ? '':<GifWithButton category={categoryList} onSearch={this.hidePagination} onSelectLanguage={this.handleLanguage}/>}</>:'' 
      }
       {!searchOn&& <Pagination itemList={gifsCategory} onPageChange={this.handlePaginationList}/>}

      </>
    )
  }
};
export default MiddleContent