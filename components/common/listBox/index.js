import React from "react";
import Link from 'next/link'
import {ImgLazyLoad} from '../index'


export class ListBox extends React.Component {
  constructor(props) {
    super(props);
  this.state = {  
    
  }
}

  
  componentDidUpdate(){

  }
  

  render() {
    let {popUp,popUpItem,popUpItemIndex,data} = this.state
    let {list,listName,name,categoryList} = this.props;
    return (
     <>     
      {categoryList.map((name, index)=>{
       return <Link href={`${name.link}`}>
          <div className="blue-box text-center">
            <div className="mt-3 hover-off">
              <ImgLazyLoad src={`/${name.icon}`}/>
              <h4 className="text-dark py-2 text-center">{name.title}</h4>
            </div>
                <div className="box-bg-image">
                  <ImgLazyLoad src={`/${name.icon}`}/>
                </div>
              <div className="hover-on">
                
                <h4 className="text-white text-center">{name.title}</h4>
                <p className="text-white text-center">{name.subTitleText}</p>
              </div> 
            </div>
          </Link>  
        })
      }
     </>
    )
  }
};
export default ListBox