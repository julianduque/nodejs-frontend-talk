
const fs = require('fs')

console.log('Reading the file')
readFile('./users.json', handleRead)
console.log('I read the file')

function handleRead (err, file) {
  if (err) {
    console.log(err.message)
    return
  }
  console.log(file)
}

function readFile (filename, callback) {
  fs.readFile(filename, 'utf8', function onReadFile (err, file) {
    if (err) {
      callback(err)
      return
    }
    callback(null, file)
  })
}
