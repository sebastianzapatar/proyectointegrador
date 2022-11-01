const express = require('express');
const router = express.Router();
const usuariosController=require('../controllers/usuariosController');
const authMiddleware = require('../Middlewares/authMiddleware');
const validateMiddleware = require('../Middlewares/validateMiddleware');

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
router.get('/registro/agregar', usuariosController.create);
router.get('/registro/login',validateMiddleware, usuariosController.login);
router.post('/registro/agregar',upload.array('pcfiles'),usuariosController.store);
router.post('/registro/login',usuariosController.login);
module.exports=router;
