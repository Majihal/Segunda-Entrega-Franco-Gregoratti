import React from 'react'
import "./Products.css"

export const ProductsItem = ({data} ) => {
  return (
    <div className='Prod'>
      <h1>{data.name}</h1>
      <img src={data.source} alt="Buzo-Negro" />
      <p>{data.description}</p>
      <p>{data.price}</p>
    </div>
  )
}


export default ProductsItem 