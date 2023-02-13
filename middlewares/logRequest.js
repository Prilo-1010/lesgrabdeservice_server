const logRequest = (req, res, next) => {
    console.log(req.path, req.method);
    next()
}

module.exports = { logRequest }