const express=require('express');
const app=express();
const port=3100;
const { dirname } = require('path');
const path=require('path');
const rutaAbsoluta='./views/';
app.use(express.static('public'));

app.get('/home', (req, res)=>{
    const htmlPath=path.resolve(__dirname,rutaAbsoluta+'home.html');
    res.sendFile(htmlPath)
});
app.get('/registro', (req, res)=>{
    const htmlPath=path.resolve(__dirname,rutaAbsoluta+'registro.html');
    res.sendFile(htmlPath)
});
app.listen(port, ()=>console.log("funcionando en localhost:"+port));
