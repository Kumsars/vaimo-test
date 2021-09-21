import * as React from "react";
const image = (props) => {
    return(
      
        <div className="image">
         <img src={`${props.img}`}></img>
        </div>
    )
}
export default image;