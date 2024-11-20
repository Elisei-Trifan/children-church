import { children } from '../data/children'

import React from 'react'

const Navbar = ({ onClick }) => {
  return (
    <>
      <div className="navbar">
        <p> Всего детей: {children.length} </p>
        <button className="navbar_button" onClick={onClick}>
          Обновить
        </button>
      </div>
    </>
  )
}

export default Navbar
