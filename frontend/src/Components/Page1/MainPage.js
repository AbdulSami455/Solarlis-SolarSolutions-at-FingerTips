import React from 'react'
import Navbar from './Navbar'
import HeroSec from './HeroSec'
import Plans from './Plans'
import Products from './Products'
import Blogs from './Blogs'
import Footer from './Footer'

function MainPage() {
  return (
    <div>
      <Navbar />
      <HeroSec />
      <Plans />
      <Products />
      <Blogs />
      <Footer />
    </div>
  )
}

export default MainPage