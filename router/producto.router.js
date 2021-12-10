const express = require('express')
const ProductService = require('../services/product.service')
const validatorHandler = require('../middlewares/validatorHandler')
const { createProductShema, updateProductShema, getProductShema } = require('../schemas/product.schema')
const router = express.Router()
const service = new ProductService();

router.get('/', async (req, res) => { // messaje importante lo especifico debe ir antes de lo dinamico 
  const products = await service.find();
  res.status(200).json(products)
})

router.get('/:id',
  validatorHandler(getProductShema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  });
router.post('/',
  validatorHandler(createProductShema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body)
    res.status(201).json(newProduct)
  })
router.patch('/:id',
  validatorHandler(getProductShema, 'params'),
  validatorHandler(updateProductShema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body;
      const update = await service.update(id, body)
      res.json(update)
    } catch (error) {
      next(error)
    }
  })
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const elm = await service.delete(id)
  res.json(elm)
})

module.exports = router;