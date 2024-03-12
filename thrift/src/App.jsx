import * as React from 'react';
import ButtonUsage from './components/ButtonUsage.jsx';
import Listing from './components/Listing'
import Header from './components/Header'
import './App.css'

const listingArr = [
  {
    "title": "Weird Chair",
    "desc": "It's weird and I don't like it. Buy it please.",
    "img": "./src/assets/BikeChair.png"
  },
  {
    "title": "Wooden Cabinet, Used",
    "desc": "Good cabinet. Still works fine.",
    "img": "./src/assets/Cabinet.png"    
  },
  {
    "title": "Chicken Lamp",
    "desc": "Cool chicken lamp :)",
    "img": "./src/assets/ChickenLamp.png"    
  },
  {
    "title": "Spooky Chair",
    "desc": "Found it last week in the abyss.",
    "img": "./src/assets/SpookyChair.png"    
  }
]

function App() {
  return (
    <>
      <div className ="header">
        <Header />
      </div>

      <div className ="body">
        {listingArr.map((listing, index) => (
          <Listing position = "flex" key={index} style ={{marginBottom: '64px', width: "200px", height: "345px"}} img = {listing.img} desc = {listing.desc} title = {listing.title} />
        ))}
            
      </div>
    </>
  )
}

export default App
