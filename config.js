module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB_URI,
  jwtSecretToken: process.env.JWT_SECRET_TOKEN
}
