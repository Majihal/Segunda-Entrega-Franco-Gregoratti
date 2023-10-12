import React from 'react'
import ProductsItem from '../component/Products/Products'
import NavBar from '../component/Navbar/NavBar'
import { useParams } from 'react-router-dom';
import {listOfProducts} from  "../../db.js"
import "./ProductList.css"
import ".././component/Products/Products.css"

const ProductsView = () => {
  
  let { userId } = useParams();
  const product = listOfProducts.find(el => userId == el.id)
  return (
    <div>
      <NavBar/>
      <h1 className='Prod'>Producto</h1>
      <div className='Products'>
      <ProductsItem data={product}/>
      </div>
      </div>
  )
}

export default ProductsView