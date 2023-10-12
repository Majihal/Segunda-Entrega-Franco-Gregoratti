import React from 'react'
import NavBar from '../component/Navbar/NavBar'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <NavBar />
      <Link className="Prod" to="categorias"><h1>Ver Categorias</h1>
      </Link>
    </div>
  )
}

export default Home