import { generateClassNames } from './Styles'

describe('Styles', () => {
  describe('generateClassNames function', () => {
    const VALID_CLASSES = 'foo faa'

    it('should return a string containing the classes provided', () => {
      expect(generateClassNames(VALID_CLASSES)).toBe(VALID_CLASSES)
    })

    describe('when provided a conditional classes', () => {
      const validClass = 'valid-class'

      describe('when isValidClass constant is false', () => {
        const isValidClass = undefined

        it('should return a string without the valid class', () => {
          expect(
            generateClassNames(isValidClass && validClass, VALID_CLASSES)
          ).toBe(VALID_CLASSES)
        })
      })

      describe('when isValidClass constant is true', () => {
        const isValidClass = true

        it('should return a string with the valid class', () => {
          expect(
            generateClassNames(VALID_CLASSES, isValidClass && validClass)
          ).toBe(`${VALID_CLASSES} ${validClass}`)
        })
      })
    })
  })
})
