/* eslint-disable no-unused-vars */
import React from 'react'
import { calculateAgeInYears } from '../utils/getFullYear'

const ChildrenItem = ({ children }) => {
  return (
    <>
      {children.map((item, index) =>
        calculateAgeInYears(item.dateOfBirth) < 16 ? (
          <div key={item.dateOfBirth} className="item">
            <p className="item_h3">{index + 1}.</p>

            <p className="item_name">
              {item.lastname} {item.name}
            </p>
            <p className="item_age">{calculateAgeInYears(item.dateOfBirth)} </p>
            <p className="item_birth"> {item.dateOfBirth} </p>
          </div>
        ) : (
          <div key={item.dateOfBirth} className="item_red">
            <p className="item_h3">{index + 1}.</p>

            <p className="item_name">
              {item.lastname} {item.name}
            </p>
            <p className="item_age">
              {calculateAgeInYears(item.dateOfBirth)} (молодежь)
            </p>
            <p className="item_birth"> {item.dateOfBirth} </p>
          </div>
        )
      )}
    </>
  )
}

export default ChildrenItem
