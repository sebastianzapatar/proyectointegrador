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
router.get('/detail/:id',productsController.detail);
router.get('/',productsController.productos);
router.get('/borrar/:id',productsController.borrar);
router.delete('/borrar/:id',productsController.delete);
// router.get('/productos/agregarDb', upload.array('pcfiles'),productsController.createDb);
router.post('/agregarDb',upload.array('pcfiles'),productsController.processcreateDb);

router.put('/editar/:id',upload.array('pcfiles'),productsController.processCreate);
router.get('/editar/',productsController.editar);
router.get('/agregar/', productsController.create);
router.post('/',upload.array('pcfiles'),productsController.processCreate);
router.get('/editar/:id',productsController.edit);
module.exports=router;