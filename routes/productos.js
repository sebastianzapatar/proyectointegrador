const express = require('express');
const router = express.Router();
const productsController=require('../controllers/productsController');


router.get('/',productsController.index);
router.get('/home',productsController.index);

module.exports=router;