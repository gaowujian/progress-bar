import React, { Fragment } from "react"

export default (props) => {
  return (
    <Fragment>
      <button onClick={props.changed}>{props.value}</button>
    </Fragment>
  )
}
