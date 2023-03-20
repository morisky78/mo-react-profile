import React from 'react'
import { useState, useEffect } from 'react';


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

            <div className={activeV==='vcard1' ? 'card active':'card'} id="vcard1" onClick={vClickHandler}>
                <div id="video_p5lmCPH7Uc4" className="vplayer">
{ playingV=='vcard1' ? (
    <iframe src="https://www.youtube.com/embed/p5lmCPH7Uc4?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
):''}

                </div>
                <div className={playingV==='vcard1' ? 'label hidden':'label'}>
                    <span className="icon" data-vid="p5lmCPH7Uc4" onClick={vPlayHandler}></span>
                    <div className="info">
                        <div className="main">Virtual Choir</div>
                        <div className="sub">USBKS 2020-21 'Flower Village'</div>                        
                    </div>
                </div>
            </div>
            <div className={activeV==='vcard2' ? 'card active':'card'} id="vcard2" onClick={vClickHandler}>
                <div id="video_2" className="vplayer"></div>
                <div className={playingV==='vcard2' ? 'label hidden':'label'}>
                    <span className="icon" data-vid='2' data-vfile="mv_hunmin.mp4" onClick={vPlayHandler}></span>
                    <div className="info">
                        <div className="main">Hunminjeongeum</div>
                        <div className="sub">USBKS 2019 Choir</div>
                    </div>
                </div>
            </div>

            <div className={activeV==='vcard3' ? 'card active':'card'} id="vcard3" onClick={vClickHandler}>
                <div id="video_3" className="vplayer"></div>
                <div className={playingV==='vcard3' ? 'label hidden':'label'}>
                    <span className="icon" data-vid='3' data-vfile="mv_indi100_2019.mp4" onClick={vPlayHandler}></span>
                    <div className="info">
                        <div className="main">Korean Independence Movement Day</div>
                        <div className="sub">100th Anniversary Celebration at USBKS</div>
                    </div>
                </div>
            </div>

            <div className={activeV==='vcard4' ? 'card active':'card'} id="vcard4" onClick={vClickHandler}>
                <div id="video_HhI3usIypoc" className="vplayer"></div>
                <div className={playingV==='vcard4' ? 'label hidden':'label'}>
                    <span className="icon" data-vid="HhI3usIypoc"></span>
                    <div className="info">
                        <div className="main">End of School Year Celebration</div>
                        <div className="sub">USBKS 2017-18 </div>
                    </div>
                </div>
            </div>

            <div className={activeV==='vcard5' ? 'card active':'card'} id="vcard5" onClick={vClickHandler}>
                <div id="video_LNL53tK4zeM" className="vplayer"></div>
                <div className={playingV==='vcard5' ? 'label hidden':'label'}>
                    <span className="icon" data-vid="LNL53tK4zeM"></span>
                    <div className="info">
                        <div className="main">USBKS Bellevue Choir 2021-22</div>
                        <div className="sub">Market Day Performance</div>
                    </div>
                </div>
            </div>

            <div className={activeV==='vcard6' ? 'card active':'card'} id="vcard6" onClick={vClickHandler}>
                <div id="video_tiPuFMzGwQg" className="vplayer"></div>
                <div  className={playingV==='vcard6' ? 'label hidden':'label'}>
                    <span className="icon" data-vid="tiPuFMzGwQg"></span>
                    <div className="info">
                        <div className="main">USBKS Staff Virual Choir</div>
                        <div className="sub">2021-21 End of School Year Celebration</div>
                    </div>
                </div>
            </div>
           

        </div>
  )
}

export default PortfolioVideo