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
function boomErrorHandler(err, req, res, next) {
    if (err.isBoom) {
       const { output } = err;
        res.status(output.statusCode).json(output.playload)
    }
    next(err)
} 

module.exports = { errorLog , errorHandler , boomErrorHandler}