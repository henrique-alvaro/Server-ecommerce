const Product = require('../../models/Product')

const ProductController = {
   // criar produto
   async createProduct(req, res){
      const bodyData = req.body
      const { user_id } = req.params

      try {
         const data = {username: user_id, ...bodyData}

         const newProduct = await Product.create(data)
         //await newProduct.populate('username').execPopulate()

         return res.status(200).send(newProduct)
      } catch (err) {
         return res.status(400).json(err)
      }
   },

   // Produtos do usuario
   async listUserProduct(req, res) {
      const { user_id } = req.params

      try {
         const productUser = await Product.find({ username: user_id })
         //await productUser.populate('username').execPopulate()

         return res.status(200).json(productUser)
      } catch (err) {
         return res.status(400).json(err)
      }
      
   },

   async updateProduct(req, res) {

   },

   async deleteProduct(req, res) {

   },

   async listProduct(req, res) {

   },

   async searchProduct(req, res) {

   }
}

module.exports = ProductController