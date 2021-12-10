const joi = require('joi')

const id = joi.string().uuid()
const name = joi.string().min(3).max(15)
const price = joi.number().integer().min(10)
const image = joi.string().uri()
const createProductShema = joi.object({
    name: name.required(),
    price: price.required(),
    image: image.required()
})
const updateProductShema = joi.object({
    name: name,
    price: price,
    image: image
})
const getProductShema = joi.object({
    id: id.required(),
})

module.exports = { createProductShema, updateProductShema, getProductShema }