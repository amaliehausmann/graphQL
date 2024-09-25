import React from 'react'

export const Modal = ({title, action, episode, producer, director, crawl, released }) => {
  return (
    <div>
        <p onClick={action}>x</p>
        <h1>{title}</h1>
        <h2>Episode {episode}</h2>
        <h3>Produced by: {producer}</h3>
        <h3>Directed by: {director}</h3>
        <h3>Release Date: {released}</h3>
        <h4>Opening Crawl</h4>
        <p>{crawl}</p>
    </div>
  )
}
