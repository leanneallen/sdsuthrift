import * as React from 'react'
import Header from './components/Header'
import ListingList from './components/ListingList'
import NewListing from './components/SideMenu'

import Box from '@mui/material/Box'
import Pmenu from './components/PtypMenu'
import './App.css'

function App() {
  return (
    <>
    {/* HEADER DIV */}
      <div className ="header">
        <Header />
      </div>
    <Pmenu/>
    

    {/* BODY DIV */}
      {/*
      <div className ="body">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <NewListing/>        
          <ListingList />
        </Box>
      </div>
      */}
    </>
  )
}

export default App;
