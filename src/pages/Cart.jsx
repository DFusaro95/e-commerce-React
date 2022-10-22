import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProducts from '../components/cart/CartProducts'
import { getAllProductsCart, setCartGlobal } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'

const Cart = () => {


  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsCart())
  }, [])

  const handlePurchase = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    const data = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }

    axios.post(URL, data, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(setCartGlobal(null))
      })
      .catch(err => console.log(err))

  }

  console.log(cart);
  return (
    <div className='cart'>
      <div className='cart__container'>
        {
          cart?.products.map(product => (
            <CartProducts
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
      <button onClick={handlePurchase}>Buy Now</button>
    </div>
  )
}

export default Cart