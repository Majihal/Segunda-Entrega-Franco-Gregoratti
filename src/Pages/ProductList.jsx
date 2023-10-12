import React from 'react'
import { Link, useParams } from 'react-router-dom';
import {listOfProducts} from  "../../db.js"
import NavBar from '../component/Navbar/NavBar.jsx';
import "./ProductList.css"
import CardComponent from "../component/CardComponent/CardComponent.jsx"

const ProductList = () => {
  let { categoriaSeleccionada } = useParams();

  const productosPorCategoria = listOfProducts.filter(item => item.category == categoriaSeleccionada) 

  return (
    <div>
      <NavBar/>
      <h1 className='Products'>Lista de Productos</h1>
      <div className='Products'>
        {productosPorCategoria.map(item => (
        <div className='Section'>  
        <Link to={"/categorias/buzos/" +  item.id}>
          <CardComponent className= "Products" key={item.id} item={item}/>
        </Link>  
        </div>
      ))}
      </div>
  
    </div>
)}

export default ProductList



// const ProductList = () => {
//   let { categoriaSeleccionada } = useParams();

//   const productosPorCategoria = listOfProducts.filter(item => item.category == categoriaSeleccionada) 

//   return (
   
//     <div className='Products'>
//       <NavBar/>
//       <h1>Lista de Productos</h1>
//       {productosPorCategoria.map(item => (
//         <div key={item.id}>
//           <p >{item.name}</p>
//           <Link to={"/categorias/buzos/" +  item.id}>ver más</Link>
//         </div>
//       ))}
//     </div>
//   )
// }