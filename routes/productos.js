const express = require('express');
const router = express.Router();
const productsController=require('../controllers/productsController');


router.get('/',productsController.index);
router.get('/home',productsController.index);
router.get('/productos/:id',productsController.detail);
router.get('/productos/',productsController.productos);
router.get('/borrar/',productsController.borrar);
router.delete('/eliminar/:id',productsController.destroy);
module.exports=router;