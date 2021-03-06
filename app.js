const express=require('express');
const app=express();
const port=3100;
const { dirname } = require('path');
const path=require('path');
const rutaAbsoluta='./views/';
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{const htmlPath=path.resolve(__dirname,rutaAbsoluta+'home');
    res.render(htmlPath)
});
app.get('/agregar', (req, res)=>{const htmlPath=path.resolve(__dirname,rutaAbsoluta+'agregar');
    res.render(htmlPath)
});
app.get('/home', (req, res)=>{
    const htmlPath=path.resolve(__dirname,rutaAbsoluta+'home');
    res.render(htmlPath)
});
app.get('/registro', (req, res)=>{
    const htmlPath=path.resolve(__dirname,rutaAbsoluta+'registro');
    res.render(htmlPath)
});
app.get('/carritodecompras', (req, res)=>{
    const htmlPath=path.resolve(__dirname,rutaAbsoluta+'carrito');
    res.render(htmlPath)
});
app.get('/login', (req, res)=>{
    const htmlPath=path.resolve(__dirname,rutaAbsoluta+'login');
    res.render(htmlPath)
});
app.get('/productos', (req, res)=>{
    const htmlPath=path.resolve(__dirname,rutaAbsoluta+'productos');
    res.render(htmlPath)
});
app.get('/ayuda', (req, res)=>{
    const htmlPath=path.resolve(__dirname,rutaAbsoluta+'ayuda');
    res.render(htmlPath)
});
app.listen(port, ()=>console.log("funcionando en localhost:"+port));
