module.exports = function (obj, kvArr) {
  var key = kvArr[0]
  var value = kvArr[1]
  obj[key] = value
  return obj
}