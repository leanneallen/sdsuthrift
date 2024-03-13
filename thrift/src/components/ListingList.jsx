import * as React from 'react';
import Listing from './Listing';
import Grid from '@mui/material/Grid';

const listingArr = [
    {
      "title": "Weird Chair",
      "price": "$32424",
      "img": "./src/assets/BikeChair.png"
    },
    {
      "title": "Wooden Cabinet",
      "price": "$5",
      "img": "./src/assets/Cabinet.png"    
    },
    {
      "title": "Chicken Lamp",
      "price": "$20",
      "img": "./src/assets/ChickenLamp.png"    
    },
    {
      "title": "Spooky Chair",
      "price": "Free",
      "img": "./src/assets/SpookyChair.png"    
    }
  ]

export default function ListingList(){  
return(
    <>
    <Grid container spacing = {{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {listingArr.map((listing, index) => 
      (<>
        <Grid item xs={4} sm={4} md={3} key={index}>
            <Listing key={index} style ={{marginBottom: '64px', width: "200px", height: "345px"}} img = {listing.img} desc = {listing.price} title = {listing.title} />        
        </Grid>
       </>
      ))}
    </Grid> 
    </>
)
}