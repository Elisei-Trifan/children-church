/* eslint-disable no-unused-vars */
import ChildrenItem from './components/ChildrenItem'
import Navbar from './components/Navbar'
import TableName from './components/TableName'
import MySelect from './UI/select/MySelect'
import { children } from './data/children'
import getFullYear from './utils/getFullYear'
import './style/App.css'
import { useState } from 'react'

function App() {
  const child = [
    {
      id: 1,
      surname: 'Фомин Вадим',
      lastname: 'Фомина',
      name: 'Елена',
      dateOfBirth: '29.08.2010',
    },
    {
      id: 6,
      surname: 'Диденко Сергей',
      lastname: 'Диденко',
      name: 'Мелита',
      dateOfBirth: '11.10.2013',
    },
    {
      id: 12,
      surname: 'Крутой Станислав',
      lastname: 'Крутой',
      name: 'Яков',
      dateOfBirth: '14.08.2015',
    },
  ]

  const [children, setChildren] = useState(child)
  const [selectedSort, setSelectedSort] = useState('')

  function sortChildren(sort) {
    setSelectedSort(sort)
    if (sort === 'lastname') {
      setChildren([...children].sort((a, b) => a[sort].localeCompare(b[sort])))
    } else if (sort === 'dateOfBirth') {
      setChildren(
        [...children].sort((a, b) =>
          getFullYear(a.dateOfBirth) < getFullYear(b.dateOfBirth) ? 1 : -1
        )
      )
    } else if (sort === 'dateOfBirth2') {
      setChildren(
        [...children].sort((a, b) =>
          getFullYear(a.dateOfBirth) > getFullYear(b.dateOfBirth) ? 1 : -1
        )
      )
    } else if (sort === 'reset') {
      setChildren(child)
    }
  }

  return (
    <>
      <Navbar />
      <TableName />
      <div className="App">
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
        <ChildrenItem children={children} />
      </div>
    </>
  )
}

export default App
