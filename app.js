const express = require('express')
const logger = require('morgan')
const helmet = require('helmet')
const bcrypt = require ('bcrypt')
require('dotenv').config({path: './.env'})
const fs = require('fs')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('common'))
app.use(express.static('public'))

app.listen(port, ()=> {
    console.log('listening on port ', port)
})
