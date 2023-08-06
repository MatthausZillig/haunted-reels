// Importe as funções necessárias da biblioteca 'vitest'
import { describe, expect, it } from 'vitest'
import { formatDate } from '~/utils/index'

describe('formatDate function', () => {
  it('should format valid dates correctly', () => {
    const inputDate1 = '2010-06-16'
    const expectedOutput1 = 'Jun 16, 2010'
    expect(formatDate(inputDate1)).toBe(expectedOutput1)

    const inputDate2 = '2023-08-05'
    const expectedOutput2 = 'Aug 05, 2023'
    expect(formatDate(inputDate2)).toBe(expectedOutput2)
  })

  it('should handle invalid date gracefully', () => {
    const inputDate3 = '2023-13-99'
    const expectedOutput3 = 'undefined 99, 2023'
    expect(formatDate(inputDate3)).toBe(expectedOutput3)
  })
})
