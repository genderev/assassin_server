var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send(JSON.stringify('Thanks': 'Visit gitter.im/assassindb for help!'))
})

app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})
