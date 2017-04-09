'use strict'

const express = require('express')
const api = express.Router()
const authConstroller = require('../controllers/auth')

api.post('/facebooksignUp/:facebookToken', authConstroller.signUpWithFacebook)

api.get('/', (req, res) => {
  res.send({ message: 'Hello Wold!' })
})

module.exports = api
