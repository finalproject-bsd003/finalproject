const { Dress } = require('../models/index')

async function DeleteDress() {
    try {
        await Dress.destroy({
            cascade: true,
            truncate: true,
            restartIdentity: true,
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = DeleteDress