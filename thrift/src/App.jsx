import * as React from 'react'
import './App.css'
import CategoryGrid from './components/GridCategory'
import Header from './components/Header'
import AdvancedCarousel from './components/Carousel'

function App() {

  return (
    <>
      <Header/>
      <AdvancedCarousel/>
      <CategoryGrid />
      
    </>
  )
}

export default App
