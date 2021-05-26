const express = require('express')
const multer = require('multer')

const Post = require('./models/Post')

const multerConfig = require('./config/multer')

const routes = express.Router()
 routes.post('/posts', multer(multerConfig).single('file'), async (req, res) => {
  const { originalname: name, size, key, url = ''} = req.file
  const post = await Post.create({
    name,
    size,
    key,
    url
  })
   
  return res.json(post)
})

module.exports = routes
