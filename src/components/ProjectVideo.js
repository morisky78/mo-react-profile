import React from 'react'


export default function ProjectVideo({item, activeV, playingV, vPlayHandler, vClickHandler}) {

let cardClassName = (activeV==='vcard'+item.id ? 'card active':'card');
let videoHTML;
if ( playingV=='vcard'+item.id ) {
    if (item.vfile) videoHTML = `<video controls autoplay><source src="assets/images/${item.vfile}" type="video/mp4">Your browser does not support the video tag.</video>`;
    else 
    videoHTML = `<iframe src="https://www.youtube.com/embed/${item.youtubeid}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
} else {
    videoHTML = '';
}


return (
<div className={cardClassName} id={'vcard'+item.id} onClick={vClickHandler} >
    <div id={item.youtubeid ? 'video_'+item.youtubeid : 'video_'+item.id } className="vplayer" dangerouslySetInnerHTML={{ __html: videoHTML }}>

    </div>
    <div className={playingV==='vcard'+item.id ? 'label hidden':'label'}>
        <span className="icon" data-vid={item.youtubeid} onClick={vPlayHandler}></span>
        <div className="info">
            <div className="main">{item.title}</div>
            <div className="sub">{item.sub_title}</div>                        
        </div>
    </div>
</div>
  )
}
