const errorHandler = async (err, request, response, next) => {
    if (err.name === 'SequelizeValidationError') {
        response.status(400).json(err.errors[0].message)
    } else if (err.name === 'SequelizeUniqueConstraintError') {
        response.status(400).json({
            message: err.errors[0].message
        })
    } else if (err.name === 'Invalid') {
        response.status(401).json({
            message: 'error invalid username or email or password'
        })
    } else {
        response.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

module.exports = { errorHandler }