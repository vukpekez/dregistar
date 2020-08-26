const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

const doctorRoutes = require('./routes/doctors')
const hospitalRoutes = require('./routes/hospitals')

mongoose.connect("mongodb+srv://user:VTh90j3A97qtHBXl@cluster0-5qaiz.gcp.mongodb.net/finalTest?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(() => {
    console.log('Connected to database!')
  })
  .catch(() => {
    console.log('Connection failed!')
  })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Signature")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS")
  next()
})

app.use('/api/doctors', doctorRoutes)
app.use('/api/hospitals', hospitalRoutes)

module.exports = app;
