// usuario ya logueado, se redirecciona a '/home'

module.exports = (req,res,next)=>{
    console.log(req.session.userLogged);
    console.log("carajo");
    if(req.session.userLogged){
        res.locals.userLogged = req.session.userLogged;
    }
    next()
}
