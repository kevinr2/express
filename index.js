const express = require('express')
const routerApi = require('./router')
const { checkApiKey } = require('./middlewares/auth.handler')
const { errorHandler, logErrors, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler')
const app = express()
const port = process.env.PORT || 3000;
const passport = require('passport')


app.use(express.json())

app.get('/', (req, res) => {
  res.send('hola mi servidor es express')
})
app.get('/nueva', checkApiKey, (req, res) => {
  res.send('hola nueva ruta')
})

require('./utils/auth');

app.use(passport.initialize());
routerApi(app)

app.use(logErrors)
app.use(ormErrorHandler)

app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log('mi puerto esta ' + port)
})

