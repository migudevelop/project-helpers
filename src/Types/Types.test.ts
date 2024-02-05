import {
  isString,
  isNumber,
  isBoolean,
  isNull,
  isArray,
  isFunction,
  isUndefined,
  isNullish
} from './Types'

describe('Types', () => {
  describe('isString function', () => {
    it('should return true when a string value is provided.', () => {
      expect(isString('foo')).toBe(true)
    })
    it('should return false when a invalid value is provided.', () => {
      expect(isString(5)).toBe(false)
    })
  })

  describe('isNumber function', () => {
    it('should return true when a valid value is provided.', () => {
      expect(isNumber(5)).toBe(true)
    })
    it('should return false when a invalid value is provided.', () => {
      expect(isNumber('foo')).toBe(false)
    })
  })

  describe('isBoolean function', () => {
    it('should return true when a valid value is provided.', () => {
      expect(isBoolean(true)).toBe(true)
    })
    it('should return false when a invalid value is provided.', () => {
      expect(isBoolean('foo')).toBe(false)
    })
  })

  describe('isNull function', () => {
    it('should return true when a valid value is provided.', () => {
      expect(isNull(null)).toBe(true)
    })
    it('should return false when a invalid value is provided.', () => {
      expect(isNull('foo')).toBe(false)
    })
  })

  describe('isArray function', () => {
    it('should return true when a valid value is provided.', () => {
      expect(isArray(['foo'])).toBe(true)
    })
    it('should return false when a invalid value is provided.', () => {
      expect(isArray('foo')).toBe(false)
    })
  })

  describe('isFunction function', () => {
    it('should return true when a valid value is provided.', () => {
      expect(isFunction(jest.fn())).toBe(true)
    })
    it('should return false when a invalid value is provided.', () => {
      expect(isFunction('foo')).toBe(false)
    })
  })

  describe('isUndefined function', () => {
    it('should return true when a valid value is provided.', () => {
      expect(isUndefined(undefined)).toBe(true)
    })
    it('should return false when a invalid value is provided.', () => {
      expect(isUndefined('foo')).toBe(false)
    })
  })

  describe('isNullish function', () => {
    it('should return true when a undefined value is provided.', () => {
      expect(isNullish(undefined)).toBe(true)
    })

    it('should return true when a null value is provided.', () => {
      expect(isNullish(undefined)).toBe(true)
    })

    it('should return false when a invalid value is provided.', () => {
      expect(isNullish('foo')).toBe(false)
    })
  })
})
