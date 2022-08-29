const express=require('express');
const app=express();
const port=3100;
const { dirname } = require('path');
const path=require('path');
const fs = require('fs');
const bp = require('body-parser');
const productsRouter=require('./routes/productos');
const methodOverride = require('method-override')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const usuariosRouter = require('./routes/usuarios')



const rutaAbsoluta='./views/';
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use('/',productsRouter);
app.use('/',usuariosRouter);

app.get('/carritodecompras', (req, res)=>{
    const htmlPath=path.resolve(__dirname,rutaAbsoluta+'carrito');
    res.render(htmlPath)
});
app.get('/login', (req, res)=>{
    const htmlPath=path.resolve(__dirname,rutaAbsoluta+'login');
    res.render(htmlPath)
});

app.get('/ayuda', (req, res)=>{
    const htmlPath=path.resolve(__dirname,rutaAbsoluta+'ayuda');
    res.render(htmlPath)
});
app.listen(port, ()=>console.log("funcionando en localhost:"+port));
