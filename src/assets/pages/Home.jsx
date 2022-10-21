import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduts from '../../components/home/CardProduts'
import { getAllProducts } from '../../store/slices/products.slice'

const Home = () => {

  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  console.log(products)
  return (
    <main className='home'>
      <div>
        {
          products?.map(product => (
            <CardProduts
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </main>
  )
}

export default Home