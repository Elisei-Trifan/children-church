import React from 'react'
import { children } from '../data/children'

const ChildrenItem = () => {
  return (
    <>
      {children.map((item) => (
        <div key={item.id} className="item">
          <h3> {item.id} </h3>

          <p>
            {item.lastname} {item.name}{' '}
          </p>
          <p> {item.dateOfBirth} </p>
        </div>
      ))}
    </>
  )
}

export default ChildrenItem
