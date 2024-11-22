import React from 'react'
import { Link } from 'react-router-dom'
import { families } from '../data/children'
import cl from '../style/Families.module.css'
const Families = () => {
  return (
    <>
      <div className={cl.header}>
        <p className={cl.header_families}> Всего семей: {families.length} </p>
        <Link to="/home">Главная</Link>
        <Link className="statistic" to="/statistic">
          Статистика
        </Link>
      </div>
      <div className={cl.table_name_fam}>
        <h5 className={cl.table_name_fam_num}> №</h5>
        <h5 className={cl.table_name_family}>Семья</h5>
        <h5 className={cl.table_name_child}>Количество детей </h5>
      </div>
      <div className={cl.family_items}>
        {families.map((item, index) => (
          <div key={item.surname} className={cl.family}>
            <p>{index + 1}.</p>
            <p className={cl.family_name}>{item.surname}</p>
            <p className={cl.family_qunt}> {item.childQunt}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Families
