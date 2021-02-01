import React from "react";

export class Arrows extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let { navigateID, className, color } = this.props;
    const text1 = "Looking for something in particular, but can't find it?"
    return (
      <>
        <div className={`customArrow ${className}`} id={`${navigateID}Right`} style={{ marginLeft: "10px" }}>
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="51.056px" height="32.495px" viewBox="0 -23 132.056 93.495"
            xmlSpace="preserve" style={{ verticalAlign: "baseline" }} >
            <line x1="5.775" y1="35.392" x2="129.923" y2="35.392" className="st1 one" style={{stroke: color ? color:"black"}}></line>
            <polyline points="130.695,35.748 129.923,34.942 97.085,0.711 97.447,0.358 85.099,12.462 61.345,35.748 " className="st1 two" style={{stroke: color ? color:"black"}}></polyline>
            <polyline points="130.695,35.202 129.923,36.019 97.085,70.778 97.447,71.137 85.099,58.846 61.345,35.202 " className="st1 three" style={{stroke: color ? color:"black"}}></polyline>
          </svg>
        </div>
      </>
    )
  }
};
export default Arrows