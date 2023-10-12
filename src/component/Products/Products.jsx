import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Link} from "react-router-dom"

import "./Products.css"

export const ProductsItem = ({data} ) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="300"
        image={data.source}
        alt={data.description}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography  variant="h5" color="text.primary">
          {data.price}
        </Typography>
        <Link to={`/categorias/${data.category}`}>
          <Typography variant="body1" color="text.primary" paddingTop= "20px">
          Volver a {data.category}
        </Typography>
        </Link>
       </CardContent>
    </CardActionArea>
  </Card>
);
}

export default ProductsItem 