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

//mongoose server configuration
dbConnection()

app.listen(port, ()=> {
    console.log('listening on port ', port)
})
