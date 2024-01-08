const { Router } = require('express')

const UserController = require('../controllers/UserController')
const createSession = require('../controllers/Login')
const ProductController = require('../controllers/ProductController')
const CartController = require('../controllers/CartController')

const authenticate = require('../middlewares/index')

const routes = Router()

routes.get('/', (req, res) => {
   res.send('Hello World')
})

// Criar usuarios
routes.post('/users', UserController.createUser)
// listar todos os usuarios
routes.get('/users', authenticate, UserController.listUser)
// Pegar usuario especifico
routes.get('/users/:user_id', authenticate, UserController.seachUser)

// Login
routes.post('/sessions', createSession)

// Criar produto
routes.post('/products/:user_id', authenticate, ProductController.createProduct)
// Pesquisar produtos do usuarios
routes.get('/:user_id/products', authenticate, ProductController.listUserProduct)
// Atualizar produtos
routes.patch('/products/:user_id/:product_id', authenticate, ProductController.updateProduct)
// Deletar produtos
routes.delete('/products/:user_id/:product_id', authenticate, ProductController.deleteProduct)

// Listar todos os produtos
routes.get('/products', ProductController.listProduct)
// Listar produto especifico
routes.get('/products/:product_id', ProductController.searchProduct)

// Criar cart
routes.post('/carts/:user_id', authenticate, CartController.createCart)
// listar de cart do usuario
routes.get('/carts/:user_id', authenticate, CartController.listUserCart)

// Pegar um cart especifico
routes.get('/carts/:user_id/:cart_id', authenticate, CartController.searchCart)

module.exports = routes