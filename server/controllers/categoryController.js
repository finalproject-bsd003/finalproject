const { Category } = require('../models/index')


class CategoryController {
    static async readCategories(request, response, next) {
        try {
            const result = await Category.findAll()
            response.status(200).json(
                result
            )
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async createCategories(request, response, next) {
        try {
            const { name } = request.body

            const result = await Category.create({
                name
            })

            response.status(201).json(result)
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async deleteCategories(request, response, next) {
        try {
            const { id } = request.params
            await Category.destroy({
                where: {
                    id
                }
            })
            response.status(200).json({
                msg: `Category with id ${id} is successfully deleted`
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    }
}

module.exports = CategoryController