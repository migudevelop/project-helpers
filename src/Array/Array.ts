import { isArray } from '@/Types'

/**
 * Determines whether a value is an empty array
 * @param value Value to check
 * @returns boolean
 */
export function isEmptyArray<T>(value: T | T[]): value is Array<T> {
  return isArray(value) && value.length === 0
}
