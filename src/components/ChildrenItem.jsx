/* eslint-disable no-unused-vars */
import React from 'react'
import { calculateAgeInYears } from '../utils/getFullYear'

const ChildrenItem = ({ children }) => {
  return (
    <>
      {children.map((item, index) => (
        <div key={item.id} className="item">
          <p className="item_h3">{index + 1}.</p>

          <p style={{ width: '200px' }}>
            {item.lastname} {item.name}
          </p>
          <p className="item_age">{calculateAgeInYears(item.dateOfBirth)} </p>
          <p className="item_birth"> {item.dateOfBirth} </p>
        </div>
      ))}
    </>
  )
}

export default ChildrenItem
