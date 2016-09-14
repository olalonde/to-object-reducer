var test = require('tape')

var toObject = require('./')

var arr = [
  ['id', 1337],
  ['username', 'olalonde'],
  ['email', 'olalonde@gmail.com'],
]

test(function (t) {
  var obj = arr.reduce(toObject)
  t.deepEqual(obj, {
    id: 1337,
    username: 'olalonde',
    email: 'olalonde@gmail.com',
  })
  t.end()
})