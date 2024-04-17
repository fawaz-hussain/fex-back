import React, { useState, useEffect } from 'react'
import './home.css'
import Navbar from '../components/navbar'
import ProductCard from '../components/pcard'
import cardData from '../data/cardData.json'

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (cardData && cardData.cards) {
            setData(cardData.cards);
        }
      }, []);

  return (
    <div className='home-container'>
        <Navbar />
        <div className='dashboard'>
            <div className='dashboard-top'>
                <div className='welcome-name'>
                    Welcome, Fawaz Hussain K T
                </div>
                <div className='search-bar'>
                    <input type='text' placeholder='search a product' />
                </div>
            </div>
            <div className='dashboard-content'>
                {data.map((item) => (
                    <ProductCard key={item.id} id={item.id} name={item.name} image={item.image} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Home