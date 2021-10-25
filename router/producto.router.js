const  express = require('express')

const ProductService = require('../services/product.service')
const router =express.Router()
const service = new ProductService();

router.get('/',(req,res)=>{ // messaje importante lo especifico debe ir antes de lo dinamico 
    const products = service.find();
   res.status(200).json(products)
})

router.get('/:id',(req,res)=>{//ruta dinamicas para que no hallan choques de informacion
     const { id }= req.params
     const products = service.findOne(id)
    res.json(products)
 })
 router.post('/', (req,res)=>{
     const body = req.body;
     const newProduct = service.create(body)
     res.status(201).json(newProduct)
 })
 router.patch('/:id', (req,res)=>{
    const {id} = req.params
    const body = req.body;
    const update = service.update(id,body)
    res.json(update)
})
router.delete('/:id', (req,res)=>{
    const {id} = req.params
    const elm = service.delete(id)
    res.json(elm)
})

 module.exports = router;