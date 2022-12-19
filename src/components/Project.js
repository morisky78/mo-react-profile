import React from 'react'

export default function Project({item}) {
  return (
    <li key={item.id}>
        <a href={item.deployedUrl} target="_blank">
        <img src={item.imgUrl}  alt={item.title} />
        <div className='detail'><div className='box'>
            <h3>{item.title}</h3>
            <a href={item.githublink} target="_blank"><i className="fa-brands fa-github fa-2xl"></i></a>
        </div></div>
        </a>
    </li>
  )
}
