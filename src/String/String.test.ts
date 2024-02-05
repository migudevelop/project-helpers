import { isEmptyString } from './String'

describe('String', () => {
  describe('isEmptyString function', () => {
    it('should return true when the provided string is empty', () => {
      expect(isEmptyString('')).toBe(true)
    })

    it('should return false when provided a valid string', () => {
      expect(isEmptyString('foo')).toBe(false)
    })
  })
})
