import React from 'react'
import { Link, useParams } from 'react-router-dom';
import {listOfProducts} from  "../../db.js"
import NavBar from '../component/Navbar/NavBar.jsx';
import "./ProductList.css"
import CardComponent from "../component/CardComponent/CardComponent.jsx"
import { Typography } from '@mui/material';

const ProductList = () => {
  let { categoriaSeleccionada } = useParams();

  const productosPorCategoria = listOfProducts.filter(item => item.category == categoriaSeleccionada) 

  return (
    <div>
      <NavBar/>
      <Typography variant= "h4" className='Products'>Lista de Productos</Typography>
      <div className='Products'>
        {productosPorCategoria.map(item => (
        <div>  
        <Link to={"/categorias/buzos/" +  item.id}>
          <CardComponent className= "Products" key={item.id} item={item}/>
        </Link>  
        </div>
      ))}
      </div>
  
    </div>
)}

export default ProductList