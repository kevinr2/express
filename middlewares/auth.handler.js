const boom = require('@hapi/boom');


function checkApiKey(req, res, next) {
    const apiKey = req.headers['api'];
    if (apiKey === '123') {
        next();
    } else {
        next(boom.unauthorized());
    }
}

function checkAdminRole(req, res, next) {
    const user = req.user;
    if (user.role === 'admin') {
        next();
    } else {
        next(boom.unauthorized());
    }
}


function checkRoles(...roles) {
    return (req, res, next) => {
        const user = req.user;
        if (roles.includes(user.role)) {
            next();
        } else {
            next(boom.unauthorized());
        }
    }
}
module.exports = { checkApiKey, checkRoles }