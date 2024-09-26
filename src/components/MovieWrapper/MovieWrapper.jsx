import React from 'react'
import style from './MovieWrapper.module.scss'

export function MovieWrapper({children}) {
  return (
    <div className={style.movieWrapper}>
        {children}
    </div>
  )
}
