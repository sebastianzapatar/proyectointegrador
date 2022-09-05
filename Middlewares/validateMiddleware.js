// usuario ya logueado, se redirecciona a '/home'

function validateMiddleware (res, req, next) {
    if (req.session.userLogged ) {
        return res.redirect ('/home')
    } 
    next ()
}


module.exports = validateMiddleware