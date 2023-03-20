import React,{useEffect} from 'react'
import Project from "../../components/Project";
import PortfolioVideo from '../../components/PortfolioVideo';
import "./style.css"

const projects = [
    {
        id:1,
        title: 'K-POP Trivia Fever',
        githublink : 'https://github.com/shreyamishra9618/kpop-front-end',
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
        title: 'USBKS Fundrasing',
        githublink : '',
        imgUrl: './images/usbks_auction.jpg',
        deployedUrl: 'https://usbks.us/auction/'
    },
    {
        id:5,
        title: 'Splatoon Trivia Quiz',
        githublink : 'https://github.com/morisky78/splatoon-quiz/',
        imgUrl: './images/project-splatoon.jpg',
        deployedUrl: 'https://morisky78.github.io/splatoon-quiz/'
    },
    {
        id:6,
        title: 'Zoo Animal Game',
        githublink : 'https://github.com/FelishaYuMacias/Zoo-Animal-Game',
        imgUrl: './images/project-zoo.png',
        deployedUrl: 'https://felishayumacias.github.io/Zoo-Animal-Game/'
    },
    {
        id:4,
        title: 'simple-tech-blog',
        githublink : 'https://github.com/morisky78/simple-tech-blog',
        imgUrl: './images/ss06-posting.png',
        deployedUrl: 'https://mo-tech-blog.herokuapp.com/'
    },

]
export default function Portfolio({currentPage, setCurrentPage}) {
 
  useEffect(() => {
    // to prevent this function is called on page load
    if ( currentPage !== 'portfolio') {
        setCurrentPage('portfolio')
    } else return;
  },[]);

  function vClickHandler(){
    console.log(this.id)
  }

  return (
    <div className="portfolio">
        <h2>Portfolio</h2>
        <div className="work_cat_navi">
           <a href="#webdev">Web Development</a>
           <a href="#publish">Publishing</a>
           <a href="#video">Video Creation</a>
           <a href="#graphic">Marketing Design</a>
        </div>

        <section id="webdev"> 
        <h3>Web Development</h3>       
        <ul>
          {projects.map(item=>(<Project key={item.id} item={item}/>))} 
        </ul>
        </section>

        <section id="graphic">
        <h3>Marketing Design</h3>   
            <ul>
                <li><a href="##"><img src="./images/usbks_brochure_seattle.jpg" /></a></li>
                <li><a href="##"><img src="./images/poster_2018.jpg" /></a></li>
                <li><a href="##"><img src="./images/usbks_ad.jpg" /></a></li>
            </ul>
        </section>

        <section id="publish">
        <h3>Publishing</h3>   
            <ul>
                <li><a href="" target="_blank">
                <img src="./images/yearbook_19-20.jpg"  alt="USBKS yearbook 2019-20" />
                </a></li>
                <li><a href="" target="_blank">
                <img src="./images/yearbook_20-21.jpg"  alt="USBKS yearbook 2019-20" />
                </a></li>
                <li><a href="" target="_blank">
                <img src="./images/yearbook_21-22.jpg"  alt="USBKS yearbook 2019-20" />
                </a></li>
            </ul>
        </section>

        <section id="video">
        <h3>Video Creation</h3>   
        <PortfolioVideo />

        
        </section>


    </div>
  )
}
