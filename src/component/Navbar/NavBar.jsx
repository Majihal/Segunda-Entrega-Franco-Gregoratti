import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
      <AppBar position="static">
        <Toolbar className='container'>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>   
          <Link to="/">White Tower</Link>
          </Typography>
          <ul className='containerUl'>
            <Link to= "/"><li>Home</li></Link>
            <Link to= "/categorias"><li>Categorias</li></Link>
            <Link to= "/contacto"><li>Contacto</li></Link>
          </ul>
          <CartWidget />
        </Toolbar>       
      </AppBar>
  );
}

export default NavBar

