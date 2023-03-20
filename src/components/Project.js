import React from 'react'

export default function Project({item}) {
  return (
    <li>

        <img src={item.imgUrl}  alt={item.title} />

        {/* <div className='detail'><div className='box'>
            <h3><a href={item.deployedUrl} target="_blank">{item.title}</a></h3>
            <a href={item.githublink} target="_blank"><i className="fa-brands fa-github fa-2xl"></i></a>
        </div></div> */}
        
    </li>
  )
}
