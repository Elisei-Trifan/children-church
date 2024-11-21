import { calculateAgeInYears } from '../utils/getFullYear'

const childrenTotal = [
  {
    id: 1,
    surname: 'Фомин Вадим',
    lastname: 'Фомина',
    name: 'Елена',
    dateOfBirth: '29.08.2010',
  },
  {
    id: 2,
    surname: 'Фомин Вадим',
    lastname: 'Фомин',
    name: 'Никита',
    dateOfBirth: '30.06.2012',
  },
  {
    id: 3,
    surname: 'Фомин Вадим',
    lastname: 'Фомин',
    name: 'Иван',
    dateOfBirth: '05.05.2014',
  },
  {
    id: 4,
    surname: 'Фомин Вадим',
    lastname: 'Фомин',
    name: 'Кирилл',
    dateOfBirth: '12.03.2018',
  },
  {
    id: 5,
    surname: 'Фомин Вадим',
    lastname: 'Фомин',
    name: 'Тимофей',
    dateOfBirth: '21.06.2019',
  },
  {
    id: 6,
    surname: 'Диденко Сергей',
    lastname: 'Диденко',
    name: 'Мелита',
    dateOfBirth: '11.10.2013',
  },
  {
    id: 7,
    surname: 'Диденко Сергей',
    lastname: 'Диденко',
    name: 'Александр',
    dateOfBirth: '22.06.2015',
  },
  {
    id: 8,
    surname: 'Диденко Сергей',
    lastname: 'Диденко',
    name: 'Ирина',
    dateOfBirth: '23.02.2018',
  },
  {
    id: 9,
    surname: 'Диденко Сергей',
    lastname: 'Диденко',
    name: 'София',
    dateOfBirth: '30.06.2020',
  },
  {
    id: 10,
    surname: 'Диденко Сергей',
    lastname: 'Диденко',
    name: 'Тимофей',
    dateOfBirth: '14.06.2022',
  },
  {
    id: 11,
    surname: 'Диденко Сергей',
    lastname: 'Диденко',
    name: 'Генадий',
    dateOfBirth: '24.10.2024',
  },
  {
    id: 12,
    surname: 'Крутой Станислав',
    lastname: 'Крутой',
    name: 'Яков',
    dateOfBirth: '14.08.2015',
  },
  {
    id: 13,
    surname: 'Крутой Станислав',
    lastname: 'Крутой',
    name: 'Самуил',
    dateOfBirth: '04.06.2018',
  },
  {
    id: 14,
    surname: 'Крутой Станислав',
    lastname: 'Крутая',
    name: 'Римма',
    dateOfBirth: '11.07.2019',
  },
  {
    id: 15,
    surname: 'Крутой Станислав',
    lastname: 'Крутая',
    name: 'Есфирь',
    dateOfBirth: '23.08.2020',
  },
  {
    id: 16,
    surname: 'Крутой Станислав',
    lastname: 'Крутая',
    name: 'Эмма',
    dateOfBirth: '24.11.2021',
  },
  {
    id: 17,
    surname: 'Фонарюк Павел',
    lastname: 'Фонарюк',
    name: 'Эльвира',
    dateOfBirth: '28.10.2013',
  },
  {
    id: 18,
    surname: 'Фонарюк Павел',
    lastname: 'Фонарюк',
    name: 'Виталик',
    dateOfBirth: '04.05.2016',
  },
  {
    id: 19,
    surname: 'Фонарюк Павел',
    lastname: 'Фонарюк',
    name: 'Вита',
    dateOfBirth: '07.04.2018',
  },
  {
    id: 20,
    surname: 'Фонарюк Павел',
    lastname: 'Фонарюк',
    name: 'Инна',
    dateOfBirth: '05.06.2020',
  },
  {
    id: 21,
    surname: 'Фонарюк Павел',
    lastname: 'Фонарюк',
    name: 'Роман',
    dateOfBirth: '11.12.2022',
  },
  {
    id: 22,
    surname: 'Трифан Илья',
    lastname: 'Трифан',
    name: 'Мия',
    dateOfBirth: '26.07.2022',
  },
  {
    id: 23,
    surname: 'Трифан Илья',
    lastname: 'Трифан',
    name: 'Даниил',
    dateOfBirth: '11.10.2024',
  },
  {
    id: 24,
    surname: 'Трифан Елисей',
    lastname: 'Трифан',
    name: 'Людмила',
    dateOfBirth: '11.01.2019',
  },
  {
    id: 25,
    surname: 'Трифан Елисей',
    lastname: 'Трифан',
    name: 'Эдуард',
    dateOfBirth: '06.07.2020',
  },
  {
    id: 26,
    surname: 'Трифан Елисей',
    lastname: 'Трифан',
    name: 'Максим',
    dateOfBirth: '07.08.2022',
  },
  {
    id: 27,
    surname: 'Трифан Елисей',
    lastname: 'Трифан',
    name: 'Марк',
    dateOfBirth: '21.06.2024',
  },
  {
    id: 34,
    surname: 'Трифан Тимофей',
    lastname: 'Трифан',
    name: 'Ева',
    dateOfBirth: '26.11.2020',
  },
  {
    id: 33,
    surname: 'Трифан Тимофей',
    lastname: 'Трифан',
    name: 'Вита',
    dateOfBirth: '30.05.2022',
  },
  {
    id: 32,
    surname: 'Трифан Тимофей',
    lastname: 'Трифан',
    name: 'Мира',
    dateOfBirth: '25.10.2023',
  },
  {
    id: 31,
    surname: 'Ткаченко Валентин',
    lastname: 'Ткаченко',
    name: 'Кармелина',
    dateOfBirth: '24.01.2018',
  },
]

function filterByAgeUnder16(array) {
  return array.filter((obj) => calculateAgeInYears(obj.dateOfBirth) <= 16)
}

export const children = filterByAgeUnder16(childrenTotal)

// function filterFamilies(objects) {
//   return objects
//     .map((obj) => obj.surname) // Извлекаем поле surname
//     .filter((surname, index, self) => self.indexOf(surname) === index) // Убираем дубликаты
//     .map((surname) => ({ surname })) // Возвращаем массив объектов с только полем surname
// }

function filterFamilies(objects) {
  const surnameCount = {} // Для подсчета количества одинаковых фамилий

  // Подсчитываем количество одинаковых фамилий
  objects.forEach((obj) => {
    surnameCount[obj.surname] = (surnameCount[obj.surname] || 0) + 1
  })

  // Создаем новый массив объектов, который будет содержать только уникальные фамилии с полем childQunt
  const uniqueSurnames = Object.keys(surnameCount).map((surname) => {
    return {
      surname: surname,
      childQunt: surnameCount[surname], // Количество одинаковых фамилий
    }
  })

  return uniqueSurnames
}

export const families = filterFamilies(childrenTotal)
