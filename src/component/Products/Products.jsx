import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

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
        <Typography variant="body" color="text.secondary">
        {data.category}
        </Typography>
       </CardContent>
    </CardActionArea>
  </Card>
);
}

export default ProductsItem 