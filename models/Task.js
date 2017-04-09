'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = Schema({title: String, description: String})

module.exports = mongoose.model('Task', TaskSchema)
