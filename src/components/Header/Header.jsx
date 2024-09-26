import React from 'react'
import { NavBar } from '../NavBar/NavBar'
import style from './Header.module.scss'

export const Header = () => {
  return (
    <header className={style.headerStyling}>
        <h1>Jedi Archives</h1>
        <NavBar></NavBar>
    </header>
  )
}
