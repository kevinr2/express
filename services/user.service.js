const boom = require('@hapi/boom');
const bcrypt = require('bcrypt')
const { models } = require('../libs/sequilize')

class UserService {
    constructor() { }

    async create(data) {
        const hash = await bcrypt.hash(data.password, 10)
        const newUSer = await models.User.create({
            ...data,
            password: hash
        });
        delete newUSer.dataValues.password;
        return newUSer;
    }

    async find() {
        const rta = await models.User.findAll({
            include: ['customer']
        });
        return rta;
    }
    async findEmail(email) {
        const rta = await models.User.findOne({
            where: { email }
        });
        return rta;
    }

    async findOne(id) {
        const user = await models.User.findByPk(id)
        if (!user) throw boom.notFound('user not found');
        return user;
    }

    async update(id, changes) {
        const user = await this.findOne(id);
        const res = await user.update(changes)
        return res;
    }

    async delete(id) {
        const user = await this.findOne(id);
        await user.destroy()
        return { id };
    }
}

module.exports = UserService;