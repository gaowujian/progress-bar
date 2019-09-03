import React from "react"
import "./style.scss"
export default (props) =>{
  return (
    <div className="container" >
      <p className="length">{`${props.width}%`}</p>
      <div className={`item ${props.className}`}  style={{"width":`${props.width}%`,"maxWidth":`${props.limit}%`}}></div>
    </div>
  )
}
