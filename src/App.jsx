import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './Components/SignUp'
import AddToCart from './Components/AddToCart'
import Dashboard from './Components/Dashboard'
import Footer from './Components/Footer'
import HomePage from './Components/HomePage'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Products from './Components/Products'
import UserContextProvider from './Context/UserContextProvider'


function App() {
  return (
    <div>

<UserContextProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/products" element={<Products />} />
        <Route path='/products/:category' element={<Products/>}/>
      </Routes>

      <Footer />
      </UserContextProvider>
    </div>

  )
}

export default App
