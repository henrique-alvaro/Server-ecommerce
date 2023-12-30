const User = require('../../models/User')

const userController = {
   async createUser(req, res) {
      const bodyData = req.body
      try {
         const newUser = await User.create(bodyData)
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
         return res.status(400).jdon(err)
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