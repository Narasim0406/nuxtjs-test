import React from "react";
import Link from 'next/link'
import {ImgLazyLoad} from './../../common/index'
import { Container,Row,Col } from 'reactstrap';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss'
import { render } from 'react-dom'
import { ReactSVG } from 'react-svg'
import Canvg from 'canvg';

export class IconShowcaseDownload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          displayColorPicker: false,
          color: {
            r: '0',
            g: '0',
            b: '0',
            a: '100',
          },
          hexColor:'#000'
       
        }
        this.downloadSVG=this.downloadSVG.bind(this);
    }
    changeColor=(svg)=>{
      console.log("change happened")
      // let svg=document.getElementById('svg-object').contentDocument.children[0].children; 
      // for(var i=0;i<=svg.length;i++){
      //   svg[i].setAttribute("stroke","#1212")
      // }
      // svg[1].setAttribute("stroke", "#1212");
      // console.log(svg[1],"CHANGED CONTENT")
    }
    handleClick = () => {
      this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };
    changeText=()=>{
      console.log("CHANGES WORK")
    }
    downloadSVG=()=>{
      let{iconType}=this.props
      var svgData = document.querySelector('.svg-class-name').outerHTML;
      var svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
      var svgUrl = URL.createObjectURL(svgBlob);
      var downloadLink = document.createElement("a");
      downloadLink.href = svgUrl;
      downloadLink.download = this.props.mainIcon.link.name+"."+iconType.toLowerCase();
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
    handleClose = () => {
      this.setState({ displayColorPicker: false })
    };
  
    handleChange = (color) => {
      this.setState({ color: color.rgb,hexColor:color.hex })
    };
    
    componentDidMount(){
     
    }
  
  

  render() {
    let {category_list,percentage,color,hexColor} = this.state;
    let {mainIcon, list,iconSize,iconType} = this.props
    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        textColor:{
          color:`rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
          top:'3rem',
          left:'90%'
        },
        cover: {
          position: 'fixed',
          top: '1rem',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });
    return (
      <>
        <div>
            <Container fluid className=" rounded py-3">
            <div className="d-flex justify-content-end align-items-center">
                {/* <div className="mr-2" style={ styles.swatch } onClick={ this.handleClick }>
                  <div style={ styles.color } />
                </div> */}
              { this.state.displayColorPicker ? <div style={ styles.popover }>
                <div style={ styles.cover } onClick={ this.handleClose }/>
                <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
              </div> : null }
                <i style={ styles.textColor } onClick={ this.handleClick } class="fas fa-palette pallete-icon"></i>
            </div>    
                      <Row className="align-items-center ">
                        <div className="text-center main-image">
                          <ReactSVG
                            src={mainIcon.link.link}
                            afterInjection={(error, svg) => {
                              if (error) {
                                console.error(error)
                                return
                              }
                             
                              var temp=svg.children
                              for(var i=1;i<temp.length;i++){
                                temp[i].setAttribute("fill",hexColor)
                              }
                              console.log(temp,"childerenClass")
                              // console.log(svg,"SVG CHANGE")
                            }}
                            beforeInjection={(svg) => {
                              svg.classList.add('svg-class-name')
                              svg.setAttribute('width', iconSize)
                              svg.setAttribute('height', iconSize)
                            }}
                            evalScripts="always"
                            fallback={() => <span>Error!</span>}
                            loading={() => <span>Loading</span>}
                            renumerateIRIElements={false}
                            wrapper="span"
                            className="wrapper-class-name"
                            onClick={() => {
                              console.log('wrapper onClick')
                            }}
                          />
                        </div>  
                      </Row>
                {/* <button onClick={this.downloadSVG}>Download Sample</button> */}
                {/* <Row className="justify-content-center px-5" xs={3} md={3} lg={3}>
                {(list.slice(mainIcon.id+1,mainIcon.id+4)).map((name, index)=>{
                     return <Col>
                       <img src={name.link}/>
                    </Col>
                      })}
                </Row>     */}
            </Container>  
        </div>  
      </>
    )
  }
};
export default IconShowcaseDownload