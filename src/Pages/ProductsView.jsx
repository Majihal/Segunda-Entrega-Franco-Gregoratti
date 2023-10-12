import React from 'react'
import ProductsItem from '../component/Products/Products'
import NavBar from '../component/Navbar/NavBar'
import { useParams } from 'react-router-dom';
import {listOfProducts} from  "../../db.js"
import CardComponent from "../component/CardComponent/CardComponent"

const ProductsView = () => {
  
  let { userId } = useParams();
  const product = listOfProducts.find(el => userId == el.id)
  return (
    <div>
      <NavBar/>
      <ProductsItem data={product} />
      </div>
  )
}

export default ProductsView