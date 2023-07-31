const { Dress } = require('../models/index.js')
const dataDress = require('../sampleData/dress.json')

async function CreateDress() {
    try {
        console.log(dataDress)
        await Dress.bulkCreate(dataDress)
        // console.log(result)
    } catch (err) {
        console.log(err)
    }

}

module.exports = { CreateDress }