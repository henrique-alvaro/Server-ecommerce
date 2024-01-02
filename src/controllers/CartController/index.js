const Cart = require('../../models/Cart')

const CartController = {
   async createCart(req, res) {
      const bodyData = req.body
      const { user_id } = req.params

      try {
         const createCart = (await Cart.create({ ...bodyData, username: user_id })).populate(username)

         return res.status(200).json(createCart)
      } catch (err) {
         return res.status(400).json(err)
      }
   },

   async listUserCart(req, res) {
      const { user_id } = req.params

      try {
         const cartUser = await Cart.find({username:user_id}).populate('username').populate('products')

         return res.status(200).json(cartUser)
      } catch (err) {
         return res.status(400).json(err)
      }
   },

   async searchCart(req, res) {
      const { user_id, cart_id } = req.params

      try {
         const cartUser = await Cart.findById(cart_id).populate('products').populate('username')

         return res.status(200).json(cartUser)
      } catch (err) {
         return res.status(400).json(err)
      }
   },

}

module.exports = CartController
