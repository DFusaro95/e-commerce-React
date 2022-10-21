import React, { useState } from 'react'

const ProductInfo = ({ product }) => {

  const [counter, setCounter] = useState(1)

  const handleMinus = () => {
    if (counter - 1 > 0) {
      setCounter(counter - 1)
    }
  }

  const handlePlus = () => {
    setCounter(counter + 1)
  }

  return (
    <article className='product-info'>
      <h2 className='product-info__title'>{product?.title}</h2>
      <p className="product-info__description">{product?.description}</p>
      <footer className='product-info__footer'>
        <div className='product-info__price-container'>
          <span className='product-info__price-label'>price</span>
          <span className='product-info__price-nunber'>{product?.price}</span>
        </div>
        <div className='product-info__quantity__container'>
          <h3 className='product-info__quantity_label'>Quantity</h3>
          <div className="counter">
            <button onClick={handleMinus} className='counter__minus'>-</button>
            <p className='counter__number'>{counter}</p>
            <button onClick={handlePlus} className='counter__plus'>+</button>
          </div>
        </div>
      </footer>
    </article>
  )
}

export default ProductInfo