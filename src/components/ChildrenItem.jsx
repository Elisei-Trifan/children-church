import React from 'react'
import { children } from '../data/children'

const ChildrenItem = () => {
  return (
    <>
      {children.map((item, index) => (
        <div key={item.id} className="item">
          <h3> {index + 1} </h3>

          <p style={{ paddingRight: '15px' }}>
            {item.lastname} {item.name}
          </p>
          <p style={{ paddingRight: '20px' }}> {item.dateOfBirth} </p>
        </div>
      ))}
    </>
  )
}

export default ChildrenItem
