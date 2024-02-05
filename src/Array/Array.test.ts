import { createArrayByLength, isEmptyArray } from './Array'

describe('Array', () => {
  describe('isEmptyArray function', () => {
    it('should return true when the provided array is empty', () => {
      expect(isEmptyArray([])).toBe(true)
    })

    it('should return false when the provided array contains values', () => {
      expect(isEmptyArray(['foo'])).toBe(false)
    })
  })

  describe('createArrayByLength function', () => {
    it('should return an array with the specified length', () => {
      expect(createArrayByLength(2)).toStrictEqual([0, 1])
    })

    it('should return an empty array when no length is provided', () => {
      expect(createArrayByLength()).toStrictEqual([])
    })
  })
})
