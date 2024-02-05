<div align="center">


# Project-helpers

A collection of utilities to assist in projects

</div>

## Installation

```sh
  # NPM
  pnpm install @migudevelop/project-helpers

  # NPM
  npm install @migudevelop/project-helpers

  # YARN
  yarn add @migudevelop/project-helpers
```

### Usage

Using CommonJS

```js
// CommonJS
const utils = require('@migudevelop/project-helpers')

console.log(utils.isString('Programming'))
```

Using ES6 Modules or TypeScript:

```ts
// ES6 Modules or TypeScript
import { isEmptyString } from '@migudevelop/project-helpers'

console.log(isEmptyString('Programming'))
```

## Utitlies

### String

* **isEmptyString** - Determines whether a value is an empty string

### Array

* **isEmptyArray** - Determines whether a value is an empty string

### Styles

* **generateClassNames** - Creates a string with the values provided, it is fine to provide a conditional classes.

  This method eliminates undefined values, you can pass conditionals to provide a class or not, for example:
  
  ```ts
  const classes = generateClassNames(
    'btn',
    variant && `btn-${variant}`,
    disabled && 'btn-disabled',
  )
  ```


### Types

* **isString()** - Determines whether a value is a string

* **isNumber()** - Determines whether a value is a number

* **isBoolean()** - Determines whether a value is a boolean

* **isNull()** - Determines whether a value is null

* **isArray()** - Determines whether a value an array

* **isFunction()** - Determines whether a value is a function

* **isUndefined()** - Determines whether a value is undefined

* **isNullish()** - Determines whether a value is undefined or null

## License

[MIT License](/LICENSE)

<div align="center">

Copyright (c) 2024 Migudevelop

</div>
