import { useState } from 'react'


import './App.css'

import Homepage from '../pages/homepage'
import Main from '../pages/main';
import Order from '../pages/order';
import Reservation from '../pages/reservation';
import Review from '../pages/review';

import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}>
          <Route path="reservation" element={<Reservation/>}></Route>
          <Route path="order" element={<Order/>}></Route>
          <Route path="review" element={<Review/>}></Route>
          <Route index element={<Main/>}></Route>
          <Route path="main" element={<Main />} />  
        </Route>
      </Routes>
    </BrowserRouter>
    

  )
}

export default App
