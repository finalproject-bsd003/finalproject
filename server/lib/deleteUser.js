const { User } = require('../models/index')

async function DeleteUser() {
    try {
        await User.destroy({
            cascade: true,
            truncate: true,
            restartIdentity: true,
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = DeleteUser