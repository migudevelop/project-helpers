/**
 * Determines whether a value is a string
 * @param value Value to check
 * @returns boolean
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

/**
 * Determines whether a value is a number
 * The value is compared to the same value because when the NaN value is provided it returns true.
 * @param value Value to check
 * @returns boolean
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && value === value
}

/**
 * Determines whether a value is a boolean
 * @param value Value to check
 * @returns boolean
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean'
}

/**
 * Determines whether a value is null
 * @param value Value to check
 * @returns boolean
 */
export function isNull(value: unknown): value is null {
  return value === null
}

/**
 * Determines whether a value an array
 * @param value Value to check
 * @returns boolean
 */
export function isArray<T>(value: T | T[]): value is Array<T> {
  return Array.isArray(value)
}

/**
 * Determines whether a value is a function
 * @param value Value to check
 * @returns boolean
 */
export function isFunction(
  value: unknown
): value is (...args: unknown[]) => unknown {
  return typeof value === 'function'
}

/**
 * Determines whether a value is undefined
 * @param value Value to check
 * @returns boolean
 */
export function isUndefined(value: unknown): value is undefined {
  return value === undefined
}

/**
 * Determines whether a value is undefined or null
 * @param value Value to check
 * @returns boolean
 */
export function isNullish(value: unknown): value is undefined | null {
  return isUndefined(value) || isNull(value)
}
