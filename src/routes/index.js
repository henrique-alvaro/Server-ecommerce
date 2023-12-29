const { Router } = require('express')

const routes = Router()

const UserController = require('../controllers/UserController')

routes.get('/', (req, res) => {
   res.send('Hello World')
})

// Criar usuarios
routes.post('/users', UserController.createUser)
// listar todos os usuarios
routes.get('/users', UserController.listUser)

// Pegar usuario especifico
routes.get('/users/:user_id')

// Criar produto
routes.post('/products/:user_id')
// Pesquisar usuarios especifico
routes.get('/products/:user_id')

// Atualizar produtos
routes.patch('/products/:user_id/:product_id')
// Deletar produtos
routes.delete('/products/:user_id/:product_id')

// Listar todos os produtos
routes.get('/products')
// Listar produto especifico
routes.get('/products/:product_id')

// Carrinho
routes.post('/cart/:user_id')
// listar todo o carrinho
routes.get('/cart')

// Pegar um cart especifico
routes.get('/cart/:user_id/:cart_id')



module.exports = routes