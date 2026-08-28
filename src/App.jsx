import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Categories from './components/sections/Categories'
import CategoryGrid from './components/sections/CategoryGrid'
import HowItWorks from './components/sections/HowItWorks'
import Testimonials from './components/sections/Testimonials'
import CtaBanner from './components/sections/CtaBanner'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <CategoryGrid />
        <HowItWorks />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}

export default App
