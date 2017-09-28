
var valido = require('valido')

function assertValid(value, type, key) {
  var validator = valido.get(type)
  var error = validator.assert(value)
  if (error) throw error(key)
}

assertValid.each = function(values, type, key) {
  if (Array.isArray(values)) {
    validateArray(values, valido.get(type), key)
  } else {
    validateObject(values, valido.get(type), key)
  }
}

module.exports = assertValid

//
// Helpers
//

function validateArray(values, validator, parent) {
  for (var i = 0; i < values.length; i++) {
    var error = validator.assert(values[i])
    if (error) throw error((parent || '') + '[' + i + ']')
  }
}

function validateObject(values, validator, parent) {
  for (var key in values) {
    var error = validator.assert(values[key])
    if (error) throw error(parent ? parent + '.' + key : key)
  }
}
