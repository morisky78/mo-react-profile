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
          Hello, my name is Mo. I'm a front-end web developer living in Redmond, WA. </p>
<p>With a degree in Computer Science and a foundation in Graphic Design, I'm passionate about creating elegant user interfaces, optimizing code for seamless experiences, and learning new web technologies. </p>
<p>I'm also a wife and mom of three wonderful children. I love staying active through various outdoor activities and exercises. </p>
<p>Thank you for stopping by, and I look forward to connecting with you! </p>

<ul>
  <li>Email: <a href = "mailto: moran.risk78@gmail.com">moran.risk78@gmail.com</a></li>
  <li>LinkedIn: <a href = "https://www.linkedin.com/in/mo-risk/" target='_blank'>linkedin.com/in/mo-risk/</a></li>
  <li>GitHub: <a href = "https://github.com/morisky78" target='_blank'>github.com/morisky78</a></li>
</ul>



        </div>
    </div>
  )
}
