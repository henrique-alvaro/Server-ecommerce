const jsonwebtoken = require('jsonwebtoken')
const User = require('../../models/User')
require('dotenv').config()
const bcrypt = require('bcrypt')

const SECRET = process.env.PRIVATE_KEY

const createSession = async (req, res) => { 
   const { username, password } = req.body

   if(!username) return res.status(400).send('username incorreto')

   if(!password) return res.status(400).send('Password incorreta')

   const user = await User.findOne({username:username})
      
   if(!user) return res.status(400).send('usuario nao existe')

   const checkPassword = await bcrypt.compare(password, user.password)

   if(!checkPassword) return res.status(422).send('Senha Invalida')


   try {
      const token = jsonwebtoken.sign(
         { username: username},
         SECRET
      )

      res.status(201).json({msg: 'Autenticacao realizada com sucesso', token})
   } catch (err) {
      return res.status(500).send(err)
   }
}


module.exports = createSession