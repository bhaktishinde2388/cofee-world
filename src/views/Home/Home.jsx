import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Carousel from '../../components/Carousel/Carousel.jsx'
import Coffee1 from '../../assets/images/Coffee-1.jpg'
import Coffee2 from '../../assets/images/Coffee-2.webp'
import Coffee3 from '../../assets/images/Coffee-3.jpg'
import Coffee4 from '../../assets/images/Coffee-4.webp'

import "./Home.css"

function Home() {

  const carouselImages = [Coffee1,Coffee2,Coffee3,Coffee4];

  return (
   <>
   <Navbar />
   <Carousel images={carouselImages} interval={3000}/>
   Home
   </>
  )
}

export default Home