# to-object-reducer

Simple JavaScript/Node.js module which exports a `toObject`
reducer that can be used with `arr.reduce(toObject)` to convert an array
`[[key,value],...]` to an object `{ key: value, ... }`.

Example:

```javascript
[['username', 'olalonde'], ['id',1337]].reduce(toObj)
// => { username: 'olalonde', id: 1337 }
```

## Install

```sh
npm install --save to-object-reducer
```

## Usage

It is meant to facilitate the pattern of converting an object to an
array of `[key,val]` for easier manipulation with Array methods and back
to an object, e.g.:

```javascript
const toObject = require('to-object-reducer')

// Lower case object keys
const lowerCaseHeaders = (headers = {}) => Object
  .keys(headers)
  .map(key => [key, headers[key]])
  .map([key, val] => [key.toLowerCase(), val])
  .reduce(toObject)

// Or with ES2017 Object.entries
const lowerCaseHeaders = (headers = {}) => Object
  .entries(headers)
  .map([key, val] => [key.toLowerCase(), val])
  .reduce(toObject)
```

## License

MIT
