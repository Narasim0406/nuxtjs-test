import React from "react";
import Link from 'next/link'
import {ImgLazyLoad} from './../../common/index'

export class Pagination extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    numbers:[],
    selectedPage:1,
    prevDisable:true,
    nextDisable:false,
    totalPage:null
  }
  this.paginationList = this.paginationList.bind(this);
  this.selectPage = this.selectPage.bind(this);
  this.prev = this.prev.bind(this);

}
toggleFilter = () => {
    var {filterSelected} = this.state;
    this.setState({
        filterSelected : !filterSelected
    })
}

selectedFilter = (value) => {

}

  selectPage=(e)=>{
    let{totalPage}=this.state
    this.setState({
      selectedPage:e
    },()=>{
      this.paginationList()
      if(e!=1){
        this.setState({
          prevDisable:false
        })      
      }
      if(e==totalPage&&totalPage!=null){
        this.setState({nextDisable:true})
      }
    })
    
  }
  paginationList=()=>{
    
    let num=this.props.itemList
    let limit=12
    let newPaginated=[]    
    let totalPage= Math.round(num.length/12)
    this.setState({totalPage:totalPage},()=>{
      if(totalPage==this.state.selectedPage)
        this.setState({nextDisable:true})})
        let i=0
        let numberList=[]
        for(i=1;i<=totalPage;i++){
          numberList.push(i) 
        }
        this.setState({
          numbers:numberList
        })
        let page =this.state.selectedPage
        let pageCondition1=(page-1)*limit 
        let pageCondition2=pageCondition1+12
        
        newPaginated=num.slice(pageCondition1,pageCondition2)
        let pagination={
          totalPage:totalPage,
          paginationList:newPaginated
        }
        this.props.onPageChange(pagination); 
      }
    
  handleClick = () => {
    var openList = {
      status:true
        }
    this.props.onSelectLanguage(openList);            
  }
  prev=()=>{
    let{selectedPage}=this.state
    if(selectedPage==1){
      this.setState({
        prevDisable:true
      })
    }
    else{
      let page=selectedPage-1
      this.setState({
        prevDisable:false,
        selectedPage:page
      },()=>{this.paginationList()})
    }
  }
  next=()=>{
    this.paginationList()
    let{selectedPage,totalPage}=this.state
    
    if(selectedPage==totalPage&&totalPage!==null){
      this.setState({
        nextDisable:true
      })
    }
    else{
      let page=selectedPage+1
      this.paginationList()
      this.setState({
        nextDisable:false,
        selectedPage:page
      },()=>{this.paginationList()})
    }
    
  }
  componentDidMount(){
    this.paginationList()
    this.prev()
  }
  
  

  render() {
    let{itemList}=this.props
    let {numbers,selectedPage,prevDisable,nextDisable} = this.state
    
    const subLineText = null;
  

    return (
      <>
            {itemList.length>12?<div className="pagination">
            <button className="outline-0 border-0 bg-transparent" disabled={false}><img onClick={this.prev} className={`mr-3 ${prevDisable?'text-muted':''}`} src="/Vector (4).svg"/></button>
                <ul className="d-flex">
                  {numbers.map((number,index) => 
                  <li key={index} className={`pagination-list cursor ${selectedPage==number ? "active" : ""}`}  onClick={() => {this.selectPage(number)}}>
                    {number}
                  </li>
                  )}
                </ul>
            <button className="outline-0 border-0 bg-transparent" disabled={false}><img onClick={this.next}  className={`ml-3 ${nextDisable?' text-muted':''}`} src="/Vector (3).svg"/></button>
            </div>:''}
      </>
    )
  }
};
export default Pagination