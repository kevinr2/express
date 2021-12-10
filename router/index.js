const express = require('express')
const producto = require('./producto.router')
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const orderRouter = require('./orders.router');
const customersRouter = require('./customers.router');

function routerApi(app) {
    const router = express.Router()// esto nos sirve para manejar api robustas ya que puede que la version 1no le sirva a otris tipos de clientes
    app.use('/api/v1/', router)
    router.use('/productos', producto)
    router.use('/categories', categoriesRouter);
    router.use('/users', usersRouter);
    router.use('/orders', orderRouter);
    router.use('/customers', customersRouter);
}


module.exports = routerApi;