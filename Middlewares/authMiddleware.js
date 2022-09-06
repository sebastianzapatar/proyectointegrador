//Usuarios no logueados, redirreciona a '/login'

function authMiddleware (res, req, next) {
    if (!user) {
        return res.redirect ('/login')
    } 
    next()
}
module.exports = authMiddleware