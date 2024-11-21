import React from 'react'
import MySelect from '../UI/select/MySelect'

const ChildFilter = ({
  selectedSort,
  sortChildren,
  sortGroup,
  selectedGroup,
}) => {
  return (
    <div className="childFilter">
      <div className="childFilter_item">
        <h2> Сортировка</h2>
        <MySelect
          value={selectedSort}
          onChange={sortChildren}
          defaultValue=""
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
      <div className="childFilter_item">
        <h2> Группы</h2>
        <MySelect
          value={selectedGroup}
          onChange={sortGroup}
          defaultValue=""
          options={[
            {
              value: '0-6',
              name: 'Младшая группа',
            },
            {
              value: '6-8',
              name: 'Элина, Анита',
            },
            {
              value: '8-10',
              name: 'Виталик, т. Тамара',
            },
            {
              value: '10-12',
              name: 'Тима, Инна',
            },
            {
              value: '12-14',
              name: 'Сережа, Лина',
            },
            {
              value: '14-16',
              name: 'Елисей, т.Аня',
            },
            {
              value: 'reset',
              name: 'Сбросить фильтры',
            },
          ]}
        ></MySelect>
      </div>
    </div>
  )
}

export default ChildFilter
