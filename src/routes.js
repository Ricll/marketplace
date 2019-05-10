const express = require('express')

const routes = express.Router()

const controllers = require('./app/controllers')
const authMiddleware = require('./app/middlewares/auth')

routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)

routes.use(authMiddleware)

routes.get('/ads', controllers.AdController.index)
routes.get('/ads/:id', controllers.AdController.show)
routes.post('/ads', controllers.AdController.store)
routes.put('/ads/:id', controllers.AdController.update)
routes.delete('/ads/:id', controllers.AdController.destroy)

// Purchase

routes.post('/purchases', controllers.PurchaseController.store)

module.exports = routes

// routes.get('/teste', authMiddleware, (req, res) => {
//  res.json({ ok: true })
// }) ---> Apenas para testes
// routes.use(authMiddleware) ---> Abaixo desta rota todos usam Ads
