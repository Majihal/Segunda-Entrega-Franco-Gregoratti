import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from 'react-router-dom';


export default function ItemListContainer() {
  return (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {['Buzos', 'Zapatillas', 'Remera'].map((value) => (
          <Link to={value.toLowerCase()} key={value}>
            <ListItem key={value} disableGutters >   
              <ListItemButton>
                <ListItemText primary={value} />
                <ListItemIcon>
                  </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
  );
}
