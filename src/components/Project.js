import React from 'react'

export default function Project({item}) {
  return (
    <li key={item.id}>
        <a href={item.deployedUrl}>
        <img src={item.imgUrl}  alt={item.title} />
        <div className='detail'>
            <h3>{item.title}</h3>
            <div><a href={item.githublink}><i className="fa-brands fa-github fa-2xl"></i></a></div>
        </div>
        </a>
    </li>
  )
}
