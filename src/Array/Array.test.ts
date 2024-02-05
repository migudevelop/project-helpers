import { isEmptyArray } from './Array'

describe('Array', () => {
  describe('isEmptyArray function', () => {
    it('should return true when the provided array is empty', () => {
      expect(isEmptyArray([])).toBe(true)
    })

    it('should return false when the provided array contains values', () => {
      expect(isEmptyArray(['foo'])).toBe(false)
    })
  })
})
