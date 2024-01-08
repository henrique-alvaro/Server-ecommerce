const jsonwebtoken = require('jsonwebtoken')
require('dotenv').config()

const authenticate = async (req, res, next) => {
   const authHeader = req.headers['authorization']
   const token = authHeader && authHeader.split(" ")[1]

   if(!token) return res.status(400).send('Acess denied. No token provided');

   try {
      const secret = process.env.PRIVATE_KEY
      jsonwebtoken.verify(token, secret)
      next()
   } catch (err) {
      return res.status(400).send('invalid token')
   }
}

module.exports = authenticate