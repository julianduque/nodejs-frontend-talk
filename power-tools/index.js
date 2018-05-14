'use strict'

const $ = require('jquery')

function loadUsers () {
  let users = require('./users.json')
  return users
}

function loadTemplate () {
  let template = require('./template.hbs')
  return template
}

let users = loadUsers()
let template = loadTemplate()
let html = template({ users })

$('body').html(html)
