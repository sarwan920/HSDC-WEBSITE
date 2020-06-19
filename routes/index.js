const express=require('express');

const router=express.Router();


const contactController=require('../controllers/index');

router.get('/',contactController.getIndex);


module.exports=router;