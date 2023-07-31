const { Cart, Dress } = require('../models')

class CartController {
    static async readCart(request, response, next) {
        try {
            const result = await Cart.findAll({
                include: Dress,
                where: {
                    UserId: request.additionalData.userId
                }
            })
            response.status(200).json(
                result
            )
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async addCart(request, response, next) {
        try {
            const { id } = request.params
            // console.log(id)
            const result = await Cart.findOrCreate({
                where: {
                    DressId: id,
                    UserId: request.additionalData.userId,
                },
                defaults: {
                    DressId: request.additionalData.userId,
                    DressId: id,
                    // totalPerson: 1
                    // Nanti buat booking
                }
            })
            // console.log(result)
            if (!result) {
                throw { name: 'Cart Not Found' }
            }
            console.log(result)
            response.status(200).json(result)
        } catch (err) {

        }
    }

    static async deleteCart(request, response, next) {
        try {
            const result = await Cart.destroy({
                where: {
                    DressId: id,
                    UserId: request.additionalData.userId
                }
            })
            if (!result) {
                throw { name: 'ErrorDelete' }
            }

            response.status(200).json({
                message: `Success to delete`
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    }


}

module.exports = CartController