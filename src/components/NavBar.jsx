import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import logo from '/imagens/logo_bookhub.png'

export default function NavBar() {
  return (
    <header className='navbar'>
        <Link className='link_logo' to="/">
             <img className='logo' src={logo} alt="" />
        </Link>
        <div>
            <Link className='link' to="/queroler">Quero ler</Link>
        </div>
    </header>
  )
}
