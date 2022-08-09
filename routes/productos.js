const express = require('express');
const router = express.Router();
const productsController=require('../controllers/productsController');

const multer  = require('multer')
const storage = multer.diskStorage({
     destination: function(req, file, cb){
        cb(null, '/img/imgproductos')
     },
     filename: function(req, file, cb){
        cb(null, file.fieldname, Date.now())
     }
})
const upload = multer({storage:storage})

router.get('/',productsController.index);
router.get('/home',productsController.index);
router.get('/productos/:id',productsController.detail);
router.get('/productos/',productsController.productos);
router.get('/borrar/',productsController.borrar);
router.delete('/productos/:id',productsController.destroy);
router.get('/agregar',productsController.create);
router.post('/productos', upload.single('uploaded_file'), productsController.store);
module.exports=router;