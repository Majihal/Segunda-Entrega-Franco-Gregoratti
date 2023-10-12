import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

export const CartWidget = () => {
  return (
    <Badge badgeContent={4} color="error">
      <ShoppingCartIcon />
    </Badge>
  )
}
