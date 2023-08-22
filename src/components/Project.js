import React from 'react'

export default function Project({item}) {
  return (
    <li>

        <img src={item.imgUrl}  alt={item.title} />

        <div className='detail'><div className='box'>
            <h4><a href={item.deployedUrl} target="_blank">{item.title}</a></h4>
            <a href={item.deployedUrl} target="_blank" className='exlink'><i className="fa fa-external-link fa-2x"></i></a>
            { 
              item.githublink !== ''
              ? <a href={item.githublink} target="_blank"><i className="fa-brands fa-github fa-2xl"></i></a>
              : <span></span>
            }
        </div></div>
        
    </li>
  )
}
