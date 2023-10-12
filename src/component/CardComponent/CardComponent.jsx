import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Link} from "react-router-dom"


export default function ActionAreaCard({item}) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={item.source}
          alt={item.description}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Link to= "/categorias/">
            <Typography variant="body1" color="text.primary" paddingTop="20px" >
              Volver
            </Typography>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
