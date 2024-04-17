import React, { useState, useEffect } from 'react'
import './home.css'
import './product.css'
import Navbar from '../components/navbar'
import ProductCard from '../components/pcard'

const Product = () => {
  return (
    <div className='home-container'>
        <Navbar />
        <div className='dashboard'>
            <div className='dashboard-top'>
                <div className='welcome-name'>
                    Welcome, name
                </div>
                <div className='search-bar'>
                    <input type='text' placeholder='search a product' />
                </div>
            </div>
            <div className='product-container'>
                <div className='product-image'>
                    <ProductCard />
                </div>
                <div className='product-info'>
                    <div className='product-name'>
                        <h1>Diamond Necklace</h1></div>
                        <div className='review-section'>
                            <div className='positive-review'>
                                positive
                            </div>
                            <div className='negative-review'>
                                negative
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product