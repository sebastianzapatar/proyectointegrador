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

router.get('/borrar/:id',authMiddleware,productsController.delete);
router.delete('/borrar/:id',authMiddleware,productsController.processDelete);


router.get('/agregar/', authMiddleware,productsController.create);
router.post('/agregarDb',upload.array('pcfiles'),productsController.processCreate);

router.get('/editar/:id',authMiddleware,productsController.edit);
router.put('/editar/:id',upload.array('pcfiles'),productsController.processEdit);

router.get('/detail/:id',authMiddleware,productsController.detail);
router.get('/',productsController.productos);

module.exports=router;

