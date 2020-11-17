import React from 'react'
import { Link } from 'react-scroll'

const navBar = () => {
  return (
    <div>
      <Link to="about" rel="stylesheet" href="">About</Link> |&nbsp;
      <Link to="connect" rel="stylesheet" href="">Connect</Link> |&nbsp;
      <Link to="projects" rel="stylesheet" href="">Projects</Link>
    </div>
    )
  }


export default navBar;
