'use strict'

const path = require('path')
const fs = require('fs')
const handlebars = require('handlebars')
const { promisify } = require('util')

const readFile = promisify(fs.readFile)
const templateSrc = fs.readFileSync(path.join(__dirname, 'template.hbs'), 'utf8')

async function loadUsers () {
  try {
    let userFile = await readFile(path.join(__dirname, 'users.json'), 'utf8')
    let users = JSON.parse(userFile)
    return users
  } catch (e) {
    console.error(e.message)
    process.exit(1)
  }
}

(async () => {
  let users = await loadUsers()
  let template = handlebars.compile(templateSrc)
  let html = template({ users })
  console.log(html)
})()







