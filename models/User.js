'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({
  email: {type: String, unique: true, lowercase: true},
  facebookId: String,
  firstName: String,
  lastName: String,
  profileImage: String,
  signupDate: {type: Date, default: Date.now()},
  lastLoging: Date
})

module.exports = mongoose.model('User', UserSchema)
