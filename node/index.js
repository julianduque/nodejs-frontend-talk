'use strict'

const path = require('path')

function loadUsers () {
  let users = require(path.join(__dirname, 'users.json'))
  return users
}

let users = loadUsers()

users.forEach(user => {
  console.log(`${user.name} ${user.lastname} is ${user.age} years old`)
})
