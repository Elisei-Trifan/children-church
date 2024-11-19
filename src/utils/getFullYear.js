export default function getAge(dateString) {
  const day = parseInt(dateString.substring(0, 2))
  const month = parseInt(dateString.substring(3, 5))
  const year = parseInt(dateString.substring(6, 10))

  const today = new Date()
  const birthDate = new Date(year, month - 1, day) // 'month - 1' т.к. нумерация месяцев начинается с 0
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}
