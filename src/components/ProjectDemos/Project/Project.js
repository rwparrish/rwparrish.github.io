import React from 'react'

 const project = props => {
  return (
    <div className="">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div>
        <iframe title={props.url} src={props.vid} />
      </div>
    </div>
  )
}

export default project
