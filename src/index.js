var str = require('./other')
var $ = require('jquery')
var App = function() {
    console.log(str)
    $('body').html(str)
}

var app = new App()