import React from 'react'
import fexback from '../images/fex-back.png'
import '../App.css'

const Intro = () => {
  return (
    <div className='main'>
        <div className="face">
            <div className="eyes">
                <div className="eye"></div>
                <div className="eye"></div>
            </div>
        </div>
        <img src={fexback} alt='' className='main-page-logo' />
        <div className='pad'></div>
        <div className='main-btn'>
            <button id="btn">Register</button>
            <div className='btn-space'></div>
            <button id="btn">Login</button>
        </div>
    </div>
  )
}

export default Intro