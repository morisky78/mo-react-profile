import React from 'react'
import Navigation from '../Navigation'
import './style.css'

export default function Header({currentPage, setCurrentPage}) {
  return (
    <div className="header">
      <h1>Mo <span>Risk</span></h1>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  )
}
