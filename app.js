const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose')

// APP CONFIG
mongoose.connect('mongodb://localhost/restful_blog_app', { useNewUrlParser: true })
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

// MONGOOSE MODEL CONFIG
const blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: { type: Date, default: Date.now }
})

const Blog = mongoose.model('Blog', blogSchema)
// title
// image url
// body
// created

// Blog.create({
//   title: 'test blog',
//   image: 'https://www.what-dog.net/Images/faces2/scroll001.jpg',
//   body: 'this is a test'
// })

// RESTFUL ROUTES
app.get('/', (req, res) => {
  res.redirect('blogs')
})

app.get('/blogs', (req, res) => {
  Blog.find({}, (err, blogs) => {
    if (err) {
      console.log(err)
    } else {
      res.render('index', { blogs: blogs })
    }
  })
})

app.listen(3000, () => console.log('Server is live!'))
