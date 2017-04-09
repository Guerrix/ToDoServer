'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send({ message: 'Hello Wold!' })
})

app.listen(port, () => {
  console.log(`API REST running at http://localhost:${port}`)
})
