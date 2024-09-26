import React from 'react'
import style from './Modal.module.scss'

export const Modal = ({title, action, episode, producer, director, crawl, released }) => {
  return (
    <div className={style.modalContainer}>
        <img onClick={action} src='../src/assets/cross-circle.svg'></img>
        <h1>{title}</h1>
        <h2>Episode {episode}</h2>
        <h3><span>Produced by:</span> <br /> {producer}</h3>
        <h3><span>Directed by:</span> <br /> {director}</h3>
        <h3><span>Release Date:</span> <br /> {released}</h3>
        <h4>Opening Crawl</h4>
        <p>{crawl}</p>
    </div>
  )
}
