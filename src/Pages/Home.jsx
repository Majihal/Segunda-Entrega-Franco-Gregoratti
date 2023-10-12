import React from 'react'
import NavBar from '../component/Navbar/NavBar'
import { Link } from 'react-router-dom'
import "../component/Products/Products.css"
import { Typography } from '@mui/material'


const Home = () => {
  return (
    <div>
      <NavBar />
      <Link to="categorias"><Typography className="Prod" variant= "h4">Ver Categorias</Typography>
      </Link>
    </div>
  )
}

export default Home