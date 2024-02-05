/**
 * Generate an string with a provided array of string
 * @param classes array of classes
 * @returns string
 */
export function generateClassNames<T>(...classes: T[]): string {
  return classes.filter(Boolean).join(' ')
}
