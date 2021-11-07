const faker = require('faker')
class ProductService {

    constructor(){
        this.products =[];
        this.generate();
    }

    async generate(){
        const limit = 10;
        for (let index = 0; index < limit; index++) {   
           this.products.push({
                id: faker.datatype.uuid(2),
                name:faker.commerce.productName(),
                price: parseInt(faker.commerce.price(),10),
                image: faker.image.imageUrl()
            })
        }
    }

    async create(body){
        const newProduct ={
            id:faker.datatype.uuid(2),
            ...body
        }
        this.products.push(newProduct)
        return newProduct
    }

    async find(){
        return this.products;
    }

    async findOne(id){
        return this.products.find(item =>item.id === id)
    }

    async  update(id,change){
       const index =  this.products.findIndex(item =>item.id === id)
        if (index === -1) {
             throw new Error('no exites el elemento')
        }else{
          const product =   this.products[index]
           this.products[index] ={
              ...product,
              ...change
          }
        }
        return this.products[index]
    }
    async delete(id){
        const index = this.products.findIndex(item =>item.id === id)
        if (index === -1) {
            throw new Error('no exites el elemento')
        }else{
            this.products.splice(index,1)
        }
        return {id};
    }
}

module.exports = ProductService;