//Usuarios no logueados, redirreciona a '/login'

function authMiddleware (res, req, next) {
    if (!req.session.userLogged ) {
        return res.redirect ('/login')
    } 
    next ()
}


module.exports = authMiddleware