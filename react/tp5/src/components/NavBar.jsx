import React from 'react'
import logo from '../assets/logo.png'
import './styles/NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={logo}/>
        </div>
        <div className="links">
            <a href="/">Home</a>
            <a href="/cargar">Agregar personaje</a>
            <a href="/marvel">Marvel</a>
            <a href="/dc">DC</a>
        </div>
    </div>
  )
}

export default NavBar