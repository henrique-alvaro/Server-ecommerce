const { Router } = require('express')

const routes = Router()

routes.get('/', (req, res) => {
   res.send('Hello World')
})

// Criar e listar usuarios
routes.post('/users')
routes.get('/users')

// Pegar usuario especifico
routes.get('/users/:user_id')

// Criar e listar usuarios
routes.post('/products/:user_id')
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
routes.get('/cart')

// Pegar um cart especifico
routes.get('/cart/:user_id/:cart_id')



module.exports = routes