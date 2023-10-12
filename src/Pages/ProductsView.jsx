import React from 'react'
import ProductsItem from '../component/Products/Products'
import NavBar from '../component/Navbar/NavBar'
import { useParams } from 'react-router-dom';
import {listOfProducts} from  "../../db.js"
import "./ProductList.css"
import ".././component/Products/Products.css"
import { Typography } from '@mui/material';

const ProductsView = () => {
  
  let { userId } = useParams();
  const product = listOfProducts.find(el => userId == el.id)
  return (
    <div>
      <NavBar/>
      <Typography variant= "h4" className='Prod'>Producto</Typography>
      <div className='Products'>
      <ProductsItem data={product}/>
      </div>
      </div>
  )
}

export default ProductsView