const express = require('express');
const router = express.Router();
const productsController=require('../controllers/productsController');
const authMiddleware = require('../Middlewares/authMiddleware');
const validateMiddleware = require('../Middlewares/validateMiddleware');


const multer=require('multer');
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public/img/imgHome/')
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname+'-'+Date.now()+(file.originalname))
    }
})
const upload=multer({storage:storage})
router.get('/productos/detail/:id',productsController.detail);
router.get('/productos/',productsController.productos);
router.get('/productos/borrar/',productsController.borrar);
router.delete('/productos/borrar/:id',productsController.destroy);
<<<<<<< HEAD
router.get('/productos/agregar', productsController.create);
router.post('/productos/agregarDb', productsController.createDb);
=======
router.get('/productos/agregarDb', productsController.createDb);
router.post('/productos/agregarDb',upload.array('pcfiles'),productsController.processcreateDb);
>>>>>>> e45f29121020a9e8b144f6eba117f33e7b12369f

router.put('/productos/editar/:id',upload.array('pcfiles'),productsController.processCreate);
router.get('/productos/editar/',productsController.editar);
router.get('/productos/agregar', productsController.create);
router.post('/productos',upload.array('pcfiles'),productsController.processCreate);
router.get('/productos/editar/:id',productsController.edit);
module.exports=router;