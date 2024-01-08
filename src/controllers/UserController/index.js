const User = require('../../models/User')
const bcrypt = require('bcrypt')

const userController = {
   async createUser(req, res) {
      const {username, password} = req.body

      if(!username) return res.status(400).send('o nome e obrigatorio')

      if(!password) return res.status(400).send('a senha e obrigatorio')

      const userExists = await User.findOne({username:username})

      if(userExists) return res.status(422).send('Usuario ja cadastrado')

      const salt = await bcrypt.genSalt(12)
      const passwordHash = await bcrypt.hash(password, salt)


      try {
         const user = {
            username:username, 
            password: passwordHash
         }
         
         const newUser = await User.create(user)
         return res.status(200).json(newUser)

      } catch (err) {
         return res.status(400).json(err)
      }
   },

   async listUser(req, res) {
      try {
         const users = await User.find({})
         return res.status(200).json(users)
      } catch (err) {
         return res.status(400).json(err)
      }
   },

   async seachUser(req, res) {
      const { user_id } = req.params

      try {
         const user = await User.findById(user_id)
         return res.status(200).json(user)
      } catch (err) {
         return res.status(400).json(err)
      }
   }

}


module.exports = userController