const bcrypt = require('bcrypt')


async function hash() {
    const myPassword = 'admin 123 .202';
    const hash = await bcrypt.hash(myPassword, 10)
    console.log(hash)
}
const bcrypt = require('bcrypt')
async function hashVerify() {
    const myPassword = 'admin 123 .202';
    const hash = '$2b$10$lSMfe0DQaNk5T9gokAhYauo7J3CH5kkeCZ.bBM66qI62SgamcplRK'
    const isMatch = await bcrypt.compare(myPassword, hash)
    console.log(isMatch)
}
hashVerify()

hash()