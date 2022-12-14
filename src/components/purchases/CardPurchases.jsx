import React from 'react'

const CardPurchases = ({ purchase }) => {

  console.log(purchase)

  return (
    <article style={{ border: '1px solid', marginBottom: '20px' }}>
      <header>{purchase.updatedAt}</header>
      <div>
        {
          purchase.cart.products.map(product => (
            <section key={product.id}>
              <h3>{product.title}</h3>
              <div>{product.productsInCart.quantity}</div>
              <div>$ {product.price}</div>
            </section>
          ))
        }
      </div>
    </article>
  )
}

export default CardPurchases