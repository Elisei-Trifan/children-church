import React from 'react'

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className="select"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option className="option" value="">
        {defaultValue}
      </option>
      {options.map((item) => (
        <option className="option" key={item.name} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  )
}

export default MySelect
