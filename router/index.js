const  express = require('express')
const producto =require('./producto.router')

function routerApi(app) {
    const router = express.Router()// esto nos sirve para manejar api robustas ya que puede que la version 1no le sirva a otris tipos de clientes
    app.use('/api/v1/', router)
    router.use('/producto',producto)
}


module.exports = routerApi;