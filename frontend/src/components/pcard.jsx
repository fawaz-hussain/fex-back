import React from 'react'
import './pcard.css'

const ProductCard = ({ id, name, image }) => {
  const imagePath = `../../images/${image}`;
  return (
    <div class="card">
        <div class="card2">
          <p id="prompt">{id}.{name}</p>
        </div>
    </div>
  )
}

export default ProductCard