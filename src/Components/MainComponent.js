import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection/HeroSection'
import Categories from './Categories'
import ProductsSlider from './ProductsSlider'

const MainComponent = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Categories/>
        <ProductsSlider/>
    </div>
  )
}

export default MainComponent