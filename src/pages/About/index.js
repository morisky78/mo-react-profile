import React,{useEffect} from 'react'
import "./style.css"

export default function About({currentPage, setCurrentPage}) {
  useEffect(() => {
    // to prevent this function is called on page load
    if ( currentPage !== 'aboutme') {
        setCurrentPage('aboutme')
    } else return;
  },[]);

  return (
    <div className="about">
        
        <img src="/images/profilepic2.png" className='profilepic' alt="Mo Risk Profile" />
        <div className="contentbox">
          <h2>About Me</h2>
          <p>
  I am a web developer living in Redmond, WA. I have a bachelor's degree in Computer Science and worked as a front-end engineer  at a leading web portal company and several start-ups. 
  Although I chose to leave the professional field to focus on my growing family, I continued to remain relevant in my career working as a web developer at a non-profit educational organization. Recently, I finished Web developer Bootcamp course at University of Washington to reinforce responsive web development and modern technologies that I must have bypassed during the time.
          </p>
        </div>
    </div>
  )
}
