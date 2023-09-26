const express = require('express')
const logger = require('morgan')
const helmet = require('helmet')
require('dotenv').config({path: './.env'})
const {dbConnection} = require('./src/db')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(logger('common'))

//get video length API
const { getVideoDurationInSeconds } = require('get-video-duration')
// From a URL...
getVideoDurationInSeconds(
    'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
  ).then((duration) => {
    console.log({duration})
  })

//mongoose server configuration
dbConnection()

app.listen(port, ()=> {
    console.log('listening on port ', port)
})
