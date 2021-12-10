const faker = require('faker')
const boom = require('@hapi/boom')
const sequilize = require('../libs/sequilize')
class ProductService {

    constructor() {
        this.products = [];
        this.generate();
    }

    async generate() {
        const limit = 10;
        for (let index = 0; index < limit; index++) {
            this.products.push({
                id: faker.datatype.uuid(2),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl(),
                isBlock: faker.datatype.boolean(),
            })
        }
    }

    async create(body) {
        const newProduct = {
            id: faker.datatype.uuid(2),
            ...body
        }
        this.products.push(newProduct)
        return newProduct
    }

    async find() {
        const query = 'SELECT * FROM task';
        const [data] = await sequilize.query(query)
        return data
    }

    async findOne(id) {
        const product = this.products.find(item => item.id === id)
        if (!product) {
            throw boom.notFound('product not found')

        }
        if (product.isBlock) {
            throw boom.conflict('product not isblock')
        }
        return product;
    }

    async update(id, change) {
        const index = this.products.findIndex(item => item.id === id)
        if (index === -1) {
            throw boom.notFound('product not found')
        } else {
            const product = this.products[index]
            this.products[index] = {
                ...product,
                ...change
            }
        }
        return this.products[index]
    }
    async delete(id) {
        const index = this.products.findIndex(item => item.id === id)
        if (index === -1) {
            throw boom.notFound('product not found')
        } else {
            this.products.splice(index, 1)
        }
        return { id };
    }
}

module.exports = ProductService;