import * as React from 'react'
import './App.css'
import Header from './components/Header'
import ListingGrid from './components/GridListing'
import ResponsiveDrawer from './components/Filters'
import Box from '@mui/material/Box'

function App() {

  return (
    <>
      <Box sx={{ display: 'flex', marginTop: '64px' }}>
        <Header/>
        <ResponsiveDrawer/>
        <ListingGrid/>
      </Box>
      
    </>
  )
}

export default App
