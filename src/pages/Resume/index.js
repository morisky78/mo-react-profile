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
        
        
      <div className='contentbox hd'>
        <h2>Resume</h2>
        <p>Download my <a href="resume_MoRisk.pdf" download>resume</a></p>
      </div>
        
      
      <div className='contentbox'>
        <h3>Front-end Proficiencies</h3>
        <ul>
          <li>HTML / CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>

      <div className='contentbox'>
        <h3>Back-end Proficiencies</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>JQuery</li>
          <li>MySQL, Sequelize</li>
          <li>PHP</li>
        </ul>
      </div>


    </div>
  )
}
