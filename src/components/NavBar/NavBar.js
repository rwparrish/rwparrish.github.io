import React from 'react'
import { Link } from 'react-scroll'

const navBar = () => {
  return (
    <div>
      <Link to="about" rel="stylesheet" href="">About</Link> |&nbsp;
      <Link to="Connect" rel="stylesheet" href="">Connect</Link> |&nbsp;
      <Link to="Projects" rel="stylesheet" href="">Projects</Link>
    </div>
    )
  }


export default navBar;
