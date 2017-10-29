const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello BOT!')
})

app.listen(3999, function () {
  console.log('Example app listening on port 3999!')
})