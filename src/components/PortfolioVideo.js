import React from 'react'
import { useState, useEffect } from 'react';
import ProjectVideo from "./ProjectVideo";

const video_list = [
    {
        id:1,
        title: 'Virtual Choir',
        sub_title: "USBKS 2020-21 'Flower Village'",
        youtubeid: 'p5lmCPH7Uc4',
        vfile: '',
    },
    {
        id:2,
        title: 'Hunminjeongeum',
        sub_title: "USBKS 2019 Choir",
        youtubeid: '7ukMZl1IQIw',
        vfile: '',
    },
    {
        id:3,
        title: 'Korean Independence Movement Day',
        sub_title: "100th Anniversary Celebration at USBKS",
        youtubeid: 'M_pF5mPFhEw',
        vfile: '',
    },
    {
        id:4,
        title: 'End of School Year Celebration',
        sub_title: "USBKS 2017-18",
        youtubeid: 'HhI3usIypoc',
        vfile: '',
    },
    {
        id:5,
        title: 'USBKS Bellevue Choir 2021-22',
        sub_title: "Market Day Performance",
        youtubeid: 'LNL53tK4zeM',
        vfile: '',
    },
    {
        id:6,
        title: 'USBKS Staff Virual Choir',
        sub_title: "2021-21 End of School Year Celebration",
        youtubeid: 'tiPuFMzGwQg',
        vfile: '',
    },
]
function PortfolioVideo() {

    const [activeV, setActiveV] = useState('vcard1');
    const [playingV, setPlayingV] = useState('');

function vClickHandler(e){
    console.log(e.target.id);
    console.log(e.currentTarget.id);
    setActiveV(e.currentTarget.id);

}

function vPlayHandler(e) {
    console.log(e.target.getAttribute("data-vid"));
    const pBtn = e.target;
    const pVid = pBtn.parentNode.parentNode.id;
    console.log('Video Clicked Parent ID :' + pVid );
    setPlayingV(pVid);
}
useEffect(() => {
    if ( activeV !== playingV) {
        setPlayingV('');
    } else return;
},[activeV]);

return (
<div className="card_container">

{video_list.map(item=>(
<ProjectVideo 
    key={item.id} 
    item={item} 
    activeV={activeV} 
    playingV={playingV} 
    vPlayHandler={vPlayHandler} 
    vClickHandler={vClickHandler}/>))
} 
         

        </div>
  )
}

export default PortfolioVideo