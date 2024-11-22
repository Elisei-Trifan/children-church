import React from 'react'
import { Link } from 'react-router-dom'
import cl from '../style/Statistic.module.css'

const Statistic = () => {
  return (
    <>
      <div className={cl.stat_header}>
        <p> Количество детей на конец года</p>
        <div className={cl.stat_links}>
          <Link to="/home"> Главная</Link>
          <Link className="families" to="/families">
            Семьи
          </Link>
        </div>
      </div>
      <div className={cl.stat}>
        <h5 className={cl.stat_num}> №</h5>
        <h5 className={cl.stat_year}>Год</h5>
        <h5 className={cl.stat_child}>Количество детей </h5>
      </div>
      <div className={cl.stat_table}>
        <p className={cl.stat_table_num}>1.</p>
        <p className={cl.stat_table_year}>2023</p>
        <p className={cl.stat_table_quant}>101 </p>
      </div>
      <div className={cl.stat_table}>
        <p className={cl.stat_table_num}>2.</p>
        <p className={cl.stat_table_year}>2024</p>
        <p className={cl.stat_table_quant}>95 </p>
      </div>
    </>
  )
}

export default Statistic
