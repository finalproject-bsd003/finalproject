const { User } = require('../models/index.js')
const dataUser = require('../sampleData/user.json')
const { hashPassword } = require('../helpers/bcrypt.js')
dataUser.forEach((el) => {
    el.password = hashPassword(el.password)
})

async function CreateUser() {
    try {
        // console.log(dataUser)
        const result = await User.bulkCreate(dataUser)
        // console.log(result)
    } catch (err) {
        console.log(err)
    }

}

module.exports = { CreateUser }