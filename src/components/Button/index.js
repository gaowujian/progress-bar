import React, { Fragment } from "react"
import "./style.scss"
export default (props) => {
  return (
    <Fragment>
      <button onClick={props.changed}>{props.value}</button>
    </Fragment>
  )
}
