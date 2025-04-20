import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext'
import NavBar from './components/NavBar';
import Favorites from "./pages/Favorites"
import Basket from './pages/Basket'

function App() {

  return (
    <div>
      <ProductProvider>
      <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </main>
      </ProductProvider>
      
    </div>
  )
}

export default App
