const express = require('express');
const router = express.Router();
const usuariosController=require('../controllers/usuariosController');

const multer=require('multer');
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public/img/imgRegistro/')
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname+'-'+Date.now()+(file.originalname))
    }
})
const upload=multer({storage:storage})
router.get('/registro/agregar',usuariosController.create);
router.post('/registro/agregar',upload.array('pcfiles'),usuariosController.store);
module.exports=router;
