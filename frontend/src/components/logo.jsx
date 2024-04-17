import React from 'react'
import fexback from '../images/fex-back.png'
import './logo.css'
const Logo = () => {
  return (
    <div className='mini-logo-container'>
        <div className='mini-main'>
            <div className="mini-face">
                <div className="mini-eyes">
                    <div className="mini-eye"></div>
                    <div className="mini-eye"></div>
                </div>
            </div>
            <img src={fexback} alt='' className='mini-main-page-logo' />
            <div className='mini-pad'></div>
        </div>
    </div>
  )
}

export default Logo