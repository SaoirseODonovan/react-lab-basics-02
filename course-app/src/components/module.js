import React from "react"

const Module = (props) => {
  return (
    <tr>
      <td>{props.description.name}</td>
      <td>{props.description.noLectures}</td>
      <td>{props.description.noPracticals}</td>
    </tr>
  )
}

export default Module