// usuario ya logueado, se redirecciona a '/home'

module.exports = (req,res,next)=>{
    console.log(req.session.userLogged);
    
    if(req.session.userLogged){
        res.locals.userLogged = req.session.userLogged;
    }
    next();
}
