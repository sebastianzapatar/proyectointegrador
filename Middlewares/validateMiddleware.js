// usuario ya logueado, se redirecciona a '/home'

function validateMiddleware (res, req, next) {
    if (user) {
        return res.redirect ('/home')
    } 
    next()
}
module.exports = validateMiddleware