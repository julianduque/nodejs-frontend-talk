'use strict';

var path = require('path');
var fs = require('fs');
var $ = require('jquery');
var handlebars = require('handlebars');

function loadUsers() {
  var users = require('./users.json');
  return users;
}

function loadTemplate() {
  var template = require('./template.hbs');
  return template;
}

var template = loadTemplate();
var html = template({ users: loadUsers() });

$('body').html(html);