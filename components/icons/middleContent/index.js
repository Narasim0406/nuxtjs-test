import React from "react";
import Icons from '../../../datas/icons'
import dynamic from 'next/dynamic'

const IconWithButton = dynamic(() => import('../../common/iconWithButton'))
// const Pagination = dynamic(() => import('../../components/common/pagination'))
const IconList = dynamic(() => import('../../common/iconList'))
const TextContent = dynamic(() => import('../../common/textContent'))
// const ListBox = dynamic(() => import('../../common/listBox'))
import { ListMenu } from "../../common/listMenu";
import SendItIn from "../../common/sendItIn";
import LookingParticular from "../../common/lookingParticular";
import { NavTabs } from "../../common";


export class MiddleContent extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      iconsCategory:Icons.default,
      iconsList:null,
      subCategoryName:"",
      categoryList:[],
      isToggleOn:false,
      title:"ICONS",
      text1:"Whether you're creating a design from scratch or just looking for easy to use elements to elevate your design, our selection of downloads will help you through the creative process. ",
      text2:"From mock-ups to templates, graphics and icons, we've got you covered. Browse through our collection of design downloads and find inspiration to help you power through the creative process.",
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
    }
    handlePaginationList=(list)=>{
      this.setState({
        categoryList:list.paginationList
      },()=>{
      })
      
    }
    shareData(){
      let {names}=this.state
      var path = window.location.pathname;
      let pathName = window.location.search;
      var path1 = window.location.search.split("?").pop();;
      var page = window.location.hash.split("#").pop();
      if(pathName.includes('?')){
        this.setState({
          isToggleOn: !this.state.isToggleOn,
          iconsList:Icons[path1],
          subCategoryName:path1
        },()=>{
        })
      }
    }
    handleLanguage = (name) => {
      this.setState({
        isToggleOn: !this.state.isToggleOn, 
        iconsList:Icons[name.list],
        subCategoryName:name.list
      });
    }
    componentDidMount(){
      // this.shareData()
    }
  render() {
    let { isToggleOn,title,text1,subCategoryName,text2,iconsCategory,categoryList,iconsList,navTabs} = this.state
    let {} = this.props

    return (
      <>
       {/* <TextContent  
        text1={text1}
       />
       <TextContent  
        text10={text2}
       /> */}
       {/* <ListMenu/> */}
       <NavTabs
        navTabs={navTabs}
       />
       {/* <SendItIn/> */}
       {/* <LookingParticular/> */}
       <>
          {isToggleOn ? '':<IconWithButton category={categoryList.length>0?categoryList:iconsCategory} onSelectLanguage={this.handleLanguage}/>}
       </>
          {isToggleOn ? <IconList list={iconsList} listName={subCategoryName} onSelectLanguage={this.handleLanguage}/>:""}
          {/* {/* <Pagination itemList={iconsCategory} onPageChange={this.handlePaginationList}/> */}
      </>
    )
  }
};
export default MiddleContent