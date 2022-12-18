import React,{useEffect} from 'react'
import "./style.css"

export default function Resume({currentPage, setCurrentPage}) {
  useEffect(() => {
    // to prevent this function is called on page load
    if ( currentPage !== 'resume') {
        setCurrentPage('resume')
    } else return;
  },[]);

  return (
    <div className="resume">
        <h1>This is my Resume</h1>
    </div>
  )
}
