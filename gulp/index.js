'use strict'

const path = require('path')
const fs = require('fs')
const $ = require('jquery')
const handlebars = require('handlebars')

function loadUsers () {
  let users = require('./users.json')
  return users
}

function loadTemplate () {
  let template = require('./template.hbs')
  return template
}

let template = loadTemplate()
let html = template({ users: loadUsers() })

$('body').html(html)
console.log('Hello!')
