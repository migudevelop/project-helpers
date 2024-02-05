import { isString } from '@/Types'

/**
 * Determines whether a value is an empty string
 * @param value Value to check
 * @returns boolean
 */
export function isEmptyString(value: unknown): value is '' {
  return isString(value) && value === ''
}
