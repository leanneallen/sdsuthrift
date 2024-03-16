import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ListingCard from './Listing';

const listings = [
  {
    "title": "Nike Air Max",
    "price": "$120",
    "img": "./src/assets/nike-air-max.jpg"
  },
  {
    "title": "Vintage T-Shirt",
    "price": "$20",
    "img": "./src/assets/vintage-tshirt.jpg"
  },
  {
    "title": "Levi Jeans",
    "price": "$50",
    "img": "./src/assets/levi-jeans.jpg"
  },
  {
    "title": "Silk Blouse",
    "price": "$40",
    "img": "./src/assets/silk-blouse.jpg"
  },
  {
    "title": "Adidas Superstar",
    "price": "$100",
    "img": "./src/assets/adidas-superstar.jpg"
  },
  {
    "title": "Denim Jacket",
    "price": "$80",
    "img": "./src/assets/denim-jacket.jpg"
  },
  {
    "title": "Corduroy Pants",
    "price": "$20",
    "img": "./src/assets/corduroy-pants.jpg"
  },
  {
    "title": "Knit Scarf",
    "price": "$10",
    "img": "./src/assets/knit-scarf.jpg"
  },
  {
    "title": "Leather Boots",
    "price": "$150",
    "img": "./src/assets/leather-boots.jpg"
  },
  {
    "title": "Pleated Skirt",
    "price": "$30",
    "img": "./src/assets/pleated-skirt.jpg"
  },
  {
    "title": "Sweatshirt",
    "price": "$30",
    "img": "./src/assets/sweatshirt.jpg"
  },
  {
    "title": "Tie-Dye Shirt",
    "price": "$25",
    "img": "./src/assets/tie-dye-shirt.jpg"
  },
  {
    "title": "Wool Coat",
    "price": "$100",
    "img": "./src/assets/wool-coat.jpg"
  },
  {
    "title": "Yoga Pants",
    "price": "$20",
    "img": "./src/assets/yoga-pants.jpg"
  },
  {
    "title": "Hoodie",
    "price": "$40",
    "img": "./src/assets/hoodie.jpg"
  },
  {
    "title": "Puffer Jacket",
    "price": "$120",
    "img": "./src/assets/puffer-jacket.jpg"
  },
  {
    "title": "Sweater",
    "price": "$40",
    "img": "./src/assets/sweater.jpg"
  },
  {
    "title": "Turtleneck",
    "price": "$30",
    "img": "./src/assets/turtleneck.jpg"
  },
  {
    "title": "Windbreaker",
    "price": "$80",
    "img": "./src/assets/windbreaker.jpg"
  },
  {
    "title": "Workout Shorts",
    "price": "$20",
    "img": "./src/assets/workout-shorts.jpg"
  }
]

export default function ListingGrid() {
  return (
    <Container maxWidth="lg">
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {listings.map((item, index) => (
        <Grid item xs={2} sm={4} md={3} key={index}>
          <ListingCard key={index} style={{height:'500px'}} title={item.title} price={item.price} img={item.img}/>
        </Grid>
      ))}
    </Grid>
  </Box>
  </Container>
  );
}
