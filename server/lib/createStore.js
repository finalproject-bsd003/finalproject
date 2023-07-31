const { Store } = require('../models/index.js')
const dataStore = require('../sampleData/store.json')

async function CreateStore() {
    try {
        await Store.bulkCreate(dataStore)
        // console.log(result)
    } catch (err) {
        console.log(err)
    }

}

module.exports = { CreateStore }