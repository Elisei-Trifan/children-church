import React from 'react'
import './style/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Families from './pages/Families'
import Items from './pages/Items'
import Statistic from './pages/Statistic'

function App() {
  return (
    <>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Routes>
          <Route path="/items" element={<Items />}></Route>
          <Route path="/families" element={<Families />}></Route>
          <Route path="/statistic" element={<Statistic />}></Route>
          <Route path="*" element={<Items />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
