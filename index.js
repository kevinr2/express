const express = require('express')
const routerApi = require('./router')
const faker = require('faker')
const cors = require('cors')
const { errorHandler, logErrors, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler')
const app = express()
const port = process.env.PORT || 3000;





app.use(express.json())

app.get('/', (req, res) => {
  res.send('hola mi servidor es express')
})
app.get('/nueva', (req, res) => {
  res.json({
    nombre: 'nueva ruta',
    price: 1000

  })
})



routerApi(app)

app.use(logErrors)
app.use(ormErrorHandler)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log('mi puerto esta ' + port)
})

