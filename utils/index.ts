export function formatDate(inputDate: string): string {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  const [year, month, day] = inputDate.split('-')
  const monthIndex = parseInt(month, 10) - 1
  const formattedDate = `${months[monthIndex]} ${day}, ${year}`

  return formattedDate
}

export function getColorFromValue(value: number) {
  if (value >= 7 && value <= 10) {
    return 'text-green-8'
  } else if (value >= 5.5 && value <= 6.9) {
    return 'text-yellow-700'
  } else if (value < 5.5) {
    return 'text-red-700'
  }
}
