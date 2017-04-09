'use strict'

const User = require('../models/user')
const service = require('../services')
var graph = require('fbgraph')

function signUpWithFacebook (req, res) {
  let accessToken = req.params.facebookToken
  console.log(accessToken)
  graph.setAccessToken(accessToken)

  graph.get('me?fields=id,first_name,last_name,email,name', function (err, fRes) {
    if (err) {
      console.log(err.message)
      console.log(err)
      return res.status(500).send({message: `Error trying to get facebook info: ${err.message}`})
    }

    User.findOne({'email': fRes.email}, function (err, user) {
      if (err) {
        res.status(500).send({message: `Error fetching user info: ${err}`})
      } else if (!user) {
        const user = new User({
          email: fRes.email,
          displayName: fRes.name,
          facebookId: fRes.id,
          avatar: `https://graph.facebook.com/${fRes.id}/picture?type=large`
        })

        user.save((err) => {
          if (err) {
            res.status(500).send({message: `Error trying to create user: ${err}`})
          }
          res.send({token: service.createToken(user)})
        })
      } else {
        user.facebookId = fRes.id
        user.avatar = `https://graph.facebook.com/${fRes.id}/picture?type=large`
        user.save((err) => {
          if (err) {
            res.status(500).send({message: `Error trying to update user: ${err}`})
          }
          res.send({token: service.createToken(user)})
        })
      }
    })
  })
}

module.exports = {
  signUpWithFacebook
}
