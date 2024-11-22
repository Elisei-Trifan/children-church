import { children } from '../data/children'
import { Link } from 'react-router-dom'
import { calculateAgeInYears } from '../utils/getFullYear'

import React from 'react'

const Navbar = ({ onClick }) => {
  return (
    <>
      <div className="navbar">
        {/* <p> Всего детей: {children.length} </p> */}
        <p>
          {`Всего детей: `}
          {
            children.filter(
              (item) => calculateAgeInYears(item.dateOfBirth) < 16
            ).length
          }
        </p>
        <div className="links">
          <Link className="families" to="/families">
            Семьи
          </Link>
          <Link className="statistic" to="/statistic">
            Статистика
          </Link>
        </div>
        <button className="navbar_button" onClick={onClick}>
          Обновить
        </button>
      </div>
    </>
  )
}

export default Navbar
