import React from "react";
import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll';
import {ListBox} from '../index'

export class ListMenu extends React.Component {
  constructor(props) {
    super(props);
  this.state = {  
  }
}

  
  componentDidMount(){
  }
  

  render() {
    let {popUp,popUpItem,popUpItemIndex} = this.state
    let {list,listName,categoryList} = this.props;
    
    return (
     <>
      {categoryList.length==4&&<div className="row justify-content-center mini-list-container">
        <ListBox categoryList={categoryList}/>
      </div>}
      {categoryList.length>4&&<div className="row justify-content-center list-container">
        <ListBox categoryList={categoryList}/>
      </div>}
      
     </>
    )
  }
};
export default ListMenu