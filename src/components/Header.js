import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div class="header">
      <h1>Mo Risk</h1>
    <nav className='navigation'>
        <Link to="/">About Me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
    </nav>
    </div>
  )
}
