import React from 'react';
import { Link } from 'react-router-dom'

export default function Navigation({currentPage, setCurrentPage}) {
  

  return (
    <nav className='navigation'>
      <ul>
        <li className={currentPage==='aboutme'?'on':''}>
          <Link to="/" data-text="&nbsp;About Me" onClick={()=>setCurrentPage('aboutme')}>&nbsp;About Me</Link>
          <span className='arr'></span></li>
        <li className={currentPage==='portfolio'?'on':''}>
          <Link to="/portfolio" data-text="&nbsp;Portfolio"  onClick={()=>setCurrentPage('portfolio')}>&nbsp;Portfolio</Link>
          <span className='arr'></span></li>
        {/* <li className={currentPage==='contact'?'on':''}>
          <Link to="/contact" data-text="&nbsp;Contact" onClick={()=>setCurrentPage('contact')}>&nbsp;Contact</Link>
          <span className='arr'></span></li> */}
        <li className={currentPage==='resume'?'on':''}>
          <Link to="/resume" data-text="&nbsp;Resume" onClick={()=>setCurrentPage('resume')}>&nbsp;Resume</Link>
          <span className='arr'></span></li>
      </ul>
    </nav>
  )
}
