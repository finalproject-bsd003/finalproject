const { Dress } = require('../models/index.js')
const dataDress = require('../sampleData/dress.json')

async function CreateDress() {
    // try {
    //     // console.log(dataDress)
    //     const result = await Dress.bulkCreate(dataDress)
    //     // console.log(result, '<< ini result')
    // } catch (err) {
    //     console.log(err)
    // }

    return Dress.bulkCreate(dataDress);

}

module.exports = { CreateDress }