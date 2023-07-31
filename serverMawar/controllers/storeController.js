const { Store } = require('../models/index')
class StoreController {
    static async readStore(request, response, next) {
        try {
            const result = await Store.findAll()
            response.status(200).json(
                result
            )
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async createStore(request, response, next) {
        try {
            const { name, address, phoneNumber } = request.body

            const result = await Store.create({
                name,
                address,
                phoneNumber
            })

            response.status(201).json(result)
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async deleteStore(request, response, next) {
        try {
            const { id } = request.params
            await Store.destroy({
                where: {
                    id
                }
            })
            response.status(200).json({
                msg: `Store with id ${id} is successfully deleted`
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    }
}

module.exports = StoreController