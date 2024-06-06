import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/footer/Footer'
import { Home } from './pages/home/Home'


function App() {

  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  )
}

export default App
