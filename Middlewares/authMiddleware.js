//Usuarios no logueados, redirreciona a '/login'

function authMiddleware (req, res, next) {
   if (!req.session.userLogged) {
        return res.redirect ('/')
    } 
    next ()
}

 module.exports = authMiddleware

