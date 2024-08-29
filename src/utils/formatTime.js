import dayjs from 'dayjs'

export const formatBirthDay = (day) => {
  return dayjs(day).format('YYYY-MM-DD')
}

export const formatDateWithTime = (datetime) => {
  return dayjs(datetime).format('YYYY-MM-DD HH:mm')
}
