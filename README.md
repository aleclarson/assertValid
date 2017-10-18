
# assertValid v1.0.1

```js
const assertValid = require('assertValid');

const value = 0;
assertValid(value, 'string') // => TypeError('Expected a string')
assertValid(value, 'number') // => undefined
```

See the [valido](https://github.com/aleclarson/valido) documentation to learn more.
