import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar/NavBar'
import { SearchBar } from '../components/SearchBar/SearchBar'


export const MainLayout = () => {

  const [searchOpen, setSearchOpen] = useState(false);

  function toggleSearchBar(){
    setSearchOpen(prevState => !prevState);
}

  return (
    <>
    <NavBar action={toggleSearchBar}></NavBar>
    <SearchBar toggleSearch={searchOpen} ></SearchBar>
    <Outlet></Outlet>
    </>
  )
}
