/* eslint-disable no-unused-vars */
import React from 'react'
import getFullYear from '../utils/getFullYear'

const ChildrenItem = ({ children }) => {
  return (
    <>
      {children.map((item, index) => (
        <div key={item.id} className="item">
          <h3 style={{ paddingRight: '5vw' }}> {index + 1} </h3>

          <p style={{ width: '200px' }}>
            {item.lastname} {item.name}
          </p>
          <p style={{ paddingRight: '14vw' }}>
            {getFullYear(item.dateOfBirth)}{' '}
          </p>
          <p> {item.dateOfBirth} </p>
        </div>
      ))}
    </>
  )
}

export default ChildrenItem
