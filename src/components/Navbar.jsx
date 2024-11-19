import React from 'react'
import MySelect from '../UI/select/MySelect'

const Navbar = ({ selectedSort, sortChildren }) => {
  return (
    <>
      <div className="navbar">
        <p> № </p>

        <p>Фамилия</p>
        <p>Имя</p>
        <div>
          <MySelect
            value={selectedSort}
            onChange={sortChildren}
            defaultValue="Сортировка"
            options={[
              {
                value: 'lastname',
                name: 'По алфавиту',
              },
              {
                value: 'dateOfBirth',
                name: 'От младших к старшим',
              },
              {
                value: 'dateOfBirth2',
                name: 'От старших к младшим',
              },
              {
                value: 'reset',
                name: 'Сбросить фильтры',
              },
            ]}
          ></MySelect>
        </div>
      </div>
    </>
  )
}

export default Navbar
