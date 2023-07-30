const { Category } = require('../models/index.js')
const dataCategory = require('../sampleData/user.json')

async function CreateCategory() {
    try {
        // console.log(dataCategory)
        await Category.bulkCreate(dataCategory)
        // console.log(result)
    } catch (err) {
        console.log(err)
    }

}

module.exports = { CreateCategory }