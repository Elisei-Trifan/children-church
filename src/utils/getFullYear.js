export function calculateAgeInDays(birthDateString) {
  // Разбиваем строку на день, месяц и год
  const [day, month, year] = birthDateString.split('.').map(Number)

  // Создаем объект Date
  const birthDate = new Date(year, month - 1, day) // Месяцы начинаются с 0 (январь — 0)

  const today = new Date()

  // Вычисляем разницу в миллисекундах
  const differenceInMilliseconds = today - birthDate

  // Преобразуем миллисекунды в дни
  const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24))

  return days
}

export function calculateAgeInYears(birthDateString) {
  // Разбиваем строку на день, месяц и год
  const [day, month, year] = birthDateString.split('.').map(Number)

  // Создаем объект Date для даты рождения
  const birthDate = new Date(year, month - 1, day)

  const today = new Date()

  // Вычисляем возраст в годах
  let age = today.getFullYear() - birthDate.getFullYear()

  // Проверяем, был ли день рождения в текущем году
  const isBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate())

  // Если день рождения еще не был, уменьшаем возраст на 1
  if (!isBirthdayPassed) {
    age--
  }

  return age
}
