import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Products from './pages/Products'
import productImg from './assets/product.png'
import {Routes, Route, Outlet, Link} from 'react-router-dom'
import Checkout from './pages/Checkout'
import Success from './components/Success'

function Layout() {
return (
  <>
    <Header title='DIGIMALL'/>
    <Outlet />
  </>
)
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index path='/' element={
          <Products 
          title='The Complete Bundle' 
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in fermentum posuere urna nec tincidunt.'
          image={[{src: productImg, alt: "Product Image"}]}
          price={19.99} />
        } />
        <Route path='checkout' element={<Checkout />} />
        <Route path='success' element={<Success />} />
       
      </Route>  
      
    </Routes>
  )
}

export default App
