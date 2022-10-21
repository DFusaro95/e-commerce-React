import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../../components/productId/ProductInfo'
import SimilarProducts from '../../components/productId/SimilarProducts'

const ProductId = () => {

  const [product, setProduct] = useState()

  const { id } = useParams()

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
      .then(res => setProduct(res.data.data.product))
      .catch(err => console.log(err))
  }, [id])

  return (
    <div>
      <ProductInfo
        product={product} />
      <SimilarProducts product={product} />
    </div>

  )
}

export default ProductId