import { useState } from 'react'

import './App.css'

import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Products from '../pages/Products';
import Update from '../pages/Update';
import Order from '../pages/Order';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}>
          <Route path="products" element={<Products/>}></Route>
          <Route path="order" element={<Order/>}></Route>
          <Route path="update" element={<Update/>}></Route>
          <Route index element={<Products/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
