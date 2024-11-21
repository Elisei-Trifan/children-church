import React from 'react'
import './style/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Families from './pages/Families'
import Items from './pages/Items'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <div className="navbar_links">
          <div className="links">
            <a className="home" href="/items">
              Главная
            </a>
            <a className="families" href="/families">
              Семьи
            </a>
          </div>
        </div>
        <Routes>
          <Route path="/items" element={<Items />}></Route>
          <Route path="/families" element={<Families />}></Route>
          <Route path="*" element={<Items />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
