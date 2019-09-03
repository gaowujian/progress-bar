import React from "react"
import "./style.scss"
export default (props) =>{
  return (
    <div className="container">
      <div className="item" style={{"width":`${props.width}%`}}>{`${props.width}%`}</div>
    </div>
  )
}

