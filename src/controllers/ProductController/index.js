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

         return res.status(200).json(newProduct)
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

   // Atualizar produtos
   async updateProduct(req, res) {
      const { user_id, product_id } = req.params
      const bodyData = req.body

      try {
         const updateProduct = await Product.findByIdAndUpdate(product_id, bodyData, {new: true})
         return res.status(200).json(updateProduct)

      } catch (err) {
         return res.status(200).json(err)
      }
   },

   // Deletar usuarios
   async deleteProduct(req, res) {
      const { user_id, product_id } = req.params
      const bodyData = req.body

      try {
         const deleteProduct = await Product.findByIdAndDelete(product_id)
         return res.status(200).json(deleteProduct)

      } catch (err) {
         return res.status(200).json(err)
      }
   },

   // Lista de produtos
   async listProduct(req, res) {
      try {
         const product = await Product.find({})

         return res.status(200).json(product)
      } catch (err) {
         return res.status(200).json(err)
      }
   },

   // Pesquisa de produtos
   async searchProduct(req, res) {
      const { product_id } = req.params

      try {
         const product = await Product.findById(product_id)
         //await productUser.populate('username').execPopulate()

         return res.status(200).json(product)
      } catch (err) {
         return res.status(400).json(err)
      }
   }
}

module.exports = ProductController