const express=require('express');
const app=express();
const port=3100;
const path=require('path');
const bp = require('body-parser');
const productsRouter=require('./routes/productos');
const methodOverride = require('method-override')
const usuariosRouter = require('./routes/usuarios')
const localUserCheck = require('./Middlewares/localUserCheck.js')
const mainRouter = require('./routes/main');

const session = require('express-session');

const rutaAbsoluta='./views/';
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
  }))
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use(localUserCheck);

app.use('/productos',productsRouter);
app.use('/',usuariosRouter);
app.use('/',mainRouter);
app.listen(port, ()=>console.log("funcionando en localhost:"+port));
