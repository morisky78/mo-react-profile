import React,{useEffect, useState} from 'react'
import Project from "../../components/Project";
import PortfolioVideo from '../../components/PortfolioVideo';
import { Graphics, Publishing} from '../../media';
import Iframe from 'react-iframe'
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
        deployedUrl: 'https://usbks.us/auction/index.php?tab=auc_rsvp'
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

const[activeCat, setActiveCat] = useState('web');
const [graphicFile, setGraphicFile] =  useState(null);
const [pubFile, setPubFile] =  useState(null);

const changeCat = (event, newcat) => {
    const {target} = event;
    setActiveCat(newcat);
}



  return (
    <div className="portfolio">
        <h2>Portfolio</h2>
        <nav className="work_cat_navi">
            <ul>
            {/* <li onClick={event=>changeCat(event, 'all')}  className={activeCat==='all'?'on':''}>
                <i className="fa fa-list"></i>
                <span>All</span></li> */}
            <li onClick={event=>changeCat(event, 'web')}  className={activeCat==='web'?'on':''}>
                <i className="fa fa-laptop"></i><span>Web Development</span></li>
            <li onClick={event=>changeCat(event, 'graphic')}  className={activeCat==='graphic'?'on':''}>
                <i className="fa fa-paint-brush"></i><span>Marketing Design</span></li>
            <li onClick={event=>changeCat(event, 'video')}  className={activeCat==='video'?'on':''}>
                <i className="fa fa-video-camera"></i><span>Video Creation</span></li>
            <li onClick={event=>changeCat(event, 'publish')}  className={activeCat==='publish'?'on':''}>
                <i className="fa fa-book"></i><span>Publishing</span></li>

            </ul>
        </nav>

{(activeCat==='web' || activeCat==='all')  && (
        <section id="webdev"> 
            <h3>Web Development</h3>       
            <ul>
                {projects.map(item=>(<Project key={item.id} item={item}/>))} 
            </ul>
        </section>
        ) }

{(activeCat==='publish' || activeCat==='all') && (
        <section id="publish">
        <h3>Publishing</h3>   
            <div className='graphic-container'>
            {  
                Publishing.map((file, index) => (
                    <div className='media' key={index} >
                        <img src={file.url} alt="" />
                        <a href={file.link} target="_blank" className='exlink'><i className="fa fa-external-link fa-2x"></i></a>
                    </div>
                ))
            }
            </div>

        </section>


        ) }      

{(activeCat==='video' || activeCat==='all')&& (
    <section id="video">
        <h3>Video Creation</h3>   
        <PortfolioVideo />
    </section> 
) }  

{(activeCat==='graphic' || activeCat==='all') && (
    <section id="graphic">
    <h3>Marketing Design</h3>   
    <div className='graphic-container'>
        {  
            Graphics.map((file, index) => (
                <div className='media' key={index} onClick={()=>setGraphicFile(file)}>
                    {
                        file.type === 'image'
                        ? <img src={file.url} alt="" />
                        : <video src ={file.url} muted/>
                    }
                </div>
            ))
        }

    </div>
    <div className='popup-graphic' style={{display: graphicFile ? 'block': 'none'}}>
        <span onClick={()=> setGraphicFile(null)}>&times;</span>
        {
            graphicFile?.type === 'video'
            ? <video src={graphicFile?.url} muted autoPlay controls />
            : <img src={graphicFile?.url} />
        }
    </div>
    </section>
) }  


    </div>
  )
}
