const { Router } = require('express')

const UserController = require('../controllers/UserController')
const SessionController = require('../controllers/Login')
const ProductController = require('../controllers/ProductController')

const routes = Router()

routes.get('/', (req, res) => {
   res.send('Hello World')
})

// Criar usuarios
routes.post('/users', UserController.createUser)
// listar todos os usuarios
routes.get('/users', UserController.listUser)
// Pegar usuario especifico
routes.get('/users/:user_id', UserController.seachUser)

// Login
routes.post('/sessions', SessionController.createSession)

// Criar produto
routes.post('/products/:user_id', ProductController.createProduct)
// Pesquisar produtos do usuarios
routes.get('/products/:user_id', ProductController.listUserProduct)
// Atualizar produtos
routes.patch('/products/:user_id/:product_id', ProductController.updateProduct)
// Deletar produtos
routes.delete('/products/:user_id/:product_id', ProductController.deleteProduct)

// Listar todos os produtos
routes.get('/products', ProductController.listProduct)
// Listar produto especifico
routes.get('/products/:product_id', ProductController.searchProduct)

// Carrinho
routes.post('/cart/:user_id')
// listar todo o carrinho
routes.get('/cart')

// Pegar um cart especifico
routes.get('/cart/:user_id/:cart_id')



module.exports = routes