import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';

import Info from '../pages/Info';
import Log from '../pages/Log';
import MainPage from '../pages/Mainpage';
import Report from '../pages/Report';
import Tasks from '../pages/Tasks';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}>
          <Route path="info" element={<Info/>}></Route>
          <Route path="reports" element={<Report/>}></Route>
          <Route path="tasks" element={<Tasks/>}></Route>
          <Route path="logs" element={<Log/>}></Route>
          <Route index element={<Info/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
