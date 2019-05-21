const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/restful_blog_app')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended: true
}))
// title
// image url
// body
// created

app.listen(PORT, () => console.log(`Running on ${PORT}`))