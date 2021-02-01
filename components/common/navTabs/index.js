import React from "react";
import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll';

export class NavTabs extends React.Component {
  constructor(props) {
    super(props);
  this.state = {  
    linkActive:""
  }
  this.activeTabs = this.activeTabs.bind(this);
}

  activeTabs=()=>{
    var search = window.location.pathname;
    var length = search.length-1;
    this.setState({
      linkActive:search.slice(0,length)
    })
  }

  componentDidMount(){
    this.activeTabs()
  }
  

  render() {
    let {popUp,popUpItem,popUpItemIndex,linkActive} = this.state
    let {list,listName,navTabs} = this.props;
    return (
     <>
      <div className="row justify-content-center navtabs-container">
      {navTabs.map((name, index)=>{
       return <Link href={`${name.link}`}>
                <button name={`${name.name}`}  className={`${name.link==linkActive?"active ":""}nav-btn btn rounded mr-2 mb-2`}>{name.name}</button>
              </Link>
      })}
      </div>
     </>
    )
  }
};
export default NavTabs