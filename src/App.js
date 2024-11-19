/* eslint-disable no-unused-vars */
import ChildrenItem from './components/ChildrenItem'
import Navbar from './components/Navbar'
import TableName from './components/TableName'
import MySelect from './UI/select/MySelect'
import { children as child } from './data/children'
import getFullYear from './utils/getFullYear'
import './style/App.css'
import { useState } from 'react'

function App() {
  const [children, setChildren] = useState(child)
  const [selectedSort, setSelectedSort] = useState('')

  function sortChildren(sort) {
    setSelectedSort(sort)
    if (sort === 'lastname') {
      setChildren([...children].sort((a, b) => a[sort].localeCompare(b[sort])))
    } else if (sort === 'dateOfBirth') {
      setChildren(
        [...children].sort((a, b) =>
          getFullYear(a.dateOfBirth) > getFullYear(b.dateOfBirth) ? 1 : -1
        )
      )
    } else if (sort === 'dateOfBirth2') {
      setChildren(
        [...children].sort((a, b) =>
          getFullYear(a.dateOfBirth) < getFullYear(b.dateOfBirth) ? 1 : -1
        )
      )
    } else if (sort === 'reset') {
      setChildren(child)
    }
  }

  return (
    <>
      <Navbar sortChildren={sortChildren} selectedSort={selectedSort} />
      <TableName />
      <div className="App">
        <ChildrenItem children={children} />
      </div>
    </>
  )
}

export default App
