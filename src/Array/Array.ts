import { isArray } from '../Types'

/**
 * Determines whether a value is an empty array
 * @param value Value to check
 * @returns boolean
 */
export function isEmptyArray<T>(value: T | T[]): value is Array<T> {
  return isArray(value) && value.length === 0
}

/**
 * Create an array of numbers with the given length
 * @param length Length of the array to creating
 * @returns Array<number>
 */
export function createArrayByLength(length: number = 0): Array<number> {
  return Array.from({ length }, (_, i) => i)
}
