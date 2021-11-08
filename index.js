const  express = require('express')
 const  routerApi = require('./router')
 const faker = require('faker')
 const cors = require('cors')
 const { errorHandler, errorLog ,boomErrorHandler } = require('./middleware/error.handler')
 const app = express()
 const port = process.env.PORT || 3000;

 const whitelist = ['http://localhost:80','http://localhost:8080', 'http://post.test']//caracteristicas cors // son los mismos (si pego los links platzi me impide comentar)
 const options = {
   origin: (origin, callback) => {
     if (whitelist.includes(origin) || !origin) {
       callback(null, true);
     } else {
       callback(new Error('no permitido'), false);
     }
   }
 }
 
 app.use(cors(options));

app.use(express.json())

 app.get('/',(req,res)=>{
    res.send('hola mi servidor es express')
 })
 app.get('/nueva',(req,res)=>{
    res.json({
        nombre: 'nueva ruta',
        price : 1000

    })
 })


 
 routerApi(app)

 app.use(errorLog)
 app.use(boomErrorHandler)
 app.use(errorHandler)

 app.listen(port,() => {
    console.log('mi puerto esta '+ port)
 })

 