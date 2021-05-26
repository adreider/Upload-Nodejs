require('dotenv').config()

const express = require('express')
const routes = require('./routes')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

// database setup
mongoose.connect(
  "mongodb://localhost:27017/upload",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
)


app.use(routes)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))

app.listen(3000)
