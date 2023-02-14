import React,{useEffect} from 'react'
import Project from "../../components/Project";
import "./style.css"

const projects = [
    {
        id:1,
        title: 'K-POP Trivia Fever',
        githublink : 'https://github.com/shreyamishra9618/kpop-back-end.git',
        imgUrl: './images/project-kpop.jpg',
        deployedUrl: 'https://kpop-trivia-fever.netlify.app/'
    }
    ,
    {
        id:2,
        title: 'StarKid',
        githublink : 'https://github.com/morisky78/star-kids-app',
        imgUrl: './images/project-starkids.jpg',
        deployedUrl: 'https://star-kids-app.herokuapp.com/'
    }
    ,
    {
        id:3,
        title: 'simple-tech-blog',
        githublink : 'https://github.com/morisky78/simple-tech-blog',
        imgUrl: './images/ss06-posting.png',
        deployedUrl: 'https://mo-tech-blog.herokuapp.com/'
    },
    {
        id:4,
        title: 'Splatoon Trivia Quiz',
        githublink : 'https://github.com/morisky78/splatoon-quiz/',
        imgUrl: './images/project-splatoon.jpg',
        deployedUrl: 'https://morisky78.github.io/splatoon-quiz/'
    },
    {
        id:5,
        title: 'Zoo Animal Game',
        githublink : 'https://github.com/FelishaYuMacias/Zoo-Animal-Game',
        imgUrl: './images/project-zoo.png',
        deployedUrl: 'https://felishayumacias.github.io/Zoo-Animal-Game/'
    },
    {
        id:6,
        title: 'Work Day Scheduler',
        githublink : 'https://github.com/morisky78/workday-scheduler',
        imgUrl: './images/workday-scheduler.jpg',
        deployedUrl: 'https://morisky78.github.io/workday-scheduler/'
    }
]
export default function Portfolio({currentPage, setCurrentPage}) {
 
  useEffect(() => {
    // to prevent this function is called on page load
    if ( currentPage !== 'portfolio') {
        setCurrentPage('portfolio')
    } else return;
  },[]);


  return (
    <div className="portfolio">
        <h2>Portfolio</h2>
        <ul>
          {projects.map(item=>(<Project key={item.id} item={item}/>))} 
        </ul>
    </div>
  )
}
