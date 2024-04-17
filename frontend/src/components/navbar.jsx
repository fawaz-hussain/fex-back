import React from 'react'
import Logo from '../images/logo.png'
import '../pages/home.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={Logo} />
        <div className='navbar-btn'>
            <button id="btn">DASHBOARD</button>
            <button id="btn">PRODUCTS</button>
            <button id="btn">REPORT</button>
        </div>
    </div>
  )
}

export default Navbar