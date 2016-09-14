module.exports = function (obj, kvArr) {
  // Special case that will only be true on the first invocation
  // if initialValue in arr.reduce(fn, initialValue) was
  // not set to an object
  if (Array.isArray(obj)) {
    var key = obj[0]
    var val = obj[1]
    obj = {}
    obj[key] = val
  }

  var key = kvArr[0]
  var value = kvArr[1]
  obj[key] = value
  return obj
}