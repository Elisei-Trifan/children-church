/* eslint-disable no-unused-vars */
import ChildrenItem from './components/ChildrenItem'
import Navbar from './components/Navbar'
import TableName from './components/TableName'
import { children as child } from './data/children'
import getFullYear from './utils/getFullYear'
import './style/App.css'
import { useState } from 'react'
import ChildFilter from './components/ChildFilter'

function App() {
  const [children, setChildren] = useState(child)
  const [childrenGroup, setChildrenGroup] = useState(child)
  const [selectedSort, setSelectedSort] = useState('')
  const [selectedGroup, setSelectedGroup] = useState('')

  function reset() {
    setChildren(child)
    setSelectedSort('')
    setSelectedGroup('')
  }

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

  function sortGroup(group) {
    setSelectedGroup(group)

    if (group === '0-6') {
      setChildren(
        [...childrenGroup].filter((item) => getFullYear(item.dateOfBirth) < 6)
      )
    } else if (group === '6-8') {
      setChildren(
        [...childrenGroup].filter(
          (item) =>
            getFullYear(item.dateOfBirth) < 8 &&
            getFullYear(item.dateOfBirth) >= 6
        )
      )
    } else if (group === '8-10') {
      setChildren(
        [...childrenGroup].filter(
          (item) =>
            getFullYear(item.dateOfBirth) < 10 &&
            getFullYear(item.dateOfBirth) >= 8
        )
      )
    } else if (group === '10-12') {
      setChildren(
        [...childrenGroup].filter(
          (item) =>
            getFullYear(item.dateOfBirth) < 12 &&
            getFullYear(item.dateOfBirth) >= 10
        )
      )
    } else if (group === '12-14') {
      setChildren(
        [...childrenGroup].filter(
          (item) =>
            getFullYear(item.dateOfBirth) < 14 &&
            getFullYear(item.dateOfBirth) >= 12
        )
      )
    } else if (group === '14-16') {
      setChildren(
        [...childrenGroup].filter(
          (item) =>
            getFullYear(item.dateOfBirth) < 16 &&
            getFullYear(item.dateOfBirth) >= 14
        )
      )
    } else if (group === 'reset') {
      setChildren(child)
    }
  }

  return (
    <>
      <Navbar onClick={reset} />
      <ChildFilter
        sortChildren={sortChildren}
        selectedSort={selectedSort}
        sortGroup={sortGroup}
        selectedGroup={selectedGroup}
      />
      <TableName />
      <div className="App">
        <ChildrenItem children={children} />
      </div>
    </>
  )
}

export default App
