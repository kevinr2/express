function errorLog(err, req, res, next) {
    console.log('errorLog')
    console.error(err)
    next(err)
}

function errorHandler(err, req, res, next) {
    console.log('errorHandler')
    res.status(500).json({
        menssage: err.message,
        stack: err.stack
    })
} 

module.exports = { errorLog , errorHandler}