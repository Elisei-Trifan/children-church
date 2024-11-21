import React from 'react'

const TableName = ({ num, lastname, age, birth }) => {
  return (
    <>
      <div className="table_name">
        <h5 style={{ paddingLeft: '5px' }}> {num} </h5>
        <h5 className="table_name_lastname">{lastname}</h5>
        <h5 className="table_name_age">{age} </h5>
        <h5>{birth}</h5>
      </div>
    </>
  )
}

export default TableName
